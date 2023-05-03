/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import Logo from 'assets/icons/logo.svg';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import CustomInput from 'shared/components/CustomInput';
import { signupSchema } from 'utils/schemas';

const SignUpWithEmail = () => {
	const navigate = useNavigate();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSubmit = async (values: any, actions: any) => {
		navigate('/GoalTracker/MainApp/Dashboard');
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
			<Typography variant="h4" className="auth__title" sx={{ marginBottom: '45px !important' }}>
				Create an account
			</Typography>
			<Box className="auth__inputs">
				<Formik
					initialValues={{ nickname: '', email: '', password: '', confirmPassword: '' }}
					validationSchema={signupSchema}
					onSubmit={onSubmit}
				>
					{({ isSubmitting }) => (
						<Form>
							<CustomInput label="Nickname" name="nickname" type="text" />
							<CustomInput label="Email" name="email" type="email" />
							<CustomInput label="Password" name="password" type="password" />
							<CustomInput label="Confirm password" name="confirmPassword" type="password" />
							<Button
								color="primary"
								variant="buttonDark"
								size="medium"
								type="submit"
								disabled={isSubmitting}
							>
								<Typography variant="body">Sign Up</Typography>
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
			<Typography variant="reviews" className="auth__terms">
				By clicking the “Sign up” button, you are creating a Goalrizer account and therefore you agree to
				Goalrizer Company’s <span>Terms of Use</span> and <span>Privacy Policy</span> .
			</Typography>
			<Typography variant="smallDetails" className="auth__link">
				Already have an account? <span onClick={() => navigate('/GoalTracker/Auth/LogIn/')}>Log In</span>
			</Typography>
		</motion.div>
	);
};

export default SignUpWithEmail;
