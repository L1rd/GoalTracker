import { Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const TeamUpdates = () => {
	const theme = useTheme();
	const { t } = useTranslation('mainApp');

	return (
		<Box className="team-updates">
			<Box className="team-updates__header">
				<Typography variant="subtitle" sx={{ color: `${theme.palette.darkYellow}` }}>
					{t('team-updates')}
				</Typography>
				<Typography variant="link" sx={{ color: `${theme.palette.darkYellow}` }}>
					{t('view-all')}
				</Typography>
			</Box>
			<Box className="team-updates__list" />
		</Box>
	);
};

export default TeamUpdates;
