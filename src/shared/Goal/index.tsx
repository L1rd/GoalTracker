import { Box, LinearProgress, Typography, useTheme } from '@mui/material';
import GoalDurationIcon from 'assets/icons/duration-icon.svg';
import GoalIcon from 'shared/GoalIcon';
import './style.scss';

interface GoalProps {
	goal: string;
	progress: string;
}

const Goal = ({ goal, progress }: GoalProps) => {
	const theme = useTheme();

	return (
		<Box className="goal">
			<GoalIcon icon={GoalDurationIcon} />
			<Box className="goal__info">
				<Box className="goal__description">
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

export default Goal;
