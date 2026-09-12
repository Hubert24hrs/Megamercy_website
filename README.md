# MagMercy Apartment — Ultra-Luxury 3D Short-Let Website

> **Location**: Bourdillon Road, Ikoyi, Lagos, Nigeria  
> **Brand Positioning**: Ultra-premium, futuristic, secure short-let apartment experience for discerning travelers, executives, and diplomats visiting Lagos.  
> **Official Repository**: [Hubert24hrs/Megamercy_website](https://github.com/Hubert24hrs/Megamercy_website)

---

## 🏛️ Architectural Overview

MagMercy Apartment is an award-winning digital experience crafted for an ultra-luxury short-let residence in prime Ikoyi, Lagos. The site blends:
* **Interactive 3D WebGL (Three.js)**: A real-time 3D pavilion with orbiting architectural geometry, camera viewpoints, and low-power fallback.
* **Smart Fortress Telemetry**: A high-tech smart-home / physical security HUD with biometric unlock simulation, redundant power monitoring, and perimeter surveillance indicators.
* **Multi-Currency Live Booking Engine**: Instant pricing conversions across Nigerian Naira (`NGN ₦`), US Dollars (`USD $`), British Pounds (`GBP £`), and Euros (`EUR €`) with dynamic stay upgrades (Armored Chauffeur, Private Chef, Airport Tarmac VIP protocol).
* **Interactive Architectural CAD Floor Plan**: Spatial zoning breakdowns, room specifications, and dimension inspections.
* **IoT Penthouse Simulator**: Interactive controls for Lutron lighting presets, Daikin VRV temperature, motorized shades, and Bang & Olufsen soundscapes.
* **Direct VIP Butler Concierge**: Floating WhatsApp Butler desk with automated high-level request generators.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router), React 18, TypeScript |
| **Styling** | Tailwind CSS with custom coastal airy, obsidian, gold, and glassmorphism tokens |
| **3D Graphics** | Three.js (WebGL with ACESFilmic tone mapping, ambient particles, and mouse parallax) |
| **Icons** | Lucide React |
| **Payments Integration** | Prepared hooks for Paystack & Flutterwave (Nigeria) + Stripe (International) |
| **Data Protection** | Compliant with Nigeria Data Protection Regulation (NDPR) & GDPR |

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with SEO & Schema.org LodgingBusiness
│   │   ├── page.tsx               # Flagship Homepage with Hero3D & all sections
│   │   ├── apartment/page.tsx     # 3D Virtual Tour & Floor Plan specs
│   │   ├── amenities/page.tsx     # IoT Penthouse living console
│   │   ├── security/page.tsx      # Diplomatic Fortress security & privacy portal
│   │   ├── booking/page.tsx       # Multi-currency reservation engine
│   │   ├── location/page.tsx      # Ikoyi neighborhood guide & transit times
│   │   ├── gallery/page.tsx       # Categorized 4K visual gallery
│   │   ├── reviews/page.tsx       # Verified diplomatic guest scoreboard
│   │   ├── about/page.tsx         # Brand narrative & architectural origin
│   │   ├── contact/page.tsx       # Encrypted concierge inquiry desk
│   │   ├── legal/page.tsx         # House rules, cancellation & NDPR policies
│   │   └── globals.css            # Custom luxury scrollbars, noise overlay, glassmorphism
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroScene.tsx          # 3D WebGL penthouse pavilion scene
│   │   │   └── VirtualTourCanvas.tsx  # 360° room walkthrough with clickable hotspots
│   │   ├── Navbar.tsx             # Floating glass header with live currency toggle & Lagos time
│   │   ├── Footer.tsx             # Master footer with concierge broadcast
│   │   ├── BookingWidget.tsx      # Interactive dates, guests, add-ons & pricing calculator
│   │   ├── SecurityDashboard.tsx  # Smart-building security HUD & biometric tester
│   │   ├── InteractiveFloorPlan.tsx # Architectural CAD floor plan inspector
│   │   ├── IoTSimulator.tsx       # Interactive penthouse smart lighting & climate console
│   │   ├── ReviewsCarousel.tsx    # Diplomatic verified reviews carousel
│   │   └── WhatsAppConcierge.tsx  # Floating 24/7 VIP butler drawer
│   └── lib/
│       ├── types.ts               # Core TypeScript definitions
│       ├── data.ts                # Master repository data (rooms, amenities, landmarks)
│       └── currency.ts            # Currency conversion logic (USD, NGN, GBP, EUR)
├── public/                        # Static brand assets
├── tailwind.config.ts             # Coastal, obsidian, champagne gold, and emerald design system
├── tsconfig.json                  # TypeScript compiler settings
└── package.json                   # Dependencies and npm scripts
```

---

## 🚀 Getting Started

### 1. Prerequisites
* Node.js v18.18+ or v20+
* npm or yarn

### 2. Installation
```bash
git clone https://github.com/Hubert24hrs/Megamercy_website.git
cd Megamercy_website
npm install
```

### 3. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Building for Production
```bash
npm run build
npm run start
```

---

## 🔒 Security & Data Confidentiality
* **Zero Raw Card Storage**: Compliant with PCI-DSS via tokenized checkouts.
* **NDPR Compliance**: Guest credentials and biometric keys are encrypted at rest and permanently purged upon checkout.
* **Perimeter-Only Surveillance**: Zero internal cameras inside private quarters.

---

## 📜 License
Private & Proprietary. All rights reserved by **MagMercy Apartment**, Ikoyi, Lagos.
