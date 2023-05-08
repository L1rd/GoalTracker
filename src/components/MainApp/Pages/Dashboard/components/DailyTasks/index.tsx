import { Box, Typography, useTheme } from '@mui/material';

const DailyTasks = () => {
	const theme = useTheme();
	return (
		<Box className="daily-tasks">
			<Box className="daily-tasks__header">
				<Typography variant="subtitle" sx={{ color: `${theme.palette.darkYellow}` }}>
					Daily tasks
				</Typography>
			</Box>
			<Box className="daily-tasks__list" />
		</Box>
	);
};

export default DailyTasks;
