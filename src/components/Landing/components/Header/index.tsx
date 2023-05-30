import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

// MUI
import {
	Box,
	Button,
	Container,
	MenuItem,
	Select,
	SelectChangeEvent,
	Slide,
	Typography,
	useScrollTrigger,
} from '@mui/material';

// Icons
import Logo from 'assets/icons/logo.svg';

// Actions
import { changeLanguage, changeTheme } from 'redux/goals-service/reducer';

// Selectors
import { selectorGetLanguage, selectorGetTheme } from 'redux/goals-service/selectors';

// Styles
import './style.scss';

const Header = () => {
	const language = useSelector(selectorGetLanguage);
	const dispatch = useDispatch();
	const { i18n } = useTranslation('landing');
	const { t } = useTranslation('landing');

	const handleChange = async (event: SelectChangeEvent) => {
		dispatch(changeLanguage(event.target.value));
		await i18n.changeLanguage(event.target.value);
	};
	const theme = useSelector(selectorGetTheme);
	const trigger = useScrollTrigger({
		target: window,
	});
	const navigate = useNavigate();

	const hadndleChangeTheme = () => {
		if (theme === 'theme-dark') {
			dispatch(changeTheme('theme-light'));
		} else {
			dispatch(changeTheme('theme-dark'));
		}
	};

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			<Box className="header">
				<Container maxWidth={false} sx={{ maxWidth: '1120px', position: 'relative' }}>
					<Box className="header__row">
						<Box className="header__logo">
							<img src={Logo} alt="logo" />
							<Typography>goalrizer</Typography>
						</Box>
						<Box className="header__nav">
							<Link to="features" smooth offset={-80} duration={500}>
								<Typography variant="body">{t('features')}</Typography>
							</Link>
							<Link to="reviews" smooth offset={-80} duration={500}>
								<Typography variant="body">{t('reviews')}</Typography>
							</Link>
							<Link to="questions" smooth offset={-80} duration={500}>
								<Typography variant="body">{t('FAQ')}</Typography>
							</Link>
						</Box>
						<Box className="header__user-actions">
							<Button
								variant={theme === 'theme-dark' ? 'buttonLight' : 'buttonDark'}
								size="small"
								color="secondary"
								onClick={() => navigate('/GoalTracker/Auth/LogIn')}
							>
								<Typography variant="body">{t('logIn')}</Typography>
							</Button>
							<Button
								variant={theme === 'theme-dark' ? 'buttonDark' : 'buttonLight'}
								size="small"
								color="primary"
								onClick={() => navigate('/GoalTracker/Auth/SignUp')}
							>
								<Typography variant="body">{t('signUp')}</Typography>
							</Button>
							<Select value={language} onChange={handleChange} className="header__languages">
								<MenuItem value="en">
									<Typography variant="body">EN</Typography>
								</MenuItem>
								<MenuItem value="ua">
									<Typography variant="body">UA</Typography>
								</MenuItem>
							</Select>
							<button type="button" className="header__theme" onClick={hadndleChangeTheme}>
								{' '}
							</button>
						</Box>
					</Box>
				</Container>
			</Box>
		</Slide>
	);
};

export default Header;
