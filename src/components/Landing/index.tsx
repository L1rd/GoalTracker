import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Typography } from '@mui/material';

// Icons
import QuestionArrow from 'assets/icons/question-arrow.svg';
import User from 'assets/images/appoinment-user.svg';

// Constants
import { QUESTIONS } from 'utils/constans/questions';

// Selectors
import { selectorGetTheme } from 'redux/goals-service/selectors';

// Hooks
import { useScrollToTop } from 'shared/hooks/useScrollToTop';

// Components
import ScrollToTop from 'shared/components/ScrollToTop';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Invitation from './components/Invitation';

// Styles
import './style.scss';

const LandingPage = () => {
	const theme = useSelector(selectorGetTheme);
	const { isShowScrollToTop } = useScrollToTop();
	const { t } = useTranslation('landing');
	const navigate = useNavigate();

	return (
		<Box className="landing">
			<Header />
			<Container maxWidth={false} sx={{ maxWidth: '1160px', position: 'relative', paddingTop: '85px' }}>
				<Box className="landing__appointment" id="features">
					<Box className="landing__main-info">
						<Typography variant="h1" className="landing__main-title">
							{t('set-sights-high')}
						</Typography>
						<Typography variant="body" className="landing__main-about">
							{t('goaltracker-appointment')}
						</Typography>
						<Button
							variant={theme === 'theme-dark' ? 'buttonLight' : 'buttonDark'}
							color={theme === 'theme-dark' ? 'primary' : 'secondary'}
							size="large"
							onClick={() => navigate('/GoalTracker/Auth/SignUp')}
						>
							<Typography variant="subtitle">{t('start-your-journey')}</Typography>
						</Button>
					</Box>
					<img src={User} alt="user" />
					<Box className="landing__features">
						<Box>
							<Typography variant="subtitle">{t('goaltracker-feature-first')}</Typography>
						</Box>
						<Box>
							<Typography variant="subtitle">{t('goaltracker-feature-second')}</Typography>
						</Box>
						<Box>
							<Typography variant="subtitle">{t('goaltracker-feature-third')}</Typography>
						</Box>
					</Box>
				</Box>
				<Benefits />
				<Reviews />
			</Container>
			<Invitation />
			<Container maxWidth={false} sx={{ maxWidth: '1160px', position: 'relative', paddingTop: '85px' }}>
				<Box className="landing__questions" id="questions">
					<Typography variant="h2" className="landing__questions-title">
						{t('common-questions')}
					</Typography>
					<Box className="landing__question" sx={{ marginBottom: '144px' }}>
						{QUESTIONS.map(item => (
							<Accordion key={item.question}>
								<AccordionSummary expandIcon={<img src={QuestionArrow} alt="QuestionArrow" />}>
									<Typography variant="h4" className="landing__question-title">
										{t(item.question)}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography variant="subtitle" className="landing__question-info">
										{t(item.answer)}
									</Typography>
								</AccordionDetails>
							</Accordion>
						))}
					</Box>
				</Box>
			</Container>
			<Footer />
			{isShowScrollToTop && <ScrollToTop />}
		</Box>
	);
};

export default LandingPage;
