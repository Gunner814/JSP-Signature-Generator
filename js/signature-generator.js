// Sunflower Email Signature Generator
class SignatureGenerator {
    constructor() {
        this.form = document.getElementById('signatureForm');
        this.preview = document.getElementById('signaturePreview');
        this.actionButtons = document.getElementById('actionButtons');
        this.copyStatus = document.getElementById('copyStatus');
        this.modal = document.getElementById('instructionsModal');
        
        this.initializeEventListeners();
        this.loadSavedData();
    }

    initializeEventListeners() {
        // Form inputs - real-time preview
        const inputs = this.form.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.updatePreview());
            input.addEventListener('blur', () => this.saveToLocalStorage());
        });

        // Buttons
        document.getElementById('generateBtn').addEventListener('click', () => this.generateSignature());
        document.getElementById('clearBtn').addEventListener('click', () => this.clearForm());
        document.getElementById('copyBtn').addEventListener('click', () => this.copySignature());
        document.getElementById('downloadBtn').addEventListener('click', () => this.downloadSignature());
        document.getElementById('instructionsBtn').addEventListener('click', () => this.showInstructions());
        document.getElementById('closeModal').addEventListener('click', () => this.hideInstructions());

        // Modal close on background click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideInstructions();
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display !== 'none') {
                this.hideInstructions();
            }
        });
    }

    getFormData() {
        return {
            fullName: document.getElementById('fullName').value.trim(),
            jobTitle: document.getElementById('jobTitle').value.trim(),
            email: document.getElementById('email').value.trim(),
            website: document.getElementById('website').value.trim(),
            facebook: document.getElementById('facebook').value.trim(),
            instagram: document.getElementById('instagram').value.trim(),
            linkedin: document.getElementById('linkedin').value.trim(),
            phone: document.getElementById('phone').value.trim()
        };
    }

    validateForm(data) {
        const errors = [];
        
        if (!data.fullName) {
            errors.push('• Full Name is required for your email signature');
        }
        
        if (!data.jobTitle) {
            errors.push('• Job Title is required (e.g., "Founder, J Square Photography")');
        }
        
        if (!data.email) {
            errors.push('• Email Address is required for your signature');
        } else if (!this.isValidEmail(data.email)) {
            errors.push('• Please enter a valid email address (e.g., name@jsquarephotography.com)');
        }
        
        if (data.website && !this.isValidUrl(data.website)) {
            errors.push('• Website URL should start with http:// or https://');
        }
        
        if (data.facebook && !this.isValidUrl(data.facebook)) {
            errors.push('• Facebook URL should be a complete link (e.g., https://www.facebook.com/jsquarephotography)');
        }
        
        if (data.linkedin && !this.isValidUrl(data.linkedin)) {
            errors.push('• LinkedIn URL should be a complete link (e.g., https://sg.linkedin.com/company/j-square-photography)');
        }
        
        return errors;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    generateSignatureHTML(data) {
        // Process Instagram handle
        let instagramUrl = '';
        let instagramDisplay = data.instagram;
        
        if (data.instagram) {
            // Handle different Instagram input formats
            if (data.instagram.includes('instagram.com/')) {
                // Full URL provided
                instagramUrl = data.instagram.startsWith('http') ? data.instagram : `https://${data.instagram}`;
                instagramDisplay = data.instagram.split('/').pop() || data.instagram;
            } else {
                // Handle or @handle provided
                const handle = data.instagram.replace('@', '');
                instagramUrl = `https://www.instagram.com/${handle}/`;
                instagramDisplay = handle;
            }
        }

        // Use default website if none provided
        const websiteUrl = data.website || 'https://www.jsquarephotography.com';
        const websiteDisplay = data.website ? 
            data.website.replace(/^https?:\/\//, '').replace(/\/$/, '') : 
            'www.jsquarephotography.com';

        return `
            <table cellpadding="0" cellspacing="0" border="0" style="font-family: 'Montserrat', Arial, sans-serif; color: #333333; max-width: 500px; width: 100%;">
                <tr>
                    <td style="vertical-align: middle; padding-right: 15px; width: 110px;">
                        <img src="logo.png" width="95" alt="J Square Photography Logo" style="display: block; height: auto; max-height: 110px;">
                    </td>
                    <td style="vertical-align: middle; padding-left: 5px;">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td style="font-family: 'Montserrat', Arial, sans-serif; font-size: 18px; font-weight: 600; color: #2c2c2c; padding-bottom: 2px;">
                                    ${data.fullName}
                                </td>
                            </tr>
                            <tr>
                                <td style="font-family: 'Montserrat', Arial, sans-serif; font-size: 14px; color: #666666; padding-bottom: 6px;">
                                    ${data.jobTitle}
                                </td>
                            </tr>
                            <tr>
                                <td style="font-family: 'Montserrat', Arial, sans-serif; font-size: 12px; color: #333333; padding-bottom: 2px;">
                                    <a href="mailto:${data.email}" style="color: #333333; text-decoration: none;">${data.email}</a>
                                </td>
                            </tr>
                            ${data.phone ? `
                            <tr>
                                <td style="font-family: 'Montserrat', Arial, sans-serif; font-size: 12px; color: #333333; padding-bottom: 2px;">
                                    <a href="tel:${data.phone.replace(/\s/g, '')}" style="color: #333333; text-decoration: none;">${data.phone}</a>
                                </td>
                            </tr>
                            ` : ''}
                            <tr>
                                <td style="font-family: 'Montserrat', Arial, sans-serif; font-size: 12px; color: #333333; padding-bottom: 6px;">
                                    <a href="${websiteUrl}" style="color: #333333; text-decoration: none;">${websiteDisplay}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 2px;">
                                        <tr>
                                            ${data.instagram ? `
                                            <td style="padding-right: 10px;">
                                                <a href="${instagramUrl}" style="text-decoration: none;">
                                                    <img src="1.png" width="24" height="24" alt="Instagram" style="display: block; border: 0;">
                                                </a>
                                            </td>
                                            ` : ''}
                                            ${data.facebook ? `
                                            <td style="padding-right: 10px;">
                                                <a href="${data.facebook}" style="text-decoration: none;">
                                                    <img src="2.png" width="24" height="24" alt="Facebook" style="display: block; border: 0;">
                                                </a>
                                            </td>
                                            ` : ''}
                                            ${data.linkedin ? `
                                            <td style="padding-right: 10px;">
                                                <a href="${data.linkedin}" style="text-decoration: none;">
                                                    <img src="3.png" width="24" height="24" alt="LinkedIn" style="display: block; border: 0;">
                                                </a>
                                            </td>
                                            ` : ''}
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        `;
    }

    updatePreview() {
        const data = this.getFormData();
        
        if (!data.fullName && !data.jobTitle && !data.email) {
            this.preview.innerHTML = `
                <div class="placeholder">
                    <p>👈 Fill in your information to see your signature preview</p>
                </div>
            `;
            this.actionButtons.style.display = 'none';
            return;
        }

        const signatureHTML = this.generateSignatureHTML(data);
        this.preview.innerHTML = `<div class="generated-signature">${signatureHTML}</div>`;
        this.actionButtons.style.display = 'block';
    }

    generateSignature() {
        const data = this.getFormData();
        const errors = this.validateForm(data);
        
        if (errors.length > 0) {
            alert('Please fix the following errors:\n\n' + errors.join('\n'));
            return;
        }
        
        this.updatePreview();
        this.saveToLocalStorage();
        
        // Scroll to preview
        this.preview.scrollIntoView({ behavior: 'smooth' });
        
        // Show success message briefly
        this.showCopyStatus('✅ Signature generated successfully!', 'success');
    }

    async copySignature() {
        const data = this.getFormData();
        const errors = this.validateForm(data);
        
        if (errors.length > 0) {
            alert('Please fix the following errors before copying:\n\n' + errors.join('\n'));
            return;
        }
        
        const signatureHTML = this.generateSignatureHTML(data);
        
        try {
            // Create a temporary element to copy the HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = signatureHTML;
            tempDiv.style.position = 'absolute';
            tempDiv.style.left = '-9999px';
            document.body.appendChild(tempDiv);
            
            // Select and copy
            const range = document.createRange();
            range.selectNodeContents(tempDiv);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            
            const success = document.execCommand('copy');
            
            // Clean up
            document.body.removeChild(tempDiv);
            selection.removeAllRanges();
            
            if (success) {
                this.showCopyStatus('✅ Signature copied to clipboard!', 'success');
            } else {
                throw new Error('Copy command failed');
            }
        } catch (error) {
            console.error('Copy failed:', error);
            
            // Fallback: show the HTML in a textarea for manual copying
            const textarea = document.createElement('textarea');
            textarea.value = signatureHTML;
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
            this.showCopyStatus('📋 Signature copied! (If this doesn\'t work, use the Download option)', 'warning');
        }
    }

    downloadSignature() {
        const data = this.getFormData();
        const errors = this.validateForm(data);
        
        if (errors.length > 0) {
            alert('Please fix the following errors before downloading:\n\n' + errors.join('\n'));
            return;
        }
        
        const signatureHTML = this.generateSignatureHTML(data);
        const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Signature - ${data.fullName}</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <h2>Your J Square Photography Email Signature</h2>
    <p><strong>Instructions:</strong> Select all content below and copy (Ctrl+C), then paste into your Gmail signature settings.</p>
    <div style="background: white; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
        ${signatureHTML}
    </div>
    <p><em>Generated by J Square Photography Email Signature Generator</em></p>
</body>
</html>
        `;
        
        const blob = new Blob([fullHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${data.fullName.replace(/\s+/g, '_')}_email_signature.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showCopyStatus('💾 Signature downloaded successfully!', 'success');
    }

    showCopyStatus(message, type = 'success') {
        this.copyStatus.innerHTML = `<p>${message}</p>`;
        this.copyStatus.className = `copy-status copy-status-${type}`;
        this.copyStatus.style.display = 'block';
        
        setTimeout(() => {
            this.copyStatus.style.display = 'none';
        }, 3000);
    }

    clearForm() {
        if (confirm('Are you sure you want to clear all fields?')) {
            this.form.reset();
            this.updatePreview();
            this.clearLocalStorage();
            this.showCopyStatus('🗑️ Form cleared!', 'info');
        }
    }

    showInstructions() {
        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    hideInstructions() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    saveToLocalStorage() {
        const data = this.getFormData();
        localStorage.setItem('jsquareSignatureData', JSON.stringify(data));
    }

    loadSavedData() {
        try {
            const saved = localStorage.getItem('jsquareSignatureData');
            if (saved) {
                const data = JSON.parse(saved);
                
                // Populate form fields
                Object.keys(data).forEach(key => {
                    const element = document.getElementById(key);
                    if (element && data[key]) {
                        element.value = data[key];
                    }
                });
                
                // Update preview if there's data
                if (data.fullName || data.jobTitle || data.email) {
                    this.updatePreview();
                }
            }
        } catch (error) {
            console.error('Error loading saved data:', error);
        }
    }

    clearLocalStorage() {
        localStorage.removeItem('jsquareSignatureData');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SignatureGenerator();
});

// Add some utility CSS classes dynamically
const style = document.createElement('style');
style.textContent = `
    .copy-status-success {
        background: #d4edda !important;
        color: #155724 !important;
        border-color: #c3e6cb !important;
    }
    
    .copy-status-warning {
        background: #fff3cd !important;
        color: #856404 !important;
        border-color: #ffeaa7 !important;
    }
    
    .copy-status-info {
        background: #d1ecf1 !important;
        color: #0c5460 !important;
        border-color: #bee5eb !important;
    }
`;
document.head.appendChild(style);