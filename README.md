
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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

