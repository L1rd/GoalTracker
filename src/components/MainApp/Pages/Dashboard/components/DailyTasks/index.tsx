import { Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const DailyTasks = () => {
	const theme = useTheme();
	const { t } = useTranslation('mainApp');

	return (
		<Box className="daily-tasks">
			<Box className="daily-tasks__header">
				<Typography variant="subtitle" sx={{ color: `${theme.palette.darkYellow}` }}>
					{t('daily-tasks')}
				</Typography>
			</Box>
			<Box className="daily-tasks__list" />
		</Box>
	);
};

export default DailyTasks;
