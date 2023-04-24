import { Box } from '@mui/material';
import './style.scss';

const GoalTaskIcon = ({ icon }: { icon: string }) => (
	<Box className="goal-icon">
		<img src={icon} alt="icon" />
	</Box>
);

export default GoalTaskIcon;
