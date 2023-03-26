import { Box } from '@mui/material';
import './style.scss';

const GoalIcon = ({ icon }: { icon: string }) => (
	<Box className="goal-icon">
		<img src={icon} alt="icon" />
	</Box>
);

export default GoalIcon;
