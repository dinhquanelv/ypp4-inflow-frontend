import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0070D2',
      600: '#0369a1',
      700: '#075985',
      800: '#0c4a6e',
      900: '#082f49',
      950: '#041c2c',
    },
  },
});
