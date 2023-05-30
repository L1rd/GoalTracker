/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// MUI
import { Box, Button, Typography } from '@mui/material';

// Icons
import Logo from 'assets/icons/logo.svg';
import AuthImg from 'assets/images/auth-img.svg';

// Components
import LogInWithEmail from './LogInWithEmail';
import RecoverYourPassword from './RecoverYourPassword';
import SendOnEmail from './SendOnEmail';

// Styles
import '../style.scss';

const LogInPage = () => {
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
										{t('log-in')}
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
										<Button onClick={() => navigate('/GoalTracker/Auth/LogIn/LogInWithEmail/')}>
											<Typography variant="smallDetails">{t('continue-with-email')}</Typography>
										</Button>
									</Box>
									<Typography variant="smallDetails" className="auth__link">
										{t('don`t-have-account')}{' '}
										<span onClick={() => navigate('/GoalTracker/Auth/SignUp/')}>
											{t('sign-up')}
										</span>
									</Typography>
								</motion.div>
							}
						/>
						<Route path="/LoginWithEmail/" element={<LogInWithEmail />} />
						<Route path="/RecoverYourPassword/" element={<RecoverYourPassword />} />
						<Route path="/SendOnEmail/" element={<SendOnEmail />} />
					</Routes>
				</Box>

				<img src={AuthImg} alt="auth-img" />
			</Box>
		</motion.div>
	);
};

export default LogInPage;
