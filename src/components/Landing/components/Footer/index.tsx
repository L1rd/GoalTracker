import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Box, Button, Container, Typography } from '@mui/material';
import Logo from 'assets/icons/logo.svg';
import UkraineFlag from 'assets/icons/ukraine-flag-icon.svg';
import { selectorGetTheme } from 'redux/goals-service/selectors';
import './style.scss';

const Footer = () => {
	const theme = useSelector(selectorGetTheme);
	const { t } = useTranslation('landing');

	return (
		<Box className="footer">
			<Container maxWidth={false} sx={{ maxWidth: '1120px', position: 'relative' }}>
				<Box className="footer__row" sx={{ marginBottom: '64px' }}>
					<Box className="header__logo">
						<img src={Logo} alt="logo" />
						<Typography>goalrizer</Typography>
					</Box>
					<Box className="footer__nav">
						<Typography variant="body">{t('terms-of-service')}</Typography>
						<Typography variant="body">{t('privacy-policy')}</Typography>
						<Typography variant="body">{t('contact-us')}</Typography>
					</Box>
					<Box className="footer__subscribe">
						<Typography variant="subtitle" className="footer__subscribe-info">
							{t('subscribe-weekly-newsletter')}
						</Typography>
						<Box className="footer__action">
							<input type="email" placeholder="E-mail" />
							<Button
								variant={theme === 'theme-dark' ? 'buttonDark' : 'buttonLight'}
								color="primary"
								size="medium"
							>
								<Typography variant="smallDetails">{t('subscribe')}</Typography>
							</Button>
						</Box>
					</Box>
				</Box>
				<Box className="footer__copyright">
					<Box className="footer__made">
						<img src={UkraineFlag} alt="Ukraine Flag" />
						<Typography variant="smallDetails">{t('made-in-ukraine')}</Typography>
					</Box>
					<Typography variant="smallDetailsSecond" sx={{ textAlign: 'center' }}>
						Copyright 2023. All rights reserved. <br />
						Powered by “Життя це страждання”
					</Typography>
					<Typography variant="smallDetailsSecondBold">Images by storyset on Freepik</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
