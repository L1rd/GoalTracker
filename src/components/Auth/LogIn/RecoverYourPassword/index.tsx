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
import { recoverYourPasswordSchema } from 'utils/schemas';

const RecoverYourPassword = () => {
	const { t } = useTranslation('auth');
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
				{t('back')}
			</Typography>
			<Box className="auth__logo">
				<img src={Logo} alt="logo" />
				<Typography>goalrizer</Typography>
			</Box>
			<Typography variant="h4" className="auth__title">
				{t('recover-password')}
			</Typography>
			<Typography
				variant="smallDetails"
				className="auth__recover-password"
				sx={{ marginBottom: '50px', textAlign: 'center', fontWeight: 'bold' }}
			>
				{t('enter-email-for-recovering')}
			</Typography>
			<Box className="auth__inputs">
				<Formik initialValues={{ email: '' }} validationSchema={recoverYourPasswordSchema} onSubmit={onSubmit}>
					{({ isSubmitting }) => (
						<Form>
							<CustomInput label={t('email')} name="email" type="email" />
							<Button
								color="primary"
								variant="buttonDark"
								size="medium"
								sx={{ margin: '6px 0 32px 0 !important' }}
								type="submit"
								disabled={isSubmitting}
							>
								<Typography variant="smallDetails">{t('send-link')}</Typography>
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
			<Typography variant="smallDetails" sx={{ textAlign: 'center' }}>
				{t('contact-support-team')}
			</Typography>
		</motion.div>
	);
};

export default RecoverYourPassword;
