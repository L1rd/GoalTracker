/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import Logo from 'assets/icons/logo.svg';
import AuthImg from 'assets/images/auth-img.svg';
import { motion } from 'framer-motion';
import SignUpWithEmail from './SignUpWithEmail';
import '../style.scss';

const SignUpPage = () => {
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
										Create an account
									</Typography>
									<Box className="auth__buttons">
										<Button>
											<Typography variant="smallDetails">Continue with Google</Typography>
										</Button>
										<Button>
											<Typography variant="smallDetails">Continue with Facebook</Typography>
										</Button>
										<Button onClick={() => navigate('/GoalTracker/Auth/SignUp/SignUpWithEmail/')}>
											<Typography variant="smallDetails">Continue with email</Typography>
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
										label="I wish to receive news and promotions from Goalrizer Company by email."
									/>
									<Typography variant="reviews" className="auth__agreement">
										By continuing, you agree to Goalrizer Company’s Terms of Use and Privacy Policy.
									</Typography>
									<Typography variant="smallDetails" className="auth__link">
										Already have an account?{' '}
										<span onClick={() => navigate('/GoalTracker/Auth/LogIn/')}>Log In up</span>
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
