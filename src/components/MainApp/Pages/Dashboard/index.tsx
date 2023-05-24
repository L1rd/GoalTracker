import { motion } from 'framer-motion';

// MUI
import { Box, Typography, useTheme } from '@mui/material';

// Components
import DailyTasks from './components/DailyTasks';
import GoalProgress from './components/GoalProgress';
import TeamUpdates from './components/TeamUpdates';

// Styles
import './style.scss';

const Dashboard = () => {
	const theme = useTheme();

	return (
		<motion.div
			className="dashboard"
			initial={{ transform: 'translate(0, -220px)', opacity: 0 }}
			animate={{ transform: 'translate(0, 0)', opacity: 1 }}
			exit={{
				transform: 'translate(0, 220px)',
				opacity: 0,
			}}
		>
			<Box className="dashboard__title">
				<Typography variant="h1" sx={{ color: `${theme.palette.darkYellow}`, marginBottom: '12px' }}>
					Welcome back, Alice!
				</Typography>
				<Typography variant="h4" sx={{ color: `${theme.palette.lightYellow}` }}>
					How are your goals progressing today?
				</Typography>
			</Box>
			<Box className="dashboard__main-info">
				<GoalProgress />
				<TeamUpdates />
				<DailyTasks />
			</Box>
		</motion.div>
	);
};

export default Dashboard;
