# 🧦 KORD - Step Into Style

<div align="center">

![KORD Logo](https://img.shields.io/badge/KORD-Socks-FFC850?style=for-the-badge&logoColor=561530)
![Version](https://img.shields.io/badge/version-1.0.0-9E1C60?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-811844?style=for-the-badge)

**A funky, Gen Z-inspired sock brand website with stunning animations and interactive experiences**

[Live Demo](#) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation)

</div>

---

## ✨ Overview

KORD is a modern, youth-focused sock brand website that combines cutting-edge web animations with a vibrant, energetic design. Built with GSAP ScrollTrigger, this site delivers an immersive experience that captures the essence of Gen Z culture and street style.

## 🎨 Features

### 🚀 **Interactive Hero Section**
- **Magnetic Logo Effect** - The KORD logo follows your cursor with smooth magnetic attraction
- **Floating Sock Images** - Product images appear on hover with dynamic positioning
- **Custom Cursor** - Unique cursor design that enhances interactivity
- **Gradient Animations** - Animated gradient text effects on the brand logo

### 🎬 **Advanced Animations**
- **GSAP ScrollTrigger** - Smooth scroll-triggered animations throughout
- **Parallax Effects** - Multi-layer parallax scrolling on images and content
- **Staggered Entrances** - Product cards and sections animate in with perfect timing
- **3D Transforms** - Collection items with 3D flip and rotation effects
- **Magnetic Cards** - Product cards that follow your cursor movement

### 🎯 **Sections**

#### 🏠 **Hero Section**
- Animated brand logo with gradient effects
- Interactive hover effects revealing product images
- Smooth call-to-action button with shine effect

#### 🛍️ **Fresh Drops**
- Product showcase with magnetic hover effects
- Image zoom and tilt animations
- Smooth parallax scrolling

#### 📦 **The Lineup**
- Collection grid with fast, responsive animations
- Parallax image effects
- Overlay animations on hover

#### 🎥 **Real Talk**
- Video review section
- Auto-play on hover
- Explosive entrance animations

### 🎨 **Design Elements**
- **Color Palette**: 
  - Gold (#F5AD18) - Primary accent
  - Pink (#9E1C60) - Secondary accent
  - Burgundy (#811844) - Tertiary color
  - Dark (#561530) - Background base

- **Typography**:
  - **Panchang** - Bold, modern headings
  - **Satoshi** - Clean, readable body text

- **Responsive Design** - Fully responsive across all devices

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactive functionality
- **GSAP 3.12.5** - Animation library
  - ScrollTrigger plugin
  - ScrollToPlugin
- **Web Fonts** - Custom font loading (Panchang & Satoshi)

## 📦 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SnippyKid/KORD.git
   cd KORD
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser, or
   - Use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with http-server)
     npx http-server
     
     # PHP
     php -S localhost:8000
     ```

3. **Access the site**
   - Navigate to `http://localhost:8000` (or your chosen port)

## 📁 Project Structure

```
KORD/
├── index.html          # Main HTML file
├── style.css           # Styles and animations
├── script.js           # JavaScript and GSAP animations
├── README.md           # Project documentation
├── assets/
│   ├── fonts/         # Custom fonts (Panchang & Satoshi)
│   │   ├── Panchang_Complete/
│   │   └── Satoshi_Complete/
│   ├── images/        # Product and collection images
│   └── videos/        # Review videos
└── doc.txt            # Color theme reference
```

## 🎯 Key Features Breakdown

### Animation System
- **Scroll-triggered animations** for all sections
- **Hover interactions** on all interactive elements
- **Parallax scrolling** for depth and immersion
- **Smooth transitions** between sections

### Performance
- **Optimized fonts** (WOFF2 format)
- **Hardware-accelerated** animations
- **Efficient ScrollTrigger** usage
- **Smooth 60fps** animations

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Responsive design

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --color-gold: #F5AD18;
    --color-pink: #9E1C60;
    --color-burgundy: #811844;
    --color-dark: #561530;
}
```

### Fonts
Font files are located in `assets/fonts/`. To change fonts:
1. Replace font files in respective folders
2. Update `@font-face` declarations in `style.css`
3. Update CSS variables:
```css
--font-heading: 'YourHeadingFont', sans-serif;
--font-body: 'YourBodyFont', sans-serif;
```

### Animations
Animation timings and effects can be adjusted in `script.js`:
- ScrollTrigger settings
- Animation durations
- Easing functions
- Stagger delays

## 🚀 Performance Tips

1. **Image Optimization**: Use WebP format for images
2. **Font Loading**: Fonts are loaded with `font-display: swap`
3. **Animation Optimization**: Uses `will-change` for better performance
4. **Lazy Loading**: Consider implementing lazy loading for images/videos

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (not supported)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**SnippyKid**
- GitHub: [@SnippyKid](https://github.com/SnippyKid)
- Project: [KORD](https://github.com/SnippyKid/KORD)

## 🙏 Acknowledgments

- **GSAP** - For the amazing animation library
- **FontShare** - For the beautiful Panchang and Satoshi fonts
- **Indian Type Foundry** - Font licensing

## 📧 Contact

For questions, suggestions, or collaborations, please open an issue on GitHub.

---

<div align="center">

**Made with ❤️ and lots of ☕**

⭐ Star this repo if you find it helpful!

</div>
