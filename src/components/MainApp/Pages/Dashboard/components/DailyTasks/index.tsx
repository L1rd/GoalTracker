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
			<Box className="daily-tasks__list">
				<Box sx={{ background: '#FFF6E0', borderRadius: '12px', width: '100%', height: '40px' }} />
				<Box sx={{ background: '#FFF6E0', borderRadius: '12px', width: '100%', height: '40px' }} />
				<Box sx={{ background: '#FFF6E0', borderRadius: '12px', width: '100%', height: '40px' }} />
				<Box sx={{ background: '#FFF6E0', borderRadius: '12px', width: '100%', height: '40px' }} />
			</Box>
		</Box>
	);
};

export default DailyTasks;
