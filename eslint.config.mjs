import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-plugin-prettier';

const eslintConfig = [
  ...nextVitals,
  {
    plugins: { prettier },
    rules: {
      'no-console': 'error',
      'prettier/prettier': 'warn',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**'],
  },
];

export default eslintConfig;
