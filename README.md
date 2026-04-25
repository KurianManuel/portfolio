# Kurian Manuel - Cybersecurity Student Portfolio

A sleek, responsive, and data-driven portfolio website built with modern web technologies, specifically tailored for showcasing cybersecurity skills, projects, and educational background.

![Theme](https://img.shields.io/badge/Theme-Blue--Emerald_Gradient-10b981?style=flat-square)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat-square&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?style=flat-square&logo=vite)

## ✨ Features

- **Dynamic Navigation:** Smooth scrolling with active-state tracking as you scroll through different sections.
- **Data-Driven Architecture:** All text, skills, contacts, and projects are centralized in one single file (`src/data/portfolioData.js`). Updating the website is as easy as modifying a JavaScript object!
- **Modern UI/UX:** Complete with glassmorphism effects, a stunning blue-to-emerald gradient theme, and micro-animated interactions.
- **Smart Email Integration:** The "Send Me an Email" button safely copys the contact email to the user's local clipboard while also launching their default Mail application as a fallback.
- **Fully Responsive:** Tailored for laptops, tablets, and phones.

## 🛠️ Built With

- **[React](https://reactjs.org/)** - Component-based UI library
- **[Vite](https://vitejs.dev/)** - Lightning-fast development environment and bundler
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling framework used for the complete design system
- **[Lucide React](https://lucide.dev/)** - Clean, SVG-powered iconography

## 📂 Project Structure

```text
├── public/                 # Static assets like logos
├── src/
│   ├── components/         # Reusable React UI components (Hero, Navbar, Skills, etc.)
│   ├── data/
│   │   └── portfolioData.js # Centralized Data Source! All textual data lives here.
│   ├── App.jsx             # Main router and scroll handler
│   ├── index.css           # Global CSS and custom animations
│   └── main.jsx            # React root injection
├── index.html              # Core HTML template
├── tailwind.config.js      # Tailwind theme configuration
└── vite.config.js          # Vite build options
```

## 🚀 Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/KurianManuel/portfolio.git
   cd portfolio
   ```

2. **Install all dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view it in the browser.

## 📝 Customizing the Content

When you want to update your portfolio (adding a new skill, updating your GPA, or securing a new job/internship), you do **not** need to touch the React code!

Simply open `src/data/portfolioData.js` and modify the arrays and strings. The UI will dynamically generate components based on the data you enter. Note: Leaving arrays entirely empty (like `experience: []`) will automatically clean up the section on the frontend without errors.

## 🚀 Deployment

This project is optimized and ready to deploy directly to platforms like **Vercel** or **Netlify**.
- Push your project to GitHub.
- Import the Git repository in your Vercel Dashboard.
- Vercel will automatically detect the Vite builder and instantly launch the live URL!

---
*Built with ❤️ by Kurian Manuel*
