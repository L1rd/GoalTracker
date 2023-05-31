/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';

// MUI
import { Box, Button, Typography } from '@mui/material';

// Icons
import Logo from 'assets/icons/logo.svg';

// Components
import CustomCheckbox from 'shared/components/CustomCheckbox';
import CustomInput from 'shared/components/CustomInput';

// Schemas
import { loginSchema } from 'utils/schemas';

const LogInWithEmail = () => {
	const { t } = useTranslation('auth');
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
				{t('back')}
			</Typography>
			<Box className="auth__logo">
				<img src={Logo} alt="logo" />
				<Typography>goalrizer</Typography>
			</Box>
			<Typography variant="h4" className="auth__title">
				{t('log-in')}
			</Typography>
			<Box className="auth__inputs">
				<Formik
					initialValues={{ email: '', password: '', isStayLogged: false }}
					validationSchema={loginSchema}
					onSubmit={onSubmit}
				>
					{({ isSubmitting }) => (
						<Form>
							<CustomInput label={t('email')} name="email" type="email" />
							<CustomInput label={t('password')} name="password" type="password" />
							<CustomCheckbox type="checkbox" name="isStayLogged" label={t('stay-logged-in')} />
							<Button
								color="primary"
								variant="buttonDark"
								size="medium"
								type="submit"
								disabled={isSubmitting}
							>
								<Typography variant="body">{t('log-in')}</Typography>
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
				{t('forgot-password')}
			</Typography>
			<Typography variant="body" className="auth__link">
				{t('don`t-have-account')}{' '}
				<span onClick={() => navigate('/GoalTracker/Auth/SignUp/')}>{t('sign-up')}</span>
			</Typography>
		</motion.div>
	);
};

export default LogInWithEmail;
