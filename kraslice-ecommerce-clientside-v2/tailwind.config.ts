import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {},
  },
  safelist: ['ring-rose-600', 'ring-transparent'],
};
