import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import Avatar from 'assets/icons/avatar.svg';
import Calendar from 'assets/icons/calendar.svg';
import Dashboard from 'assets/icons/dashboard.svg';
import Goals from 'assets/icons/goals.svg';
import Team from 'assets/icons/team.svg';
import cx from 'classnames';
import './style.scss';

const Navigation = () => {
	const theme = useTheme();
	const [choosenAction, setChoosenAction] = useState('Dashboard');
	const navigate = useNavigate();

	const PAGES_LIST = [
		{
			icon: Dashboard,
			title: 'Dashboard',
			path: '',
		},
		{
			icon: Team,
			title: 'My team',
			path: '',
		},
		{
			icon: Goals,
			title: 'Goals',
			path: '',
		},
		{
			icon: Calendar,
			title: 'Calendar',
			path: '',
		},
	];

	return (
		<Box className="navigation">
			<Box className="navigation__header">
				<Box
					sx={{
						width: '64px',
						height: '64px',
						borderRadius: '50px',
						background: '#787878',
					}}
				>
					<img src={Avatar} alt="avatar" />
				</Box>
				<Box className="navigation__user-info">
					<Typography variant="body" sx={{ color: `${theme.palette.darkYellow}` }}>
						Alice Goodman
					</Typography>
					<Typography variant="smallDetailsSecondBold" sx={{ color: `${theme.palette.lightYellow}` }}>
						alicegoodman@gmail.com
					</Typography>
				</Box>
			</Box>
			<Box className="navigation__actions" sx={{ overflow: 'hidden' }}>
				<Typography
					variant="subtitle"
					className={cx('navigation__add-goal', {
						choosen: choosenAction === 'Add new goal',
					})}
					sx={{ color: `${theme.palette.darkYellow}`, marginBottom: '55px' }}
					onClick={() => setChoosenAction('Add new goal')}
				>
					Add new goal
				</Typography>
				<Box className="navigation__pages">
					{PAGES_LIST.map(page => (
						<Box
							className={cx('navigation__link', {
								choosen: choosenAction === page.title,
							})}
							onClick={() => setChoosenAction(page.title)}
						>
							<img src={page.icon} alt={page.title} />
							<Typography variant="subtitle" sx={{ color: `${theme.palette.lightYellow}` }}>
								{page.title}
							</Typography>
						</Box>
					))}
				</Box>
				<Box className="navigation__actions-user">
					<Typography
						variant="subtitle"
						className={cx('navigation__settings', {
							choosen: choosenAction === 'Settings',
						})}
						sx={{ color: `${theme.palette.lightYellow}` }}
						onClick={() => setChoosenAction('Settings')}
					>
						Settings
					</Typography>
					<Typography
						variant="subtitle"
						className={cx('navigation__log-out', {
							choosen: choosenAction === 'Log out',
						})}
						sx={{ color: `${theme.palette.lightYellow}` }}
						onClick={() => {
							setChoosenAction('Log out');
							navigate('/');
						}}
					>
						Log out
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Navigation;
