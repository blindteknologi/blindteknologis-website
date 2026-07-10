# DNS Fix — Migrating from Google Sites to GitHub Pages

If `blindteknologis.com` still opens `https://sites.google.com/blindteknologis.com/blindteknologis`, the GitHub deployment is fine — DNS or domain forwarding is still routing traffic to Google Sites.

**Verified working (external checks):**
- `https://blindteknologis.com/` → GitHub Pages (HTTP 200, `Server: GitHub.com`)
- DNS A records → `185.199.108–111.153` (GitHub Pages)
- `www` CNAME → `blindteknologi.github.io`

---

## Step 1 — Remove Google Sites custom domain

1. Open [Google Sites](https://sites.google.com) and sign in with the account that owns the old site.
2. Open the site at `blindteknologis` (or the site using this domain).
3. Go to **Settings** (gear) → **Custom domains** (or **Manage custom domains**).
4. **Remove** `blindteknologis.com` and `www.blindteknologis.com` from the Google Site.
5. Save and allow a few minutes for Google to release the domain mapping.

Until this is removed, Google may continue to serve the old site for some users or paths.

---

## Step 2 — Fix Squarespace DNS (domain uses Squarespace nameservers)

DNS is hosted at **Squarespace** (`nsb1–4.squarespacedns.com`).

1. Log in to [Squarespace Domains](https://account.squarespace.com/domains).
2. Select **blindteknologis.com** → **DNS Settings** (or **DNS records**).

### Remove these if present (Google Sites / forwarding)

| Remove | Type | Name | Value |
|--------|------|------|-------|
| ❌ | CNAME | `@` | `ghs.googlehosted.com` |
| ❌ | CNAME | `www` | `ghs.googlehosted.com` |
| ❌ | URL redirect / forwarding | any | `sites.google.com` or Google Sites |
| ❌ | A | `@` | Google / Squarespace parking IPs (not GitHub) |

Also check **Domain forwarding** / **Website** settings and **disable any redirect** to Google Sites.

### Add / keep these (GitHub Pages)

| Type | Host | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `blindteknologi.github.io` |

> Use the exact IPs shown in GitHub → **Settings → Pages → Custom domain** if they differ.

---

## Step 3 — Confirm GitHub Pages

1. Open https://github.com/blindteknologi/blindteknologis-website/settings/pages
2. **Custom domain:** `blindteknologis.com`
3. **Enforce HTTPS:** enabled
4. DNS check should show verified (green)

---

## Step 4 — Clear local cache

After DNS changes:

1. Open an **Incognito / Private** window.
2. Visit `https://blindteknologis.com/` (not the old `sites.google.com/...` bookmark).
3. Flush DNS locally:
   - Windows: `ipconfig /flushdns`
   - macOS: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`

---

## Quick test

```bash
# Should return GitHub Pages IPs (185.199.x.x)
nslookup blindteknologis.com 8.8.8.8

# Should show Server: GitHub.com
curl -sI https://blindteknologis.com/
```

If `nslookup` shows GitHub IPs but the browser still shows Google Sites, you are likely using an old bookmark or cached redirect — use the root URL `https://blindteknologis.com/` directly.

---

## Still stuck?

Contact **api@blindteknologis.com** with:
- Screenshot of Squarespace DNS records
- Screenshot of Google Sites custom domain settings
- Output of `nslookup blindteknologis.com`
