# King Smoke Shop and Vapors - Website

A professional, responsive website for King Smoke Shop and Vapors featuring a modern design with comprehensive business information.

## Features

✨ **Responsive Design**
- Mobile-friendly layout that works on all devices
- Hamburger menu for mobile navigation
- Optimized for tablets and desktops

📱 **Key Sections**
- **Hero Section**: Eye-catching landing area with call-to-action
- **Products**: Showcase of 6 main product categories
- **About Us**: Business background and core values
- **Services**: Highlighting customer benefits
- **Testimonials**: Customer reviews and ratings
- **Contact**: Multiple ways to reach the business
- **Footer**: Navigation and social media links

🎨 **Design Elements**
- Gold and dark theme branding
- Professional typography
- Smooth animations and transitions
- Icon integration (Font Awesome)
- Shadow effects and hover states

⚡ **Interactive Features**
- Smooth scrolling navigation
- Form validation
- Scroll animations
- Mobile menu toggle
- Animated cards and buttons

## File Structure

```
king-smoke-shop-website/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Getting Started

### Option 1: Open Locally
1. Clone the repository
   ```bash
   git clone https://github.com/hassankhan-12/king-smoke-shop-website.git
   cd king-smoke-shop-website
   ```
2. Open `index.html` in your browser

### Option 2: Deploy to GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages"
3. Set source to "main branch"
4. Your site will be live at `https://hassankhan-12.github.io/king-smoke-shop-website/`

## Customization

### Update Business Information
- Edit the contact details in the Contact section (index.html)
- Update business hours in the Hours section
- Replace phone number and email with your actual info
- Change the address to your location

### Modify Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #d4af37;      /* Gold - main accent */
    --secondary-color: #1a1a1a;    /* Dark - background */
    --text-color: #333;
    --light-bg: #f5f5f5;           /* Light gray background */
}
```

### Add Products
Add new product cards in the Products section:
```html
<div class="product-card">
    <div class="product-icon">🎯</div>
    <h3>Your Product Name</h3>
    <p>Product description</p>
    <button class="view-btn">View Collection</button>
</div>
```

### Link Social Media
Update the footer social links:
```html
<a href="https://facebook.com/yourpage"><i class="fab fa-facebook"></i></a>
<a href="https://instagram.com/yourprofile"><i class="fab fa-instagram"></i></a>
<a href="https://twitter.com/yourhandle"><i class="fab fa-twitter"></i></a>
```

## Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript**: Interactivity and animations
- **Font Awesome**: Professional icons

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips
1. Optimize images before adding them
2. Minify CSS and JavaScript for production
3. Use lazy loading for images (future enhancement)
4. Consider adding a CDN for faster loading

## Next Steps / Enhancements
- [ ] Add product catalog with e-commerce functionality
- [ ] Integrate payment processing (Stripe/PayPal)
- [ ] Add blog section
- [ ] Implement inventory management
- [ ] Add image galleries for products
- [ ] Setup email notifications for contact forms
- [ ] Add customer login/account system
- [ ] Implement SMS notifications
- [ ] Add age verification (for compliance)
- [ ] SEO optimization

## Support & Maintenance
- Regular content updates
- Monitor form submissions
- Update product information
- Check for broken links
- Test on new devices/browsers

## License
This project is open source and available for personal and commercial use.

## Questions?
For questions or support, please contact King Smoke Shop directly through the website contact form.

---

**Last Updated:** 2024
**Version:** 1.0