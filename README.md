# Sunflower Email Signature Generator

A professional email signature generator for Sunflower Childcare Group employees. This tool allows team members to create consistent, branded email signatures that work across all email clients.

🌻 **Live Demo:** [https://gunner814.github.io/sunflower-signature-generator](https://gunner814.github.io/sunflower-signature-generator)

![Sunflower Logo](https://lh3.googleusercontent.com/d/1jyMkGfMMrs3oraejoV_0Du1PLBT-QOWJ)

## Features

- ✅ **Professional Design** - Matches company branding with Sunflower logo
- ✅ **Real-time Preview** - See your signature as you type
- ✅ **Easy Integration** - One-click copy to Gmail and other email clients
- ✅ **Mobile Responsive** - Works on desktop, tablet, and mobile devices
- ✅ **Form Validation** - Ensures all required fields are completed correctly
- ✅ **Download Option** - Save signature as HTML file for manual installation
- ✅ **Auto-save** - Remembers your information for future visits
- ✅ **Social Media Links** - Optional Facebook and Instagram integration
- ✅ **Location Field** - Optional location/address information

## How to Use

1. **Fill in your information:**
   - Full Name (required)
   - Job Title (required)
   - Email Address (required)
   - Website (optional)
   - Facebook Page URL (optional)
   - Instagram Handle (optional)
   - Location (optional)

2. **Generate your signature:**
   - Click "Generate Signature"
   - Review the real-time preview

3. **Install in Gmail:**
   - Click "Copy Signature"
   - Follow the built-in Gmail setup instructions
   - Or download the HTML file for manual installation

## Technical Details

### File Structure
```
sunflower-signature-generator/
├── index.html          # Main application page
├── css/
│   └── style.css       # Responsive styling
├── js/
│   └── signature-generator.js  # Core functionality
└── README.md           # Documentation
```

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Responsive design with grid and flexbox
- **Vanilla JavaScript** - No dependencies, fast loading
- **Google Fonts** - Montserrat font family
- **Google Drive** - Image hosting for logos and icons

### Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

### Email Client Compatibility
The generated signatures work with:
- ✅ Gmail (web and mobile)
- ✅ Outlook (web, desktop, mobile)
- ✅ Apple Mail
- ✅ Thunderbird
- ✅ Yahoo Mail
- ✅ Most other email clients

## Installation

### Option 1: GitHub Pages (Recommended)
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Access at: `https://[username].github.io/sunflower-signature-generator`

### Option 2: Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/[username]/sunflower-signature-generator.git
   ```
2. Open `index.html` in your web browser
3. No build process required!

### Option 3: Web Server
1. Upload files to your web server
2. Ensure HTTPS is enabled for clipboard functionality
3. Access through your domain

## Configuration

### Custom Branding
To customize for your organization:

1. **Logo**: Replace the Google Drive image URL in `js/signature-generator.js`
2. **Company Name**: Update "Sunflower Childcare Group Pte Ltd" in the template
3. **Colors**: Modify CSS variables in `css/style.css`
4. **Default Website**: Change the fallback website URL
5. **Social Media Icons**: Replace Google Drive URLs with your own hosted icons

### Icon URLs
Current icon URLs (hosted on Google Drive):
- Email: `1X2PDjwAnYgpfh0tQHvZDzRPRUtW2kojn`
- Website: `12GR50PYa813tP7JJjBEPtZj_PwXkK54f`
- Facebook: `1mMLCPHvIUWZaD10M9E-kGjyG7JbwUgA7`
- Instagram: `1-htPqSQUC8JrJXFtIu3U6HmN1VzzAp-l`
- Location: `1KZeuIwg_PRePcRpzpePNtMTqJ5OVgWnL`
- Logo: `1jyMkGfMMrs3oraejoV_0Du1PLBT-QOWJ`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## Security

- No data is sent to external servers
- Form data is stored locally in browser only
- All images are hosted on trusted Google Drive
- HTTPS recommended for clipboard functionality

## Support

For technical support or feature requests:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include browser and email client information

## License

© 2025 Sunflower Childcare Group Pte Ltd. All rights reserved.

This signature generator is for internal use by Sunflower Childcare Group employees only.

## Troubleshooting

### Common Issues

**Signature not copying:**
- Ensure you're using HTTPS
- Try the download option instead
- Check browser clipboard permissions

**Images not displaying:**
- Verify Google Drive sharing permissions
- Check internet connection
- Try refreshing the page

**Styling issues in email:**
- Use the download option for manual copying
- Ensure email client supports HTML signatures
- Check with IT department for email client settings

**Form not saving:**
- Enable browser local storage
- Clear browser cache and try again
- Check browser privacy settings

---

*Built with ❤️ for the Sunflower Childcare Group team*