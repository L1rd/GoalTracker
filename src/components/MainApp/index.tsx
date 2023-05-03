import { Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import Dashboard from './Pages/Dashboard';
import Goals from './Pages/Goals';
import Navigation from './Navigation';

const GoalTracker = () => {
	const location = useLocation();

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				background: 'linear-gradient(360deg, #012075 0%, #2647AC 33.65%, #012075 68.54%, #0B215C 99.99%)',
				height: '100%',
				minHeight: '100vh',
			}}
		>
			<Navigation />
			<AnimatePresence>
				<Routes location={location}>
					<Route path="/Dashboard/" element={<Dashboard />} />
					<Route path="/Goals/" element={<Goals />} />
				</Routes>
			</AnimatePresence>
		</Box>
	);
};

export default GoalTracker;
