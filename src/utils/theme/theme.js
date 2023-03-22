import { createTheme } from '@mui/material';

const palette = createTheme({
	palette: {
		white: '#FFFFFF',
		black: '#000000',
		darkBlue: '#032541',
		lightBlue: '#01B4E4',
		lightGrey: '#d3d3d3',
		turquoise: '#1ED5A9',
		purple: '#805BE7',
		purpleGradient: 'radial-gradient(50% 50% at 50% 50%, #031D33 0%, #032541 70%)',
	},
});

export const theme = createTheme(palette, {
	typography: {},
	components: {},
});
