import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import enLanding from './en/landing.json';
import uaLanding from './ua/landing.json';

export const resources = {
	en: {
		landing: enLanding,
	},
	ua: {
		landing: uaLanding,
	},
};

export const availableLanguages = Object.keys(resources);

i18next.use(initReactI18next).init({
	resources,
	lng: 'en',
});

export default i18next;
