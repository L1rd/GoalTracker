/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Logo from 'assets/icons/logo.svg';
import EmailMessage from 'assets/icons/mail-with-message.svg';
import { motion } from 'framer-motion';

const SendOnEmail = () => {
	const navigate = useNavigate();

	return (
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
			<Typography onClick={() => navigate('/GoalTracker/Auth/LogIn/')} variant="subtitle" className="auth__back">
				Back
			</Typography>
			<Box className="auth__logo">
				<img src={Logo} alt="logo" />
				<Typography>goalrizer</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					gap: '16px',
					margin: '90px 0 32px 0',
					textAlign: 'center',
				}}
			>
				<img src={EmailMessage} alt="email-message" />
				<Typography variant="subtitle">We`ve sent you an email with a link to reset your password.</Typography>
			</Box>
			<Typography variant="smallDetails" sx={{ marginBottom: '32px' }}>
				Check your spam and promotions folder if it doesn`t appear in your main mailbox.
			</Typography>
			<Typography variant="link">Didn’t receive the email?</Typography>
		</motion.div>
	);
};

export default SendOnEmail;
