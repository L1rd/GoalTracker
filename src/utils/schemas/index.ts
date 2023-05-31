import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const loginSchema = yup.object().shape({
	email: yup.string().email('enter-email-format').required('required'),
	password: yup
		.string()
		.min(6)
		.matches(passwordRules, {
			message: 'password-must-contain',
		})
		.required('required'),
});

export const signupSchema = yup.object().shape({
	nickname: yup.string().min(3, 'nickname-must-be').required('required'),
	email: yup.string().email('enter-email-format').required('required'),
	password: yup
		.string()
		.min(6)
		.matches(passwordRules, {
			message: 'password-must-contain',
		})
		.required('required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), ''], 'password-must-match')
		.required('required'),
});

export const settingsSchema = yup.object().shape({
	email: yup.string().email('enter-email-format'),
	nickname: yup.string().min(3, 'nickname-must-be'),
	oldPassword: yup.string().min(6).matches(passwordRules, {
		message: 'password-must-contain',
	}),
	newPassword: yup.string().min(6).matches(passwordRules, {
		message: 'password-must-contain',
	}),
	confirmNewPassword: yup.string().oneOf([yup.ref('newPassword'), ''], 'password-must-match'),
});

export const recoverYourPasswordSchema = yup.object().shape({
	email: yup.string().email('enter-email-formatm').required('required'),
});
