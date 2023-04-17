import { createTheme } from '@mui/material';

const palette = createTheme({
	palette: {
		darkYellow: '#FFD260',
		lightYellow: '#FFEFC6',
		muchLightYellow: '#FFF6E0',
		darkBlue: '#0B215C',
		midBlue: '#0D2569',
		blue: '#2647AC',
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
		},
		h2: {
			fontFamily: 'Bogart',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '44px',
			lineHeight: '125%',
			letterSpacing: '-0.005em',
		},
		h3: {
			fontFamily: 'Bogart',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '36px',
			lineHeight: '125%',
		},
		h4: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '24px',
			lineHeight: '29px',
			letterSpacing: '0.0025em',
		},
		subtitle: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '18px',
			lineHeight: '150%',
			letterSpacing: '0.0015em',
		},
		body: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '150%',
			letterSpacing: '0.005em',
		},
		smallDetails: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '150%',
			letterSpacing: '0.004em',
		},
		smallDetailsSecondBold: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '10px',
			lineHeight: '15px',
			letterSpacing: '0.015em',
		},
		smallDetailsSecond: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '300',
			fontSize: '10px',
			lineHeight: '12px',
			letterSpacing: '0.015em',
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
		},
		reviews: {
			fontFamily: 'Stolzl',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '12px',
			lineHeight: '150%',
			letterSpacing: '0.004em',
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { color: 'primary', variant: 'buttonDark', size: 'large' },
					style: {
						background: `${palette.palette.darkBlue}`,
						boxShadow: '4px 4px 8px rgba(32, 5, 104, 0.25)',
						borderRadius: '8px',
						padding: '16px 48px',
						transition: '0.5s ease-in-out',

						'& span': {
							color: `${palette.palette.darkYellow}`,
							textTransform: 'none',
						},

						'&:hover': {
							background: `${palette.palette.lightBlue}`,
							'& span': { color: `${palette.palette.darkBlue}` },
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
						background: `${palette.palette.darkBlue}`,
						boxShadow: '4px 4px 8px rgba(32, 5, 104, 0.25)',
						borderRadius: '8px',
						padding: '8px 32px',
						transition: '0.5s ease-in-out',

						'& span': { color: `${palette.palette.darkYellow}`, textTransform: 'none' },

						'&:hover': {
							background: `${palette.palette.lightBlue}`,
							'& span': { color: `${palette.palette.darkBlue}` },
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
						background: `${palette.palette.darkBlue}`,
						boxShadow: '4px 4px 8px rgba(32, 5, 104, 0.25)',
						borderRadius: '6px',
						padding: '8px 24px',
						transition: '0.5s ease-in-out',

						'& span': { color: `${palette.palette.darkYellow}`, textTransform: 'none' },

						'&:hover': {
							background: `${palette.palette.lightBlue}`,
							'& span': { color: `${palette.palette.darkBlue}` },
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
						transition: '0.5s ease-in-out',
						padding: '16px 48px',
						border: `1px solid ${palette.palette.darkYellow}`,

						'& span': { color: `${palette.palette.darkBlue}`, textTransform: 'none' },

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
						transition: '0.5s ease-in-out',
						padding: '8px 32px',
						border: `1px solid ${palette.palette.darkYellow}`,

						'& span': { color: `${palette.palette.darkBlue}`, textTransform: 'none' },

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
						transition: '0.5s ease-in-out',
						padding: '8px 24px',
						border: `1px solid ${palette.palette.darkYellow}`,

						'& span': { color: `${palette.palette.darkBlue}`, textTransform: 'none' },

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
						transition: '0.5s ease-in-out',
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
						transition: '0.5s ease-in-out',
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
						transition: '0.5s ease-in-out',
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
				{
					props: { color: 'secondary', variant: 'buttonDark', size: 'large' },
					style: {
						background: `${palette.palette.blue}`,
						boxShadow: '4px 4px 8px rgba(11, 33, 92, 0.25);',
						borderRadius: '8px',
						transition: '0.5s ease-in-out',
						padding: '16px 48px',
						border: `1px solid ${palette.palette.blue}`,

						'& span': { color: `${palette.palette.lightYellow}`, textTransform: 'none' },

						'&:hover': {
							background: 'inherit',
							border: `1px solid ${palette.palette.lightBlue}`,
							'& span': { color: `${palette.palette.lightBlue}` },
						},

						'&:active': {
							border: `1px solid ${palette.palette.blue}`,
							'& span': { color: `${palette.palette.blue}` },
						},
					},
				},
				{
					props: { color: 'secondary', variant: 'buttonDark', size: 'medium' },
					style: {
						background: `${palette.palette.blue}`,
						boxShadow: '4px 4px 8px rgba(11, 33, 92, 0.25);',
						borderRadius: '8px',
						transition: '0.5s ease-in-out',
						padding: '8px 32px',
						border: `1px solid ${palette.palette.blue}`,

						'& span': { color: `${palette.palette.lightYellow}`, textTransform: 'none' },

						'&:hover': {
							background: 'inherit',
							border: `1px solid ${palette.palette.lightBlue}`,
							'& span': { color: `${palette.palette.lightBlue}` },
						},

						'&:active': {
							border: `1px solid ${palette.palette.blue}`,
							'& span': { color: `${palette.palette.blue}` },
						},
					},
				},
				{
					props: { color: 'secondary', variant: 'buttonDark', size: 'small' },
					style: {
						background: `${palette.palette.blue}`,
						boxShadow: '4px 4px 8px rgba(11, 33, 92, 0.25);',
						borderRadius: '6px',
						transition: '0.5s ease-in-out',
						padding: '8px 24px',
						border: `1px solid ${palette.palette.blue}`,

						'& span': { color: `${palette.palette.lightYellow}`, textTransform: 'none' },

						'&:hover': {
							background: 'inherit',
							border: `1px solid ${palette.palette.lightBlue}`,
							'& span': { color: `${palette.palette.lightBlue}` },
						},

						'&:active': {
							border: `1px solid ${palette.palette.blue}`,
							'& span': { color: `${palette.palette.blue}` },
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
					transition: 'all .4s ease-in-out',

					'&:hover': {
						transform: 'scale(1.1)',
					},

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
		MuiSelect: {
			styleOverrides: {
				root: {
					'& .MuiSelect-icon': {
						display: 'none !important',
					},

					'&.Mui-focused': {
						'& .MuiSelect-select': {
							color: `${palette.palette.lightBlue}`,
						},

						'& .MuiOutlinedInput-notchedOutline': {
							borderColor: `${palette.palette.lightBlue}`,
							transition: 'all 0.3s ease-in-out',
						},
					},
				},
				select: {
					padding: '5px 6px !important',
				},
			},
		},
		MuiCircularProgress: {
			styleOverrides: {
				root: {
					width: '100px !important',
					height: '100px !important',
					color: `${palette.palette.darkBlue}`,
					zIndex: '1',
				},
			},
		},
		MuiSnackbar: {
			styleOverrides: {
				root: {
					alignItems: 'flex-start',
					right: '10px !important',
					top: '10px',
					left: 'inherit !important',
					bottom: 'inherit',
				},
			},
		},
		MuiAlert: {
			styleOverrides: {
				icon: {
					color: '#FF2D55 !important',
					fontSize: '25px',
				},
				action: {
					paddingTop: '0px',
				},
				root: {
					background: `${palette.palette.lightYellow}`,
					alignItems: 'center',
					color: '#FF2D55',
				},
			},
		},
	},
});
