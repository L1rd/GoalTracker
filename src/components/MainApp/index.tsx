import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Dashboard from './Pages/Dashboard';
import Goals from './Pages/Goals';
import Navigation from './Navigation';

const GoalTracker = () => (
	<Box
		sx={{
			display: 'flex',
			justifyContent: 'center',
			background: 'linear-gradient(360deg, #012075 0%, #2647AC 33.65%, #012075 68.54%, #0B215C 99.99%)',
			height: '100%',
		}}
	>
		<Navigation />
		<Routes>
			<Route path="/Dashboard/" element={<Dashboard />} />
			<Route path="/Goals/" element={<Goals />} />
		</Routes>
	</Box>
);

export default GoalTracker;
