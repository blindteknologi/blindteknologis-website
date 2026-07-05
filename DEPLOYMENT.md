# Deployment Guide — Blind Teknologis Website

## GitHub Pages (Default)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys to GitHub Pages on every push to `main`.

### Enable GitHub Pages (one-time)

1. Open the repository on GitHub: `https://github.com/blindteknologi/blindteknologis-website`
2. Go to **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. After the first successful workflow run, the site will be available at:
   `https://blindteknologi.github.io/blindteknologis-website/`

## Custom Domain — blindteknologis.com

**Status:** Verified and active at `https://blindteknologis.com`

The site builds with `base: '/'` and deploys via GitHub Actions on every push to `main`.
`public/CNAME` contains `blindteknologis.com`.

### DNS Records (reference)

| Type  | Name | Value                              | TTL  |
|-------|------|------------------------------------|------|
| A     | @    | `185.199.108.153`                  | 3600 |
| A     | @    | `185.199.109.153`                  | 3600 |
| A     | @    | `185.199.110.153`                  | 3600 |
| A     | @    | `185.199.111.153`                  | 3600 |
| CNAME | www  | `blindteknologi.github.io`         | 3600 |

> **Note:** GitHub may display different IP addresses in the repository Pages settings. If so, use the values shown there instead of the table above.

### GitHub Repository Settings

1. Go to **Settings → Pages → Custom domain**
2. Enter: `blindteknologis.com`
3. Enable **Enforce HTTPS** once DNS verification completes
4. Add a `CNAME` file to the repository root (or `public/CNAME` for Vite) containing:
   ```
   blindteknologis.com
   ```

### Apex vs www

- `blindteknologis.com` (apex) requires the **A records** above
- `www.blindteknologis.com` requires the **CNAME** to `blindteknologi.github.io`
- Configure both if you want either URL to work; set your preferred canonical domain in GitHub Pages settings

### DNS Propagation

DNS changes can take up to 48 hours to propagate globally.

## Local Preview of Production Build

```bash
npm run build
npm run preview
```

## Contact

Deployment questions: api@blindteknologis.com
