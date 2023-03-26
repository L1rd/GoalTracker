import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Box, Button, Container, Slide, Typography, useScrollTrigger } from '@mui/material';
import Logo from 'assets/icons/logo.svg';
import './style.scss';

const Header = () => {
	const trigger = useScrollTrigger({
		target: window,
	});
	const navigate = useNavigate();

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			<Box className="header">
				<Container maxWidth={false} sx={{ maxWidth: '1120px', position: 'relative' }}>
					<Box className="header__row">
						<Box className="header__logo">
							<img src={Logo} alt="logo" />
							<Typography>goalrizer</Typography>
						</Box>
						<Box className="header__nav">
							<Link to="features" smooth offset={-80} duration={500}>
								<Typography variant="body">Features</Typography>
							</Link>
							<Link to="reviews" smooth offset={-80} duration={500}>
								<Typography variant="body">Reviews</Typography>
							</Link>
							<Link to="questions" smooth offset={-80} duration={500}>
								<Typography variant="body">FAQ</Typography>
							</Link>
						</Box>
						<Box className="header__user-actions">
							<Button variant="buttonLight" size="small" color="secondary">
								<Typography variant="body">Log in</Typography>
							</Button>
							<Button variant="buttonDark" size="small" color="primary">
								<Typography variant="body" onClick={() => navigate('/MainApp')}>
									Sign up
								</Typography>
							</Button>
						</Box>
					</Box>
				</Container>
			</Box>
		</Slide>
	);
};

export default Header;
