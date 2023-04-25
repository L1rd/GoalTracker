import { Box, Typography, useTheme } from '@mui/material';
import GoalTask from 'shared/components/GoalTask';

const GoalProgress = () => {
	const theme = useTheme();
	return (
		<Box className="goal-progress">
			<Box className="goal-progress__header">
				<Typography variant="subtitle" sx={{ color: `${theme.palette.darkYellow}` }}>
					Recently updated
				</Typography>
				<Typography variant="link" sx={{ color: `${theme.palette.darkYellow}` }}>
					View all
				</Typography>
			</Box>
			<Box className="goal-progress__list">
				<GoalTask goal="Save 1500$" progress="$375/1500" />
				<GoalTask goal="Save 1500$" progress="$375/1500" />
				<GoalTask goal="Save 1500$" progress="$375/1500" />
			</Box>
		</Box>
	);
};

export default GoalProgress;
