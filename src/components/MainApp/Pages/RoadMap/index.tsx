import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Button, Typography } from '@mui/material';
import { RoadMapBlock } from './components/roadMapBlock/roadMapBlock';

// MUI

// Styles
import './style.scss';

const RoadMap = () => {
	const navigate = useNavigate();

	return (
		<motion.div
			className="roadMap"
			initial={{ transform: 'translate(0, -220px)', opacity: 0 }}
			animate={{ transform: 'translate(0, 0)', opacity: 1 }}
			exit={{
				transform: 'translate(0, 220px)',
				opacity: 0,
			}}
		>
			<Box className="roadMap__header">
				<Typography variant="h2" className="roadMap__header-title">
					RoadMap
				</Typography>
				<Button variant="buttonDark" color="primary" size="medium" onClick={() => navigate('CreateGoal')}>
					<Typography variant="body" className="roadMap__header-title">
						Create RoadMap
					</Typography>
				</Button>
			</Box>

			<RoadMapBlock title="Create roadMap" timeStart="CreatedAt:" task="Stack of Technology:" author="Author:" />
		</motion.div>
	);
};

export default RoadMap;
