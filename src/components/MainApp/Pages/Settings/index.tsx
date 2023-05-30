import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';

// Selectors
import { selectorGetLanguage, selectorGetTheme } from 'redux/goals-service/selectors';

// Actions
import { changeLanguage, changeTheme } from 'redux/goals-service/reducer';

// MUI
import { Box, Button, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';

// Schemas
import { settingsSchema } from 'utils/schemas';

// Components
import CustomInput from 'shared/components/CustomInput';

// Styles
import './style.scss';

const Settings = () => {
	const { t } = useTranslation('mainApp');
	const theme = useSelector(selectorGetTheme);
	const dispatch = useDispatch();
	const language = useSelector(selectorGetLanguage);
	const { i18n } = useTranslation('landing');

	const handleChangeTheme = (event: SelectChangeEvent) => {
		dispatch(changeTheme(event.target.value as string));
	};

	const handleChangeLanguage = async (event: SelectChangeEvent) => {
		dispatch(changeLanguage(event.target.value));
		await i18n.changeLanguage(event.target.value);
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSubmit = async (values: any, actions: any) => {
		actions.resetForm();
	};

	return (
		<motion.div
			className="settings"
			initial={{ transform: 'translate(0, -220px)', opacity: 0 }}
			animate={{ transform: 'translate(0, 0)', opacity: 1 }}
			exit={{
				transform: 'translate(0, 220px)',
				opacity: 0,
			}}
		>
			<Box className="settings__header">
				<Typography variant="h2" className="goals__header-title">
					{t('settings')}
				</Typography>
			</Box>
			<Box className="settings__info">
				<Formik
					initialValues={{
						email: '',
						nickname: '',
						oldPassword: '',
						newPassword: '',
						confirmNewPassword: '',
					}}
					validationSchema={settingsSchema}
					onSubmit={onSubmit}
				>
					{({ isSubmitting }) => (
						<Form>
							<Box className="settings__row">
								<Box className="settings__input-element">
									<CustomInput label={t('email')} name="email" type="email" />
									<CustomInput label={t('nickname')} name="nickname" type="text" />
									<Box className="settings__language flex">
										<Typography variant="reviews">{t('language')}:</Typography>
										<Select
											value={language}
											label="Language"
											className="select"
											onChange={handleChangeLanguage}
										>
											<MenuItem value="en">
												<Typography variant="body">{t('english')}</Typography>
											</MenuItem>
											<MenuItem value="ua">
												<Typography variant="body">{t('ukraine')}</Typography>
											</MenuItem>
										</Select>
									</Box>
									<Box className="settings__theme flex">
										<Typography variant="reviews">{t('theme')}:</Typography>
										<Select
											value={theme}
											label="Theme"
											className="select"
											onChange={handleChangeTheme}
										>
											<MenuItem value="theme-light">
												<Typography variant="body">{t('light')}</Typography>
											</MenuItem>
											<MenuItem value="theme-dark">
												<Typography variant="body">{t('dark')}</Typography>
											</MenuItem>
										</Select>
									</Box>
								</Box>

								<Box className="settings__input-element">
									<CustomInput label={t('old-password')} name="oldPassword" type="password" />
									<CustomInput label={t('new-password')} name="newPassword" type="password" />
									<CustomInput
										label={t('confirm-password')}
										name="confirmNewPassword"
										type="password"
									/>
								</Box>
							</Box>
							<Box className="settings__actions">
								<Button color="secondary" variant="buttonLight" size="small">
									<Typography variant="body">{t('cancel')}</Typography>
								</Button>

								<Button
									color="primary"
									variant="buttonDark"
									size="small"
									disabled={isSubmitting}
									type="submit"
								>
									<Typography variant="body">{t('save-changes')}</Typography>
								</Button>
							</Box>
						</Form>
					)}
				</Formik>
			</Box>
		</motion.div>
	);
};

export default Settings;
