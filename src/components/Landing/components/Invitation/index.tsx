import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import InvitationImg from 'assets/images/invitation.svg';
import { selectorGetTheme } from 'redux/goals-service/selectors';

const Invitation = () => {
	const theme = useSelector(selectorGetTheme);
	const { t } = useTranslation('landing');
	const navigate = useNavigate();

	return (
		<Box className="landing__invitation">
			<img src={InvitationImg} alt="invitation" />
			<Box className="landing__invitation__info" sx={{ textAlign: 'center', width: '558px' }}>
				<Typography
					variant="h2"
					sx={{ fontWeight: '500', marginBottom: '48px' }}
					className="landing__invitation-title"
				>
					{t('invitation')}
				</Typography>
				<Button
					variant={theme === 'theme-dark' ? 'buttonDark' : 'buttonLight'}
					color="primary"
					size="large"
					onClick={() => navigate('/GoalTracker/Auth/LogIn')}
				>
					<Typography variant="subtitle">{t('set-goals')}</Typography>
				</Button>
			</Box>
		</Box>
	);
};

export default Invitation;
