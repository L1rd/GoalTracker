import { Box, Button, Container, Typography } from '@mui/material';
import Logo from 'assets/icons/logo.svg';
import './style.scss';

const Footer = () => (
	<Box className="footer">
		<Container maxWidth={false} sx={{ maxWidth: '1120px', position: 'relative' }}>
			<Box className="footer__row" sx={{ marginBottom: '64px' }}>
				<Box className="header__logo">
					<img src={Logo} alt="logo" />
					<Typography>goalrizer</Typography>
				</Box>
				<Box className="footer__nav">
					<Typography variant="body">Terms of Service</Typography>
					<Typography variant="body">Privacy Policy</Typography>
					<Typography variant="body">Contact Us</Typography>
				</Box>
				<Box className="footer__subscribe">
					<Typography variant="subtitle">
						Subscribe to our weekly newsletter to receive useful tips for setting goals that are easy to
						accomplish.
					</Typography>
					<Box className="footer__action">
						<input type="email" placeholder="E-mail" />
						<Button variant="buttonDark" color="primary" size="small">
							<Typography variant="smallDetails">Subscribe</Typography>
						</Button>
					</Box>
				</Box>
			</Box>
			<Box className="footer__copyright">
				<Typography variant="smallDetailsSecond">© Copyright 2023</Typography>
				<Typography variant="smallDetailsSecond" sx={{ textAlign: 'center' }}>
					Copyright 2023. All rights reserved. <br />
					Powered by “Життя це страждання”
				</Typography>
				<Typography variant="smallDetailsSecondBold">Images by storyset on Freepik</Typography>
			</Box>
		</Container>
	</Box>
);

export default Footer;
