module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs-large': '0.84rem',     // 0.75rem * 1.2
        'sm-large': '0.96rem',     // 0.875rem * 1.2
        'base-large': '1.2rem',    // 1rem * 1.2
        'lg-large': '1.44rem',     // 1.125rem * 1.2
        'xl-large': '1.56rem',     // 1.25rem * 1.2
        '2xl-large': '1.8rem',     // 1.5rem * 1.2
        '3xl-large': '2.16rem',    // 1.875rem * 1.2
        '4xl-large': '2.64rem',    // 2.25rem * 1.2
      },
    },
  },
  plugins: [],
}
