/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /* =========================
         COLOR PALETTE (LUXURY SPA)
         ========================= */
      colors: {
        gold: {
          DEFAULT: "#C6A15B",
          dark: "#9E7C3A",
          soft: "#E6D3A3",
        },
        black: {
          soft: "#0F0F0F",
        },
        mocca: {
          DEFAULT: "#4E3B2F",
        },
        creme: {
          DEFAULT: "#F7F3EE",
        },
      },

      /* =========================
         BORDER RADIUS
         ========================= */
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },

      /* =========================
         TYPOGRAPHY FEEL
         ========================= */
      letterSpacing: {
        luxury: '0.25em',
        widePlus: '0.15em',
      },

      /* =========================
         BACKGROUND & EFFECTS
         ========================= */
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-fade': 'linear-gradient(135deg, #C6A15B, #9E7C3A)',
      },

      boxShadow: {
        luxury: '0 30px 80px -20px rgba(0,0,0,0.25)',
        soft: '0 20px 40px -15px rgba(0,0,0,0.15)',
      },

      blur: {
        luxury: '120px',
      },
    },
  },
  plugins: [],
}
