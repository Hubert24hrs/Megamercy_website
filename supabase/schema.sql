-- ==============================================================================
-- MagMercy Apartment — PMS & OTA Calendar Synchronization Schema
-- Target: Supabase / PostgreSQL 15+
-- ==============================================================================

-- 1. Extension setup for UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Platform Feeds Configuration (Stores Airbnb & Booking.com export links)
CREATE TABLE IF NOT EXISTS pms_calendar_feeds (
    id TEXT PRIMARY KEY,
    platform TEXT NOT NULL CHECK (platform IN ('airbnb', 'booking_com', 'custom')),
    name TEXT NOT NULL,
    url TEXT NOT NULL,
    suite_id TEXT NOT NULL DEFAULT 'penthouse',
    active BOOLEAN NOT NULL DEFAULT true,
    last_sync TIMESTAMPTZ,
    last_status TEXT CHECK (last_status IN ('success', 'error')),
    error_message TEXT,
    events_imported INT DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Master Reservations & Blocked Intervals
CREATE TABLE IF NOT EXISTS pms_reservations (
    id TEXT PRIMARY KEY DEFAULT ('res_' || uuid_generate_v4()),
    uid TEXT UNIQUE NOT NULL,
    suite_id TEXT NOT NULL DEFAULT 'penthouse',
    summary TEXT NOT NULL,
    description TEXT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    source TEXT NOT NULL CHECK (source IN ('direct', 'airbnb', 'booking_com', 'owner_block')),
    status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'tentative', 'cancelled')),
    guest_name TEXT,
    guest_email TEXT,
    guest_phone TEXT,
    pci_token TEXT,
    total_amount_usd NUMERIC(10, 2),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT valid_date_range CHECK (end_date > start_date)
);

-- 4. Sync Audit History
CREATE TABLE IF NOT EXISTS pms_sync_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    feed_id TEXT REFERENCES pms_calendar_feeds(id) ON DELETE CASCADE,
    platform TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('success', 'error')),
    events_count INT DEFAULT 0,
    error_message TEXT,
    executed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Indexes for High-Speed Availability Lookups
CREATE INDEX IF NOT EXISTS idx_pms_reservations_dates ON pms_reservations(start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_pms_reservations_suite ON pms_reservations(suite_id);
CREATE INDEX IF NOT EXISTS idx_pms_reservations_status ON pms_reservations(status);
CREATE INDEX IF NOT EXISTS idx_pms_reservations_source ON pms_reservations(source);

-- 6. Row Level Security (RLS)
ALTER TABLE pms_calendar_feeds ENABLE ROW LEVEL SECURITY;
ALTER TABLE pms_reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE pms_sync_history ENABLE ROW LEVEL SECURITY;

-- Public Policy: Anyone can query availability dates (anonymized view)
CREATE OR REPLACE VIEW pms_public_availability AS
SELECT 
    id,
    suite_id,
    start_date,
    end_date,
    source,
    status
FROM pms_reservations
WHERE status != 'cancelled';

-- Service role full access
CREATE POLICY "Service Role Full Access Feeds" ON pms_calendar_feeds
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service Role Full Access Reservations" ON pms_reservations
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service Role Full Access History" ON pms_sync_history
    FOR ALL USING (auth.role() = 'service_role');
