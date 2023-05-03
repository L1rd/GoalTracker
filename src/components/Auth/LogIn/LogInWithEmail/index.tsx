/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import Logo from 'assets/icons/logo.svg';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import CustomCheckbox from 'shared/components/CustomCheckbox';
import CustomInput from 'shared/components/CustomInput';
import { loginSchema } from 'utils/schemas';

const LogInWithEmail = () => {
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
			<Typography variant="h4" className="auth__title">
				Log in
			</Typography>
			<Box className="auth__inputs">
				<Formik
					initialValues={{ email: '', password: '', isStayLogged: false }}
					validationSchema={loginSchema}
					onSubmit={onSubmit}
				>
					{({ isSubmitting }) => (
						<Form>
							<CustomInput label="Email" name="email" type="email" />
							<CustomInput label="Password" name="password" type="password" />
							<CustomCheckbox type="checkbox" name="isStayLogged" label="Stay logged in" />
							<Button
								color="primary"
								variant="buttonDark"
								size="medium"
								type="submit"
								disabled={isSubmitting}
							>
								<Typography variant="body">Log In</Typography>
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
			<Typography
				variant="link"
				className="auth__forgot-password"
				onClick={() => navigate('/GoalTracker/Auth/LogIn/RecoverYourPassword/')}
			>
				I forgot my password
			</Typography>
			<Typography variant="body" className="auth__link">
				Don’t you have an account? <span onClick={() => navigate('/GoalTracker/Auth/SignUp/')}>Sign up</span>
			</Typography>
		</motion.div>
	);
};

export default LogInWithEmail;
