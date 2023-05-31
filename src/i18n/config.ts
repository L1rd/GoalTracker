import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import enLanding from './en/landing.json';
import uaLanding from './ua/landing.json';
import enMainApp from './en/mainApp.json';
import uaMainApp from './ua/mainApp.json';
import enAuth from './en/auth.json';
import uaAuth from './ua/auth.json';

export const resources = {
	en: {
		landing: enLanding,
		mainApp: enMainApp,
		auth: enAuth,
	},
	ua: {
		landing: uaLanding,
		mainApp: uaMainApp,
		auth: uaAuth,
	},
};

export const availableLanguages = Object.keys(resources);

i18next.use(initReactI18next).init({
	resources,
	lng: 'en',
});

export default i18next;
