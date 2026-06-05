# 🌌 3D Web Developer Portfolio

An immersive, interactive 3D developer portfolio website built using **React**, **Three.js**, **React Three Fiber (R3F)**, **Tailwind CSS**, and **GSAP**. 

This portfolio showcases professional skills, personal projects, academic achievements, and work experience in a highly engaging 3D environment.

---

## 🚀 Live Demo
Check out the live deployment here: [Nishank018.github.io/Threejs_Portfolio](https://Nishank018.github.io/Threejs_Portfolio/)

---

## 🛠️ Tech Stack & Libraries

- **Frontend Core**: React 18, Vite (Fast Build Tool), JavaScript (ES6+)
- **3D Graphics & Physics**: 
  - [Three.js](https://threejs.org/) (Core 3D engine)
  - [@react-three/fiber](https://r3f.docs.pmnd.rs/) (React wrapper for Three.js)
  - [@react-three/drei](https://github.com/pmndrs/drei) (Useful helpers, shaders, and loaders for R3F)
  - [react-globe.gl](https://github.com/vasturiano/react-globe.gl) (Interactive 3D Earth globe)
- **Animations**: 
  - [GSAP](https://gsap.com/) (GreenSock Animation Platform for complex timelines)
  - [@gsap/react](https://github.com/greensock/react) (React integration for GSAP hooks)
- **Styling**: Tailwind CSS (Utility-first CSS styling)
- **Integrations**: [EmailJS](https://www.emailjs.com/) (Client-side email integration for contact form)
- **Utilities**: `react-responsive` (for 3D layout responsiveness), `leva` (for GUI controls)

---

## ✨ Features

1. **Interactive 3D Hero Scene**: 
   - A detailed retro-futuristic 3D hacker room setup.
   - Floating, animated 3D icons (React logo, target, rings, cube) that move in response to screen size and user interaction.
   - Responsive scaling adapting from mobile displays up to widescreen desktop monitors.
2. **Interactive 3D Globe**:
   - Located in the About section to showcase location details and global availability.
3. **Dynamic 3D Project Showcase**:
   - Displays actual video previews of selected projects (Podcastr, LiveDoc, CarePulse, Horizon, Imaginify) mapped directly onto a 3D computer screen.
   - Includes custom interactive slide controls to toggle between different projects.
4. **Animated Work Experience**:
   - Features a 3D avatar of a developer that triggers custom gestures and animations (salute, clapping, victory, idle) when selecting or hovering over different career milestones.
5. **Functional 3D Contact Form**:
   - Integrates with EmailJS to allow visitors to send emails directly from the contact section, complete with custom success/error alerts.
6. **Optimized Deployment**:
   - Fully optimized for hosting on **GitHub Pages** with support for subfolder routing and base path resolution.

---

## ⚙️ Local Development Setup

To run the portfolio application locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended).

### 1. Clone the repository
```bash
git clone https://github.com/Nishank018/Threejs_Portfolio.git
cd Threejs_Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to view the site.

### 4. Build for production
To compile the site and generate the production bundle:
```bash
npm run build
```
This generates a optimized `/dist` folder containing the static HTML, JS, CSS, and media bundles.

---

## 📄 License
This project is licensed under the MIT License. Feel free to clone, modify, and use it as a base for your own projects!

---

Developed with ❤️ by [Nishank Gupta](https://github.com/Nishank018)
