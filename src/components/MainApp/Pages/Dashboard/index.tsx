import { Box, Typography, useTheme } from '@mui/material';
import DailyTasks from './components/DailyTasks';
import GoalProgress from './components/GoalProgress';
import TeamUpdates from './components/TeamUpdates';
import './style.scss';

const Dashboard = () => {
	const theme = useTheme();

	return (
		<Box className="dashboard">
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
		</Box>
	);
};

export default Dashboard;
