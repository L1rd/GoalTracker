import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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

// Components
import LogOutModal from './LogOutModal';

// Styles
import './style.scss';

const Navigation = () => {
	const { t } = useTranslation('mainApp');
	const [isShowLogOutModal, setIsShowLogOutModal] = useState(false);
	const theme = useTheme();
	const currentPage = useSelector(selectorGetCurrentPage);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const param = useParams();

	const PAGES_LIST = [
		{
			icon: Dashboard,
			title: 'dashboard',
			path: 'Dashboard',
		},
		{
			icon: Team,
			title: 'my-teams',
			path: 'My Teams',
		},
		{
			icon: Goals,
			title: 'goals',
			path: 'Goals',
		},
		{
			icon: Goals,
			title: 'RoadMaps',
			path: 'roadMap',
		},
		{
			icon: Calendar,
			title: 'calendar',
			path: 'Calendar',
		},
		{
			icon: Goals,
			title: 'subscription-plans',
			path: 'Subscription',
		},
	];

	const handleChangeCurrentPage = (page: string) => dispatch(changePage(page));

	const handleOpenSettings = () => {
		navigate('Settings');
		handleChangeCurrentPage('Settings');
	};

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
					{t('add-new-goal')}
				</Typography>
				<Box className="navigation__pages">
					{PAGES_LIST.map(page => (
						<Box
							className={cx('navigation__link', {
								choosen: currentPage?.includes(page.path),
							})}
							onClick={() => navigate(page.path)}
							key={page.title}
						>
							<img src={page.icon} alt={page.title} />
							<Typography variant="subtitle" sx={{ color: `${theme.palette.lightYellow}` }}>
								{t(page.title)}
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
						onClick={handleOpenSettings}
					>
						{t('settings')}
					</Typography>
					<Typography
						variant="subtitle"
						className={cx('navigation__log-out', {
							choosen: currentPage === 'Log out',
						})}
						sx={{ color: `${theme.palette.lightYellow}` }}
						onClick={() => setIsShowLogOutModal(true)}
					>
						{t('log-out')}
					</Typography>
				</Box>
			</Box>
			<LogOutModal isShow={isShowLogOutModal} setIsShow={setIsShowLogOutModal} />
		</Box>
	);
};

export default Navigation;
