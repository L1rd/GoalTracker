import { CSSProperties } from 'react';

export {};
declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		navItem: true;
	}
}

declare module '@mui/material/styles' {
	interface Palette {
		black: CSSProperties['color'];
		darkBlue: CSSProperties['color'];
		white: CSSProperties['color'];
		lightBlue: CSSProperties['color'];
		lightGrey: CSSProperties['color'];
		turquoise: CSSProperties['color'];
		purpleGradient: CSSProperties['color'];
	}
}
