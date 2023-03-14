/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        'detail': [
          "slider slider add-info",
          "detail-info detail-info detail-info",
          "video video video "
        ]
      },
      gridTemplateColumns: {
        'layout': '24rem 1fr 2rem',
      },
      gridTemplateRows: {
        'layout': `3rem
                   3rem
                   1fr
                   auto`,
      },
      keyframes:{
        orbit: {
          '0%':{ transform: 'rotateX(-90deg) rotateY(360deg) rotateZ(0deg)'},
          '100%': {transform: 'rotateX(-90deg) rotateY(0deg) rotateZ(0deg)'}
        },
        spinner:{
          '0%': {
            transform: 'rotate3d(1,0,1 0deg)'
          },
          '50%': {
            transform: 'rotate3d(1, 0, 1, 180deg)'
          },
          '100%':{
            transform: 'rotate3d(1, 0, 1, 360deg)'
          }
        },
        spinner2: {
          '0%': {
            transform: 'rotate3d(0, 1, 1, 0deg)'
          },
          '50%':{
            transform: 'rotate3d(0, 1, 1, 180deg)'
          },
          '100%': {
            transform: 'rotate3d(0, 1, 1, 360deg)'
          }
        },
        spinner3: {
          '0%': {
            transform: 'rotate3d(1, 1, 0, 0deg)'
          },
          '50%': {
            transform: 'rotate3d(1, 1, 0, 180deg)'
          },
          '100%': {
            transform: 'rotate3d(1, 1, 0, 360deg)'
          }
        },
        invert: {
          '0%':{
            transform: 'rotateX(-90deg) rotateY(360deg) rotateZ(0deg)'
          },
          '100%': {
            transform: 'rotateX(-90deg) rotateY(0deg) rotateZ(0deg)'
          }
        },
      },
      screens:{
        sideBarMinHeight:{
          raw:"(max-heignt:758px)"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
