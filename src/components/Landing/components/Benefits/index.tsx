import { Box, Typography, useTheme } from '@mui/material';
import Calendar from 'assets/images/calendar.svg';
import Teamwork from 'assets/images/teamwork.svg';
import Tracking from 'assets/images/tracking.svg';

const Benefits = () => {
	const theme = useTheme();

	return (
		<Box className="landing__benefits" id="benefits">
			<Typography variant="h2" sx={{ marginBottom: '24px', color: `${theme.palette.darkYellow}` }}>
				Explore the benefits of Goalrizer
			</Typography>
			<Box className="landing__benefits-row">
				<Box className="landing__team">
					<Box className="landing__benefits__info">
						<Typography>Set goals as a team and work together towards achieving them</Typography>
					</Box>
					<img src={Teamwork} alt="teamwork" />
				</Box>
				<Box className="landing__tracking">
					<Box className="landing__benefits__info">
						<Typography>Keep track of all your tasks in one place</Typography>
					</Box>
					<img src={Tracking} alt="teamwork" />
				</Box>
				<Box className="landing__calendar">
					<Box className="landing__benefits__info">
						<Typography>Utilize the calendar to map out future plans</Typography>
					</Box>
					<img src={Calendar} alt="teamwork" />
				</Box>
			</Box>
		</Box>
	);
};

export default Benefits;
