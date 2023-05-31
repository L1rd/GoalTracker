/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// MUI
import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';

// Icons
import Logo from 'assets/icons/logo.svg';
import AuthImg from 'assets/images/auth-img.svg';

// Components
import SignUpWithEmail from './SignUpWithEmail';

// Styles
import '../style.scss';

const SignUpPage = () => {
	const { t } = useTranslation('auth');
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<motion.div className="auth">
			<Box className="auth__container">
				<Box className="auth__actions">
					<Routes location={location}>
						<Route
							path="/"
							element={
								<motion.div
									className="auth__column"
									initial={{ transform: 'translate(-220px, 0)', opacity: 0 }}
									animate={{ transform: 'translate(0, 0)', opacity: 1 }}
									transition={{ delay: 0.1 }}
									exit={{
										transform: 'translate(220px, 0)',
										opacity: 0,
									}}
								>
									<Box className="auth__logo">
										<img src={Logo} alt="logo" />
										<Typography>goalrizer</Typography>
									</Box>
									<Typography variant="h4" className="auth__title">
										{t('create-an-account')}
									</Typography>
									<Box className="auth__buttons">
										<Button>
											<Typography variant="smallDetails">{t('continue-with-google')}</Typography>
										</Button>
										<Button>
											<Typography variant="smallDetails">
												{t('continue-with-facebook')}
											</Typography>
										</Button>
										<Button onClick={() => navigate('/GoalTracker/Auth/SignUp/SignUpWithEmail/')}>
											<Typography variant="smallDetails">{t('continue-with-email')}</Typography>
										</Button>
									</Box>
									<FormControlLabel
										control={
											<Checkbox
												sx={{ '& .MuiSvgIcon-root': { fontSize: '25px', fill: '#0B215C' } }}
											/>
										}
										sx={{
											userSelect: 'none',
											margin: '32px auto 0 0',
											'& .MuiTypography-root': {
												fontFamily: 'Stolzl',
												fontSize: '12px',
												lineHeight: '150%',
												letterSpacing: '0.004em',
											},
										}}
										label={t('wish-recieve-news-promotions')}
									/>
									<Typography variant="reviews" className="auth__agreement">
										{t('agree-policy')}.
									</Typography>
									<Typography variant="smallDetails" className="auth__link">
										{t('already-have-account')}{' '}
										<span onClick={() => navigate('/GoalTracker/Auth/LogIn/')}>{t('log-in')}</span>
									</Typography>
								</motion.div>
							}
						/>
						<Route path="/SignUpWithEmail/" element={<SignUpWithEmail />} />
					</Routes>
				</Box>

				<img src={AuthImg} alt="auth-img" />
			</Box>
		</motion.div>
	);
};

export default SignUpPage;
