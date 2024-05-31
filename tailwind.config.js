module.exports = {
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        strokedark: '#2E3A47',
        'meta-1': '#DC3545',
        'meta-2': '#EFF2F7',
        'meta-3': '#10B981',
        'meta-4': '#313D4A',
        'meta-5': '#259AE6',
        'meta-6': '#FFBA00',
        'meta-7': '#FF6766',
        'meta-8': '#F0950C',
        'meta-9': '#E5E7EB',
        'meta-10': '#0FADCF',
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        secondary: '#80CAEE'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
}
