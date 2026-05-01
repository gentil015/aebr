# AEBR Cyivugiza Church Website

A beautiful, bilingual (English & Kinyarwanda) website for AEBR Cyivugiza Church in Rwanda, featuring Faith, Health, and Development initiatives.

## 🌐 Language Support

- **English (EN)** - Default language
- **Kinyarwanda (KIN)** - Local language
- Click the **EN | KIN** toggle in the navigation bar to switch languages

## 📁 Project Structure

```
AEBR-yivugiza/
├── home.html          # Main landing page
├── gallery.html       # Photo gallery page
├── script.js          # JavaScript for interactions & translations
├── style.css          # All styling
├── robots.txt         # Search engine crawler instructions
├── sitemap.xml        # Sitemap for search engines
├── .htaccess          # Server configuration (Apache)
└── images/            # Church photos and assets
```

## 🔍 SEO Features Included

✅ **Search Engine Optimization**
- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card meta tags
- JSON-LD structured data (Schema.org)
- Mobile-friendly responsive design
- Fast loading with image optimization
- Proper heading hierarchy (H1, H2, H3)
- Internal linking strategy
- Descriptive image alt text

✅ **Search Engine Discovery**
- `robots.txt` - Guides search engine crawlers
- `sitemap.xml` - Lists all pages for indexing
- Canonical URLs to prevent duplicate content
- Proper HTTP headers via `.htaccess`

✅ **Performance Optimization**
- Gzip compression enabled
- Browser caching configured
- CSS/JS/Image caching strategies
- Lazy loading for images

## 🚀 How Search Engines Will Find You

### 1. **Google Search Console Setup** (FREE)
Visit: https://search.google.com/search-console/about
1. Verify your domain
2. Submit your sitemap (`sitemap.xml`)
3. Monitor your search performance

### 2. **Bing Webmaster Tools Setup** (FREE)
Visit: https://www.bing.com/webmasters/
1. Add your site
2. Submit sitemap
3. Check crawl errors

### 3. **Keywords to Target**
Your site is now optimized for searches like:
- "AEBR Cyivugiza Church Rwanda"
- "Church in Rutsiro District"
- "Church in Nyabirasi Rwanda"
- "Faith Health Development Rwanda"
- "Worship services Rwanda"
- "Community outreach Rutsiro"
- And many more...

## 🔧 Deployment Instructions

### For Local Testing:
```bash
cd AEBR-yivugiza
python -m http.server 8000
# Visit: http://localhost:8000/home.html
```

### For Live Website:
1. **Domain Setup**: Get a domain (e.g., aebrcyivugizachurch.rw)
2. **Hosting**: Choose a hosting provider
3. **Upload Files**: Use FTP/SFTP to upload all files
4. **SSL Certificate**: Enable HTTPS (important for SEO and security)
5. **DNS Configuration**: Point domain to hosting provider

### Required Updates for Live Site:
Edit `home.html` and `gallery.html` - Replace these placeholders:
```html
<!-- Replace these URLs with your actual domain -->
https://aebrcyivugizachurch.rw/
https://aebrcyivugizachurch.rw/home.html
https://aebrcyivugizachurch.rw/gallery.html
```

## 📱 Responsive Design

The website is optimized for:
- 📱 Mobile phones (320px+)
- 💻 Tablets (768px+)
- 🖥️ Desktop computers (1200px+)

## 🎨 Features

- ✨ Beautiful Sacred Editorial design
- 🌍 Bilingual support (English & Kinyarwanda)
- 📸 Interactive photo gallery with lightbox
- 🎯 Smooth scroll animations
- 📧 Contact form with email notifications
- 🗺️ Embedded Google Maps
- ⚡ Fast loading performance
- ♿ Accessible design

## 📧 Contact Form Setup

The contact form is pre-configured with EmailJS. To make it fully functional:

1. Go to: https://www.emailjs.com/
2. Create a free account
3. Add an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Update these values in `script.js`:
   ```javascript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

## 🔐 Security Best Practices

- ✅ HTTPS enabled (when deployed)
- ✅ Security headers configured
- ✅ Protected sensitive files
- ✅ No sensitive data in public code

## 📊 Analytics Setup (Optional)

Add Google Analytics to track visitors:

1. Create Google Analytics account: https://analytics.google.com/
2. Get your tracking ID (GA-XXXXX or G-XXXXX)
3. Add this to both HTML files in the `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA-XXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA-XXXXX');
</script>
```

## 🗂️ File Descriptions

| File | Purpose |
|------|---------|
| `home.html` | Main landing page with all sections |
| `gallery.html` | Photo gallery with filtering & lightbox |
| `script.js` | Language switching, animations, forms |
| `style.css` | All styling & responsive design |
| `robots.txt` | Search engine crawler instructions |
| `sitemap.xml` | List of all pages for search engines |
| `.htaccess` | Server configuration & optimization |

## 💡 Tips for Better Search Rankings

1. **Regular Updates**: Update gallery photos and content regularly
2. **Social Media**: Share pages on Facebook, Instagram, Twitter
3. **Backlinks**: Get other websites to link to your site
4. **Mobile First**: Ensure mobile experience is excellent
5. **Local SEO**: Add your church to Google My Business
6. **Content**: Write blog posts about church activities
7. **Keywords**: Use natural keywords in your content

## 🌟 Get Listed Locally

- Add to **Google My Business**: https://www.google.com/business/
- Add to **Apple Maps**: https://www.apple.com/maps/
- Add to **OpenStreetMap**: https://www.openstreetmap.org/

## 📞 Support & Maintenance

- Test website monthly
- Update gallery photos regularly
- Monitor Google Search Console for errors
- Update sitemap.xml when adding new pages
- Keep social media links updated

---

**Website Status**: ✅ SEO-Optimized & Ready for Search Engines

For questions or technical support, contact: turimumahoroetienne@gmail.com
