import { Box, Typography, useTheme } from '@mui/material';

const TeamUpdates = () => {
	const theme = useTheme();
	return (
		<Box className="team-updates">
			<Box className="team-updates__header">
				<Typography variant="subtitle" sx={{ color: `${theme.palette.darkYellow}` }}>
					Team Updates
				</Typography>
				<Typography variant="link" sx={{ color: `${theme.palette.darkYellow}` }}>
					View all
				</Typography>
			</Box>
			<Box className="team-updates__list" />
		</Box>
	);
};

export default TeamUpdates;
