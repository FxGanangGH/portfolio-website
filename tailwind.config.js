/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#E5F6FA',
          100: '#CFEFF7',
          200: '#9BDDED',
          300: '#6CCDE5',
          400: '#3CBDDD',
          500: '#219EBC',
          600: '#1B7F98',
          700: '#145E71',
          800: '#0D3E4A',
          900: '#072127',
          950: '#030E11'
        },
        accent: {
          500: '#E9D9CC',
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'sans-serif']
      },
      spacing: {
        'hiding-menu': '-100vh',
        'mobile-project-view': '-30px',
      },
      backgroundImage: {
        'wave1' : "url('/src/images/wave1.png')",
        'wave2' : "url('/src/images/wave2.svg')",
        'wave3' : "url('/src/images/wave3.svg')",
        'contact' : "url('/src/images/contact.png')",
        'email' : "url('/src/images/mail.png')",
        'name-fb' : "url('/src/images/name1.png')",
        'name-in' : "url('/src/images/name2.png')",
      },
      gridTemplateColumns: {
        'socials' : '44px 250px'
      },
      width: {
        'preview-small' : '400px',
        'preview-medium' : '564px',
        'preview-large' : '692px',
        'lang-en' : '126px',
        'lang-id' : '120px',
        'accentRect' : '900px',
        'accentRectBig' : '1032px',
        'tablet' : '645px',
        'contact' : '530px',
      },
      height: {
        'preview-small' : '225px',
        'preview-medium' : '317px',
        'preview-large' : '389px',
        'accentRect' : '430px',
        'accentRectBig' : '517px',
        'skill-list' : '475px',
      },
      size: {
        'edu' : '300px',
        'edu-xl' : '535px',
        'edu-2xl' : '750px',
      },
      screens: {
        'xs' : '420px',
      }
    }
  },
  plugins: [require('daisyui')],
}
