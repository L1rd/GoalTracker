import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import cx from 'classnames';

// Selectors
import { selectorGetCurrentPage } from 'redux/goals-service/selectors';

// Ations
import { changePage } from 'redux/goals-service/reducer';

// MUI
import { Box, Typography, useTheme } from '@mui/material';

// Icons
import Avatar from 'assets/icons/avatar.svg';
import Calendar from 'assets/icons/calendar.svg';
import Dashboard from 'assets/icons/dashboard.svg';
import Goals from 'assets/icons/goals.svg';
import Team from 'assets/icons/team.svg';

// Styles
import './style.scss';

const Navigation = () => {
	const theme = useTheme();
	const currentPage = useSelector(selectorGetCurrentPage);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const param = useParams();

	const PAGES_LIST = [
		{
			icon: Dashboard,
			title: 'Dashboard',
			path: 'Dashboard',
		},
		{
			icon: Team,
			title: 'My team',
			path: '',
		},
		{
			icon: Goals,
			title: 'Goals',
			path: 'Goals',
		},
		{
			icon: Calendar,
			title: 'Calendar',
			path: '',
		},
	];

	const handleChangeCurrentPage = (page: string) => dispatch(changePage(page));

	useEffect(() => {
		if (param['*']) dispatch(changePage(param['*']));
	}, [param['*']]);

	return (
		<Box className="navigation">
			<Box className="navigation__header">
				<Box>
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
						choosen: currentPage === 'Add new goal',
					})}
					sx={{ color: `${theme.palette.darkYellow}`, marginBottom: '55px' }}
					onClick={() => navigate('Goals/CreateGoal')}
				>
					Add new goal
				</Typography>
				<Box className="navigation__pages">
					{PAGES_LIST.map(page => (
						<Box
							className={cx('navigation__link', {
								choosen: currentPage?.includes(page.title),
							})}
							onClick={() => navigate(page.path)}
							key={page.title}
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
							choosen: currentPage === 'Settings',
						})}
						sx={{ color: `${theme.palette.lightYellow}` }}
						onClick={() => handleChangeCurrentPage('Settings')}
					>
						Settings
					</Typography>
					<Typography
						variant="subtitle"
						className={cx('navigation__log-out', {
							choosen: currentPage === 'Log out',
						})}
						sx={{ color: `${theme.palette.lightYellow}` }}
						onClick={() => navigate('/GoalTracker/')}
					>
						Log out
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Navigation;
