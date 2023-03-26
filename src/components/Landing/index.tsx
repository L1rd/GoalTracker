import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Container,
	Typography,
	useTheme,
} from '@mui/material';
import QuestionArrow from 'assets/icons/question-arrow.svg';
import User from 'assets/images/appoinment-user.svg';
import { QUESTIONS } from 'utils/constans/questions';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Header from './components/Header';
import Invitation from './components/Invitation';
import Reviews from './components/Reviews';
import './style.scss';

const LandingPage = () => {
	const theme = useTheme();
	return (
		<Box className="landing">
			<Header />
			<Container maxWidth={false} sx={{ maxWidth: '1160px', position: 'relative', paddingTop: '85px' }}>
				<Box className="landing__appointment" id="features">
					<Box className="landing__main-info">
						<Typography variant="h1" sx={{ color: `${theme.palette.darkYellow}`, marginBottom: '24px' }}>
							Set your sights high
						</Typography>
						<Typography
							variant="body"
							sx={{
								display: 'block',
								color: `${theme.palette.lightYellow}`,
								marginBottom: '48px',
								textAlign: 'justify',
							}}
						>
							With our goal-tracking platform, we provide the necessary tools and guidance to help you
							bridge the gap between dreaming and achieving, making your goals a tangible reality.
						</Typography>
						<Button variant="buttonLight" color="primary" size="large">
							<Typography variant="subtitle">Start your journey</Typography>
						</Button>
					</Box>
					<img src={User} alt="user" />
					<Box className="landing__features">
						<Box>
							<Typography variant="subtitle" sx={{ color: `${theme.palette.lightYellow}` }}>
								Tracking your goals can help you gain clarity about what you want to achieve, and how
								you plan to get there.
							</Typography>
						</Box>
						<Box>
							<Typography variant="subtitle" sx={{ color: `${theme.palette.lightYellow}` }}>
								You can focus your attention and energy on specific tasks, which can help you achieve
								your goals more quickly.
							</Typography>
						</Box>
						<Box>
							<Typography variant="subtitle" sx={{ color: `${theme.palette.lightYellow}` }}>
								By tracking your goals, you hold yourself accountable to follow through on your
								commitments.
							</Typography>
						</Box>
					</Box>
				</Box>
				<Benefits />
				<Reviews />
			</Container>
			<Invitation />
			<Container maxWidth={false} sx={{ maxWidth: '1160px', position: 'relative', paddingTop: '85px' }}>
				<Box className="landing__questions" id="questions">
					<Typography
						variant="h2"
						sx={{ color: `${theme.palette.darkYellow}`, textAlign: 'center', marginBottom: '48px' }}
					>
						Common Questions
					</Typography>
					<Box className="landing__question" sx={{ marginBottom: '144px' }}>
						{QUESTIONS.map(item => (
							<Accordion>
								<AccordionSummary expandIcon={<img src={QuestionArrow} alt="QuestionArrow" />}>
									<Typography variant="h4" sx={{ color: `${theme.palette.darkYellow}` }}>
										{item.question}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography variant="subtitle" sx={{ color: `${theme.palette.lightYellow}` }}>
										{item.answer}
									</Typography>
								</AccordionDetails>
							</Accordion>
						))}
					</Box>
				</Box>
			</Container>
			<Footer />
		</Box>
	);
};

export default LandingPage;
