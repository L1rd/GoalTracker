/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';

// MUI
import { Box, Button, Typography } from '@mui/material';

// Icons
import Logo from 'assets/icons/logo.svg';

// Components
import CustomInput from 'shared/components/CustomInput';

// Schemas
import { signupSchema } from 'utils/schemas';

const SignUpWithEmail = () => {
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
			<Typography variant="h4" className="auth__title" sx={{ marginBottom: '45px !important' }}>
				{t('create-an-account')}
			</Typography>
			<Box className="auth__inputs">
				<Formik
					initialValues={{ nickname: '', email: '', password: '', confirmPassword: '' }}
					validationSchema={signupSchema}
					onSubmit={onSubmit}
				>
					{({ isSubmitting }) => (
						<Form>
							<CustomInput label={t('nickname')} name="nickname" type="text" />
							<CustomInput label={t('email')} name="email" type="email" />
							<CustomInput label={t('password')} name="password" type="password" />
							<CustomInput label={t('confirm-password')} name="confirmPassword" type="password" />
							<Button
								color="primary"
								variant="buttonDark"
								size="medium"
								type="submit"
								disabled={isSubmitting}
							>
								<Typography variant="body">{t('sign-up')}</Typography>
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
			<Typography variant="reviews" className="auth__terms">
				{t('create-agree')} <span>{t('terms-of-use')}</span> {t('and')} <span>{t('privacy-policy')}</span> .
			</Typography>
			<Typography variant="smallDetails" className="auth__link">
				{t('already-have-account')}{' '}
				<span onClick={() => navigate('/GoalTracker/Auth/LogIn/')}>{t('log-in')}</span>
			</Typography>
		</motion.div>
	);
};

export default SignUpWithEmail;
