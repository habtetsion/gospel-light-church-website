# Security Documentation

This document outlines the security measures implemented for Gospel Light Eritrean Baptist Church website.

## 🔒 Implemented Security Measures

### 1. Content Security Policy (CSP)

**What it does**: Prevents Cross-Site Scripting (XSS) and other code injection attacks by controlling which resources can be loaded.

**Implementation**: Via meta tag in `index.html`

**Allowed Resources**:
- **Scripts**: Self, YouTube, EmailJS, JSDelivr CDN
- **Styles**: Self, Unpkg, JSDelivr (for Leaflet maps)
- **Images**: Self + any HTTPS/HTTP source (for user-uploaded images, YouTube thumbnails)
- **Connections**: EmailJS API, RSS2JSON API, YouTube, OpenStreetMap tiles
- **Frames**: YouTube video embeds only
- **Objects**: Blocked (no Flash, Java applets)

**Security Features**:
- `upgrade-insecure-requests`: Automatically upgrades HTTP to HTTPS
- `base-uri 'self'`: Prevents base tag hijacking
- `form-action 'self'`: Forms can only submit to same origin

### 2. X-Frame-Options

**What it does**: Prevents clickjacking attacks by controlling whether your site can be embedded in iframes.

**Setting**: `SAMEORIGIN` - Only allows your own site to frame pages

### 3. X-Content-Type-Options

**What it does**: Prevents MIME type sniffing, reducing risk of malicious file uploads being executed.

**Setting**: `nosniff` - Browsers must respect declared content types

### 4. Referrer Policy

**What it does**: Controls how much referrer information is shared when users navigate away from your site.

**Setting**: `strict-origin-when-cross-origin` - Shares full URL for same-origin, only origin for cross-origin HTTPS

### 5. Permissions Policy

**What it does**: Restricts access to browser features and APIs.

**Disabled Features**:
- Geolocation
- Camera
- Microphone
- Payment APIs
- USB
- Sensor APIs (magnetometer, gyroscope, accelerometer)

## 🛡️ Additional Security Measures

### Dependency Management
- Regular security audits via `npm audit`
- Automated dependency updates
- React Router updated to patch XSS vulnerabilities

### Secret Management
- `.env` files excluded from git via `.gitignore`
- EmailJS keys loaded from environment variables
- GitHub tokens cleared from cache
- No hardcoded secrets in source code

### Input Validation
- Contact form validated with Yup schema
- Email validation
- Phone number format validation
- Message length requirements

### HTTPS
- Enforced via GitHub Pages
- All external resources loaded over HTTPS
- CSP upgrade-insecure-requests directive

## 📋 Security Checklist

- [x] Content Security Policy implemented
- [x] Clickjacking protection (X-Frame-Options)
- [x] MIME sniffing prevention
- [x] Referrer policy configured
- [x] Permissions policy configured
- [x] Dependencies audited and updated
- [x] Secrets excluded from git
- [x] Input validation on forms
- [x] HTTPS enforced
- [x] Security headers documented

## 🚨 Known Issues

### esbuild Development Server (Moderate Severity)
- **Status**: Open
- **Impact**: Development environment only
- **Risk**: Low (doesn't affect production)
- **Mitigation**: Only run dev server on trusted networks
- **Fix**: Upgrade to Vite 7 (requires testing)

## 📝 Best Practices for Maintainers

### When Adding New Features

1. **External Resources**: Update CSP in `index.html` if adding new third-party services
2. **Dependencies**: Run `npm audit` before and after adding packages
3. **Secrets**: Never commit API keys, tokens, or passwords
4. **Forms**: Always validate and sanitize user input

### Regular Maintenance

```bash
# Check for vulnerabilities (run monthly)
npm audit

# Update dependencies safely
npm audit fix

# Update all dependencies (test thoroughly)
npm update
```

### Before Deployment

```bash
# Run security audit
npm audit

# Build and test
npm run build
npm run preview

# Deploy
npm run deploy
```

## 🔐 API Keys & Secrets

### EmailJS Configuration
- Keys stored in environment variables (`.env` file locally)
- Never commit `.env` file to git
- Use `.env.example` as template for new developers

### GitHub Tokens
- Personal access tokens are cached locally by gh-pages
- Cache directory (`node_modules/.cache`) is gitignored
- Revoke and rotate tokens regularly at: https://github.com/settings/tokens

## 📞 Security Incident Response

If you discover a security vulnerability:

1. **Do NOT** open a public GitHub issue
2. Email the development team immediately
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## 🔄 Security Update Schedule

- **Weekly**: Monitor for critical security advisories
- **Monthly**: Run `npm audit` and review dependencies
- **Quarterly**: Review and update security policies
- **Annually**: Full security audit and penetration testing (if budget allows)

## 📚 Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Content Security Policy Reference](https://content-security-policy.com/)
- [Mozilla Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [npm Security Best Practices](https://docs.npmjs.com/packages-and-modules/securing-your-code)

## 📅 Last Updated

This document was last updated on February 2, 2026.

---

**Note**: This is a church website with no payment processing, user authentication, or sensitive data storage. Security measures are appropriate for a public informational website.
