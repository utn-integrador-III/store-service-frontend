# BookingStore - Frontend

A modern React TypeScript application for booking services and managing business operations. Built with a beautiful, responsive design using a custom color palette and modern UI components.

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 16.x or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository** (if not already done):

   ```bash
   git clone <repository-url>
   cd store-service-frontend
   ```

2. **Install all dependencies**:

   ```bash
   npm install
   ```

   > **Note**: No need to install additional packages like `react-router-dom` separately, as all dependencies are already listed in `package.json` and will be installed automatically with `npm install`.

3. **Start the development server**:

   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 📦 Dependencies

The project uses the following main dependencies:

### Core Dependencies

- **React** `^19.1.0` - UI library
- **React DOM** `^19.1.0` - DOM bindings for React
- **TypeScript** `^4.9.5` - Type safety
- **React Router DOM** `^7.6.3` - Client-side routing

### Styling & Assets

- **Font Awesome** `6.0.0` (via CDN) - Icons for social media and UI elements
- Custom CSS with CSS Variables for theming

### Development & Testing

- **React Scripts** `5.0.1` - Build tools and dev server
- **Testing Library** - React testing utilities
- **Web Vitals** - Performance monitoring

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (⚠️ irreversible)

## 🎨 Features

- **Modern Design**: Glass morphism effects, gradients, and smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Custom Color Palette**: Navy, Teal, Sky Blue, Beige, and White theme
- **Accessible Navigation**: ARIA labels and keyboard navigation support
- **TypeScript**: Full type safety throughout the application

## 🌐 Browser Support

The application supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Optimization

The application is fully optimized for mobile devices with:

- Touch-friendly navigation
- Responsive breakpoints at 480px, 768px, 960px, and 1024px
- Hamburger menu for mobile navigation
- Optimized touch targets and spacing

## 🎯 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── pages/
│       ├── company/
│       ├── employee/
│       ├── forms/
│       └── user/
├── styles/
│   ├── paleta_colores.css
│   ├── navbar.css
│   └── footer.css
└── utilities/
    └── apis/
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary.
