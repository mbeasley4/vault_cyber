module.exports = {
  content: [
    './templates/**/*.html.twig',
    './components/**/*.html.twig',
    './src/**/*.js',
    './src/**/*.css',
    "./**/*.yml",
    "../../modules/custom/**/*.twig"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        vault: {
          dark: '#0b2a3c',          // Primary background
          green: '#39ff14',         // Secondary background
          greenDark: '#071a12',     // ADA-safe dark text
          danger: '#2a0b0b',        // Tertiary background
          light: '#fff7ed',         // Light text / buttons
          lightMuted: '#fef2e8',    // Body text
          yellow: '#facc15',        // CTA accent (replaces yellow-400)
          yellowHover: '#fde047',   // Hover state
        },
        cyber: {
          green: "#00ff9c",
          blue: "#00bfff"
        }
      }
    }
  },
  plugins: []
};
