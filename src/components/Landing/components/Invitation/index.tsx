import { Box, Button, Typography } from '@mui/material';
import InvitationImg from 'assets/images/invitation.svg';

const Invitation = () => (
	<Box className="landing__invitation">
		<img src={InvitationImg} alt="invitation" />
		<Box className="landing__invitation__info" sx={{ textAlign: 'center', width: '558px' }}>
			<Typography variant="h2" sx={{ fontWeight: '500', marginBottom: '48px' }}>
				Ready to crush your goals?Sign up and get started!
			</Typography>
			<Button variant="buttonDark" size="large">
				<Typography variant="subtitle">Set my goals</Typography>
			</Button>
		</Box>
	</Box>
);

export default Invitation;
