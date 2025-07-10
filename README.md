# J Square Photography Email Signature Generator

A professional email signature generator for J Square Photography. This tool allows team members to create consistent, branded email signatures that work across all email clients.

📸 **Live Demo:** [https://gunner814.github.io/JSP-Signature-Generator](https://gunner814.github.io/JSP-Signature-Generator)

![J Square Photography](logo.png)

## Features

- ✅ **Professional Design** - Matches company branding with J Square Photography logo
- ✅ **Real-time Preview** - See your signature as you type
- ✅ **Easy Integration** - One-click copy to Gmail and other email clients
- ✅ **Mobile Responsive** - Works on desktop, tablet, and mobile devices
- ✅ **Form Validation** - Ensures all required fields are completed correctly
- ✅ **Download Option** - Save signature as HTML file for manual installation
- ✅ **Auto-save** - Remembers your information for future visits
- ✅ **Social Media Links** - Instagram, Facebook, and LinkedIn integration
- ✅ **Phone Number** - Optional phone number field
- ✅ **Clean Layout** - Logo on left, contact info on right (matching brand guidelines)

## How to Use

1. **Fill in your information:**
   - Full Name (required)
   - Job Title (required) - e.g., "Founder, J Square Photography"
   - Email Address (required)
   - Website (optional)
   - Phone Number (optional)
   - Facebook Page URL (optional)
   - Instagram Handle (optional)
   - LinkedIn Profile (optional)

2. **Generate your signature:**
   - Click "Generate Signature"
   - Review the real-time preview

3. **Install in Gmail:**
   - Click "Copy Signature"
   - Follow the built-in Gmail setup instructions
   - Or download the HTML file for manual installation

## Signature Layout

The signature follows the J Square Photography brand guidelines:
- **Left Side**: J Square Photography logo
- **Right Side**: Contact information (name, title, phone, website)
- **Bottom**: Social media icons (Instagram, Facebook, LinkedIn)

## Technical Details

### File Structure
```
JSP-Signature-Generator/
├── index.html          # Main application page
├── css/
│   └── style.css       # Responsive styling
├── js/
│   └── signature-generator.js  # Core functionality
├── logo.png            # J Square Photography logo
├── 1.png              # Instagram icon
├── 2.png              # Facebook icon
├── 3.png              # LinkedIn icon
└── README.md           # Documentation
```

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Responsive design with grid and flexbox
- **Vanilla JavaScript** - No dependencies, fast loading
- **Google Fonts** - Montserrat font family
- **Local Images** - Self-hosted logo and social media icons

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
3. Access at: `https://[username].github.io/JSP-Signature-Generator`

### Option 2: Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Gunner814/JSP-Signature-Generator.git
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

1. **Logo**: Replace `logo.png` with your company logo
2. **Company Name**: Update "J Square Photography" in the template
3. **Colors**: Modify CSS variables in `css/style.css`
4. **Default Website**: Change the fallback website URL
5. **Social Media Icons**: Replace `1.png`, `2.png`, `3.png` with your own icons

### Social Media Icons
- `1.png` - Instagram icon
- `2.png` - Facebook icon  
- `3.png` - LinkedIn icon

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## Security

- No data is sent to external servers
- Form data is stored locally in browser only
- All images are self-hosted for reliability
- HTTPS recommended for clipboard functionality

## Support

For technical support or feature requests:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include browser and email client information

## License

© 2025 J Square Photography. All rights reserved.

This signature generator is designed for J Square Photography team members and business use.

## Troubleshooting

### Common Issues

**Signature not copying:**
- Ensure you're using HTTPS
- Try the download option instead
- Check browser clipboard permissions

**Images not displaying:**
- Verify all image files are present
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

*Built with 📸 for the J Square Photography team*