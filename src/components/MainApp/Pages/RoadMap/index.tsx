import { useNavigate, Route, Routes, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Button, Typography } from '@mui/material';

// MUI

// Styles
import './style.scss';
import { useMemo } from 'react';
import { RoadMapList } from './components/RoadMapList';
import CreateRoadmap from './components/CreateRoadmap';

const RoadMap = () => {
	const param = useParams();
	const navigate = useNavigate();

	const getTitle = useMemo(() => {
		switch (param['*']) {
			case 'CreateRoadmap':
				return (
					<Typography variant="h2" className="roadMap__header-title">
						Creating Roadmap
					</Typography>
				);

			default:
				return (
					<>
						<Typography variant="h2" className="roadMap__header-title">
							RoadMaps
						</Typography>
						<Button
							variant="buttonDark"
							color="primary"
							size="medium"
							onClick={() => navigate('CreateRoadmap')}
						>
							<Typography variant="body" className="roadMap__header-title">
								Create RoadMap
							</Typography>
						</Button>
					</>
				);
		}
	}, [param]);

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
			<Box className="roadMap__header">{getTitle}</Box>
			<Routes>
				<Route path="/" element={<RoadMapList />} />
				<Route path="/CreateRoadmap/" element={<CreateRoadmap />} />
			</Routes>
		</motion.div>
	);
};

export default RoadMap;
