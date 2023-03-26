import { Box } from '@mui/material';
import Background from 'assets/images/app-background.svg';
import Dashboard from './Pages/Dashboard';
import Navigation from './Navigation';

const GoalTracker = () => (
	<Box
		sx={{
			display: 'flex',
			justifyContent: 'center',
			gap: '32px',
			background: `url(${Background}) center/cover no-repeat`,
			height: '100%',
		}}
	>
		<Navigation />
		<Dashboard />
	</Box>
);

export default GoalTracker;
