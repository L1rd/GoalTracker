import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const loginSchema = yup.object().shape({
	email: yup.string().email('Please enter your email address using the format name@example.com').required('Required'),
	password: yup.string().min(8).matches(passwordRules, { message: 'Invalid password' }).required('Required'),
});

export const signupSchema = yup.object().shape({
	nickname: yup.string().min(3, 'Nickname must be at least 3 characters long').required('Required'),
	email: yup.string().email('Please enter your email address using the format name@example.com').required('Required'),
	password: yup.string().min(8).matches(passwordRules, { message: 'Invalid password' }).required('Required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), ''], 'Passwords must match')
		.required('Required'),
});

export const recoverYourPasswordSchema = yup.object().shape({
	email: yup.string().email('Please enter your email address using the format name@example.com').required('Required'),
});
