# My Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 📊 Projects showcase
- 💼 Skills section
- 📧 Contact links

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will open in your browser at `http://localhost:3000`

## Customization

### Update Personal Information

Edit the components to personalize your portfolio:

- **Hero Section** (`src/components/Hero.jsx`): Change your name and title
- **About Section** (`src/components/About.jsx`): Write your bio
- **Projects** (`src/components/Projects.jsx`): Add your actual projects
- **Skills** (`src/components/Skills.jsx`): List your skills
- **Contact** (`src/components/Contact.jsx`): Add your email and social links
- **Header** (`src/components/Header.jsx`): Change the logo text

### Styling

The entire design is in `src/index.css`. You can:
- Change colors by modifying the gradient values
- Adjust spacing and sizing
- Add new animations
- Customize the responsive breakpoints

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

To preview the build:
```bash
npm run preview
```

## Deployment

You can deploy your portfolio to various platforms:

- **Vercel**: Push to GitHub and connect your repo to Vercel
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use the `dist/` folder as your site
- **Any static host**: Upload the `dist/` folder contents

## Technologies Used

- React 18
- Vite 4
- CSS3
- JavaScript ES6+

## License

Feel free to use this template for your portfolio!
