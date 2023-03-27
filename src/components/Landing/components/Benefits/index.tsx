import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import Calendar from 'assets/images/calendar.svg';
import Teamwork from 'assets/images/teamwork.svg';
import Tracking from 'assets/images/tracking.svg';

const Benefits = () => {
	const { t } = useTranslation('landing');

	return (
		<Box className="landing__benefits" id="benefits">
			<Typography variant="h2" className="landing__benefits-title">
				{t('explore-benefits')}
			</Typography>
			<Box className="landing__benefits-row">
				<Box className="landing__team">
					<Box className="landing__benefits__info">
						<Typography>{t('goaltracker-benefits-first')}</Typography>
					</Box>
					<img src={Teamwork} alt="teamwork" />
				</Box>
				<Box className="landing__tracking">
					<Box className="landing__benefits__info">
						<Typography>{t('goaltracker-benefits-second')}</Typography>
					</Box>
					<img src={Tracking} alt="teamwork" />
				</Box>
				<Box className="landing__calendar">
					<Box className="landing__benefits__info">
						<Typography>{t('goaltracker-benefits-third')}</Typography>
					</Box>
					<img src={Calendar} alt="teamwork" />
				</Box>
			</Box>
		</Box>
	);
};

export default Benefits;
