# Domain Integration Guide: `magmercyapartments.com`

This guide explains how to connect your domain registered on **Namecheap** (`magmercyapartments.com`) to the **MagMercy Apartment** website hosted on **Vercel** (`magmercy-apartment.vercel.app`).

---

## 🧭 Architecture Overview

```
Visitor -> https://magmercyapartments.com / https://www.magmercyapartments.com
             │
             ▼
      Namecheap DNS (A Record / CNAME)
             │
             ▼
      Vercel Edge Network (76.76.21.21 / cname.vercel-dns.com)
             │
      Automatic SSL (Let's Encrypt)
             │
             ▼
      Next.js 14 Production App (MagMercy Apartment Ikoyi)
```

---

## 📋 Step 1: Add the Domain in Vercel

1. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and sign in.
2. Click on the project **`magmercy-apartment`**.
3. Go to **Settings** (top navigation tab) > **Domains** (left sidebar).
4. In the text field, type:
   ```
   magmercyapartments.com
   ```
5. Click **Add**.
6. Vercel will recommend adding both `magmercyapartments.com` and `www.magmercyapartments.com` with an automatic redirect (e.g., redirect `magmercyapartments.com` to `www.magmercyapartments.com` or vice-versa). Select this recommended option.

---

## 🛠️ Step 2: Configure Namecheap DNS Records

Choose **Method A** (Recommended - preserves existing Namecheap emails if any) or **Method B** (Full delegation).

### Method A: Configure Advanced DNS (Recommended)

1. Log in to [Namecheap](https://ap.www.namecheap.com/).
2. In the left sidebar, click **Domain List**.
3. Find **`magmercyapartments.com`** and click **Manage**.
4. Check the **Domain** tab:
   - Ensure **Nameservers** is set to **Namecheap BasicDNS**.
5. Switch to the **Advanced DNS** tab at the top.
6. In the **Host Records** table:
   - **Delete** any existing default parking records (such as `Parking Page` or default `URL Redirect` / `@` records).
   - Click **Add New Record**:
     | Type | Host | Value | TTL |
     | :--- | :--- | :--- | :--- |
     | **A Record** | `@` | `76.76.21.21` | `Automatic` (or `1 min`) |
   - Click **Add New Record**:
     | Type | Host | Value | TTL |
     | :--- | :--- | :--- | :--- |
     | **CNAME Record** | `www` | `cname.vercel-dns.com.` | `Automatic` (or `1 min`) |
7. Click the green checkmarks (or **Save All Changes**).

---

### Method B: Vercel Nameservers (Alternative - 100% Hands-Off)

If you do not use Namecheap email hosting or other subdomains:
1. In Namecheap > **Domain List** > click **Manage** next to `magmercyapartments.com`.
2. Under the **Domain** tab, find the **Nameservers** dropdown.
3. Select **Custom DNS**.
4. Enter the two Vercel nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
5. Click the green checkmark to save.

---

## 🔒 Step 3: SSL Certificate & Verification

- Once the DNS records are saved, Vercel will detect them automatically.
- Vercel automatically generates an **SSL/TLS Certificate** via Let's Encrypt.
- DNS propagation typically takes **5 to 30 minutes** (maximum 24-48 hours globally).
- When ready, the status in Vercel will turn green: **Valid Configuration**.

---

## 🌐 Step 4: Environment Variables (Vercel)

1. In Vercel > **Settings** > **Environment Variables**.
2. Add or update:
   - **Key**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://www.magmercyapartments.com`
   - **Target**: Production, Preview, Development.
3. Click **Save**.
4. Go to **Deployments** > click on your latest deployment > click **Redeploy** to apply the updated environment variable to the production build.

---

## 🔍 Step 5: Verification Checklist

Once DNS propagates:
- [ ] Visit `https://www.magmercyapartments.com` in your browser.
- [ ] Visit `https://magmercyapartments.com` to confirm it redirects smoothly to `https://www.magmercyapartments.com`.
- [ ] Verify the padlock icon indicates a valid SSL certificate.
- [ ] Test the sitemap: `https://www.magmercyapartments.com/sitemap.xml`.
- [ ] Test robots: `https://www.magmercyapartments.com/robots.txt`.
- [ ] Share `https://www.magmercyapartments.com` on WhatsApp to verify that the rich image preview and title load properly.
