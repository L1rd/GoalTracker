import { Box, LinearProgress, Typography, useTheme } from '@mui/material';
import GoalDurationIcon from 'assets/icons/duration-icon.svg';
import GoalTaskIcon from '../GoalTaskIcon';
import './style.scss';

interface GoalProps {
	goal: string;
	progress: string;
}

const GoalTask = ({ goal, progress }: GoalProps) => {
	const theme = useTheme();

	return (
		<Box className="goal-task">
			<GoalTaskIcon icon={GoalDurationIcon} />
			<Box className="goal-task__info">
				<Box className="goal-task__description">
					<Typography variant="body" sx={{ color: `${theme.palette.lightYellow}` }}>
						{goal}
					</Typography>
					<Typography variant="body" sx={{ color: `${theme.palette.lightYellow}` }}>
						{progress}
					</Typography>
				</Box>
				<LinearProgress variant="determinate" value={70} />
			</Box>
		</Box>
	);
};

export default GoalTask;
