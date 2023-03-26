import { createTheme } from '@mui/material';

const palette = createTheme({
	palette: {
		darkYellow: '#FFD260',
		lightYellow: '#FFEFC6',
		muchLightYellow: '#FFF6E0',
		lightBlue: '#8EA6FC',
		darkPurple: '#200568',
		black: '#000000',
		brown: '#E29B29',
	},
});

export const theme = createTheme(palette, {
	typography: {
		h1: {
			fontFamily: 'Bogart',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '56px',
			lineHeight: '53px',
			letterSpacing: '-0.015em',
			color: `${palette.palette.black}`,
		},
		h2: {
			fontFamily: 'Bogart',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '44px',
			lineHeight: '125%',
			letterSpacing: '-0.005em',
			color: `${palette.palette.black}`,
		},
		h3: {
			fontFamily: 'Bogart',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '36px',
			lineHeight: '125%',
			color: `${palette.palette.black}`,
		},
		h4: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '24px',
			lineHeight: '29px',
			letterSpacing: '0.0025em',
			color: `${palette.palette.black}`,
		},
		subtitle: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '18px',
			lineHeight: '150%',
			letterSpacing: '0.0015em',
			color: `${palette.palette.black}`,
		},
		body: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '150%',
			letterSpacing: '0.005em',
			color: `${palette.palette.black}`,
		},
		smallDetails: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '150%',
			letterSpacing: '0.004em',
			color: `${palette.palette.black}`,
		},
		smallDetailsSecondBold: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '10px',
			lineHeight: '15px',
			letterSpacing: '0.015em',
			color: `${palette.palette.black}`,
		},
		smallDetailsSecond: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '300',
			fontSize: '10px',
			lineHeight: '12px',
			letterSpacing: '0.015em',
			color: `${palette.palette.black}`,
		},
		link: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '12px',
			lineHeight: '150%',
			letterSpacing: '0.004em',
			textDecoration: 'underline',
			cursor: 'pointer',
			color: `${palette.palette.black}`,
		},
		reviews: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '12px',
			lineHeight: '150%',
			letterSpacing: '0.004em',
			color: `${palette.palette.black}`,
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { color: 'primary', variant: 'buttonDark', size: 'large' },
					style: {
						background: `${palette.palette.darkPurple}`,
						boxShadow: '4px 4px 8px rgba(32, 5, 104, 0.25)',
						borderRadius: '8px',
						padding: '16px 48px',
						transition: '0.3s',

						'& span': { color: `${palette.palette.darkYellow}`, textTransform: 'none' },

						'&:hover': {
							background: `${palette.palette.lightBlue}`,
							'& span': { color: `${palette.palette.darkPurple}` },
						},

						'&:active': {
							background: `${palette.palette.lightBlue}`,
							boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 8px rgba(32, 5, 104, 0.25)',
							'& span': { color: `${palette.palette.lightYellow}` },
						},
					},
				},
				{
					props: { color: 'primary', variant: 'buttonDark', size: 'medium' },
					style: {
						background: `${palette.palette.darkPurple}`,
						boxShadow: '4px 4px 8px rgba(32, 5, 104, 0.25)',
						borderRadius: '8px',
						padding: '8px 32px',
						transition: '0.3s',

						'& span': { color: `${palette.palette.darkYellow}`, textTransform: 'none' },

						'&:hover': {
							background: `${palette.palette.lightBlue}`,
							'& span': { color: `${palette.palette.darkPurple}` },
						},

						'&:active': {
							background: `${palette.palette.lightBlue}`,
							boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 8px rgba(32, 5, 104, 0.25)',
							'& span': { color: `${palette.palette.lightYellow}` },
						},
					},
				},
				{
					props: { color: 'primary', variant: 'buttonDark', size: 'small' },
					style: {
						background: `${palette.palette.darkPurple}`,
						boxShadow: '4px 4px 8px rgba(32, 5, 104, 0.25)',
						borderRadius: '6px',
						padding: '8px 24px',
						transition: '0.3s',

						'& span': { color: `${palette.palette.darkYellow}`, textTransform: 'none' },

						'&:hover': {
							background: `${palette.palette.lightBlue}`,
							'& span': { color: `${palette.palette.darkPurple}` },
						},

						'&:active': {
							background: `${palette.palette.lightBlue}`,
							boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 8px rgba(32, 5, 104, 0.25)',
							'& span': { color: `${palette.palette.lightYellow}` },
						},
					},
				},
				{
					props: { color: 'primary', variant: 'buttonLight', size: 'large' },
					style: {
						background: `${palette.palette.darkYellow}`,
						boxShadow: '4px 4px 8px rgba(32, 5, 104, 0.25)',
						borderRadius: '8px',
						transition: '0.5s',
						padding: '16px 48px',

						'& span': { color: `${palette.palette.darkPurple}`, textTransform: 'none' },

						'&:hover': {
							background: `${palette.palette.lightYellow}`,
							'& span': { color: `${palette.palette.brown}` },
						},

						'&:active': {
							background: `${palette.palette.lightYellow}`,
							boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 8px rgba(32, 5, 104, 0.25)',
							'& span': { color: `${palette.palette.darkYellow}` },
						},
					},
				},
				{
					props: { color: 'primary', variant: 'buttonLight', size: 'medium' },
					style: {
						background: `${palette.palette.darkYellow}`,
						boxShadow: '4px 4px 8px rgba(32, 5, 104, 0.25)',
						borderRadius: '8px',
						transition: '0.5s',
						padding: '8px 32px',

						'& span': { color: `${palette.palette.darkPurple}`, textTransform: 'none' },

						'&:hover': {
							background: `${palette.palette.lightYellow}`,
							'& span': { color: `${palette.palette.brown}` },
						},

						'&:active': {
							background: `${palette.palette.lightYellow}`,
							boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 8px rgba(32, 5, 104, 0.25)',
							'& span': { color: `${palette.palette.darkYellow}` },
						},
					},
				},
				{
					props: { color: 'primary', variant: 'buttonLight', size: 'small' },
					style: {
						background: `${palette.palette.darkYellow}`,
						boxShadow: '4px 4px 8px rgba(32, 5, 104, 0.25)',
						borderRadius: '6px',
						transition: '0.5s',
						padding: '8px 24px',

						'& span': { color: `${palette.palette.darkPurple}`, textTransform: 'none' },

						'&:hover': {
							background: `${palette.palette.lightYellow}`,
							'& span': { color: `${palette.palette.brown}` },
						},

						'&:active': {
							background: `${palette.palette.lightYellow}`,
							boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 8px rgba(32, 5, 104, 0.25)',
							'& span': { color: `${palette.palette.darkYellow}` },
						},
					},
				},
				{
					props: { color: 'secondary', variant: 'buttonLight', size: 'large' },
					style: {
						background: `${palette.palette.lightYellow}`,
						boxShadow: '4px 4px 8px rgba(32, 5, 104, 0.25)',
						borderRadius: '8px',
						transition: '0.5s',
						padding: '16px 48px',
						border: `1px solid ${palette.palette.lightYellow}`,

						'& span': { color: `${palette.palette.darkPurple}`, textTransform: 'none' },

						'&:hover': {
							background: 'inherit',
							border: `1px solid ${palette.palette.darkPurple}`,
							'& span': { color: `${palette.palette.darkPurple}` },
						},

						'&:active': {
							border: `1px solid ${palette.palette.brown}`,
							'& span': { color: `${palette.palette.brown}` },
						},
					},
				},
				{
					props: { color: 'secondary', variant: 'buttonLight', size: 'medium' },
					style: {
						background: `${palette.palette.lightYellow}`,
						boxShadow: '4px 4px 8px rgba(32, 5, 104, 0.25)',
						borderRadius: '8px',
						transition: '0.5s',
						padding: '8px 32px',
						border: `1px solid ${palette.palette.lightYellow}`,

						'& span': { color: `${palette.palette.darkPurple}`, textTransform: 'none' },

						'&:hover': {
							background: 'inherit',
							border: `1px solid ${palette.palette.darkPurple}`,
							'& span': { color: `${palette.palette.darkPurple}` },
						},

						'&:active': {
							border: `1px solid ${palette.palette.brown}`,
							'& span': { color: `${palette.palette.brown}` },
						},
					},
				},
				{
					props: { color: 'secondary', variant: 'buttonLight', size: 'small' },
					style: {
						background: `${palette.palette.lightYellow}`,
						boxShadow: '4px 4px 8px rgba(32, 5, 104, 0.25)',
						borderRadius: '6px',
						transition: '0.5s',
						padding: '8px 24px',
						border: `1px solid ${palette.palette.lightYellow}`,

						'& span': { color: `${palette.palette.darkPurple}`, textTransform: 'none' },

						'&:hover': {
							background: 'inherit',
							border: `1px solid ${palette.palette.darkPurple}`,
							'& span': { color: `${palette.palette.darkPurple}` },
						},

						'&:active': {
							background: 'inherit',
							border: `1px solid ${palette.palette.brown}`,
							'& span': { color: `${palette.palette.brown}` },
						},
					},
				},
			],
		},
		MuiLinearProgress: {
			styleOverrides: {
				root: {
					backgroundColor: `${palette.palette.muchLightYellow}`,
					borderRadius: '4px',
					height: '4px',
				},
				bar: {
					backgroundColor: `${palette.palette.darkYellow}`,
					borderRadius: '4px',
				},
			},
		},
		MuiAccordion: {
			styleOverrides: {
				root: {
					backgroundColor: `inherit`,
					borderRadius: '0',
					boxShadow: 'none',
					border: 'none',

					'&.Mui-expanded': {
						margin: '0 0',
					},

					'&::before': {
						opacity: '0',
					},
				},
			},
		},
		MuiAccordionSummary: {
			styleOverrides: {
				root: {
					flexDirection: 'row-reverse',
					gap: '16px',
					border: 'none',
				},
			},
		},
	},
});
