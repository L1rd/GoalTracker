/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import Logo from 'assets/icons/logo.svg';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import CustomInput from 'shared/components/CustomInput';
import { recoverYourPasswordSchema } from 'utils/schemas';

const RecoverYourPassword = () => {
	const navigate = useNavigate();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSubmit = async (values: any, actions: any) => {
		navigate('/GoalTracker/Auth/LogIn/SendOnEmail/');
		actions.resetForm();
	};

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
			<Typography onClick={() => navigate(-1)} variant="subtitle" className="auth__back">
				Back
			</Typography>
			<Box className="auth__logo">
				<img src={Logo} alt="logo" />
				<Typography>goalrizer</Typography>
			</Box>
			<Typography variant="h4" className="auth__title">
				Recover your password
			</Typography>
			<Typography
				variant="smallDetails"
				className="auth__recover-password"
				sx={{ marginBottom: '50px', textAlign: 'center', fontWeight: 'bold' }}
			>
				Enter the email that you used when register to recover your password. You will receive a password reset
				link.
			</Typography>
			<Box className="auth__inputs">
				<Formik initialValues={{ email: '' }} validationSchema={recoverYourPasswordSchema} onSubmit={onSubmit}>
					{({ isSubmitting }) => (
						<Form>
							<CustomInput label="Email" name="email" type="email" />
							<Button
								color="primary"
								variant="buttonDark"
								size="medium"
								sx={{ margin: '6px 0 32px 0 !important' }}
								type="submit"
								disabled={isSubmitting}
							>
								<Typography variant="smallDetails">Send link</Typography>
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
			<Typography variant="smallDetails" sx={{ textAlign: 'center' }}>
				If you need further assistance contact our support team
			</Typography>
		</motion.div>
	);
};

export default RecoverYourPassword;
