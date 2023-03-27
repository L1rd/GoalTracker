import { CSSProperties } from 'react';

export {};
declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		logIn: true;
		buttonDark: true;
		buttonLight: true;
	}
}

declare module '@mui/material/styles' {
	interface Palette {
		darkYellow: CSSProperties['color'];
		lightYellow: CSSProperties['color'];
		muchLightYellow: CSSProperties['color'];
		lightBlue: CSSProperties['color'];
		darkPurple: CSSProperties['color'];
		brown: CSSProperties['color'];
		darkBlue: CSSProperties['color'];
		midBlue: CSSProperties['color'];
		blue: CSSProperties['color'];
	}
}

declare module '@mui/material/styles' {
	interface TypographyVariants {
		subtitle: React.CSSProperties;
		body: React.CSSProperties;
		smallDetails: React.CSSProperties;
		smallDetailsSecondBold: React.CSSProperties;
		smallDetailsSecond: React.CSSProperties;
		reviews: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		subtitle?: React.CSSProperties;
		body?: React.CSSProperties;
		smallDetails: React.CSSProperties;
		smallDetailsSecondBold: React.CSSProperties;
		smallDetailsSecond: React.CSSProperties;
		reviews: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		subtitle: true;
		body: true;
		smallDetails: true;
		smallDetailsSecondBold: true;
		smallDetailsSecond: true;
		reviews: true;
		link: true;
	}
}
