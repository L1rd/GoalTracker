import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';

// MUI
import { Box, Checkbox, IconButton, Menu, MenuItem, Typography } from '@mui/material';

// Icons
import Dots from 'assets/icons/dots.svg';

// Styles
import './style.scss';

interface GoalFullTaskProps {
	title?: string;
	time?: string;
}

export const GoalFullTask: FC<GoalFullTaskProps> = ({ title, time }) => {
	const { t } = useTranslation('mainApp');
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [taskCompeted, setTaskCompeted] = useState(false);
	const open = Boolean(anchorEl);

	const handleCompleteTask = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTaskCompeted(event.target.checked);
	};
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box className="goal-full-task">
			<Box
				className={cx('goal-full-task__sides', {
					checked: taskCompeted,
				})}
			>
				<Typography variant="smallDetails" className="goal-full-task__time">
					{time}
				</Typography>
				<Typography variant="body" className="goal-full-task__title">
					{title}
				</Typography>
			</Box>
			<Box className="goal-full-task__sides">
				<Checkbox
					sx={{
						width: '32px',
						height: '32px',
						background: 'none',
						'& .MuiSvgIcon-root': { fontSize: '30px', color: '#0B215C' },
					}}
					value={taskCompeted}
					onChange={handleCompleteTask}
				/>
				<IconButton onClick={handleClick}>
					<img src={Dots} alt="Dots" />
				</IconButton>
				<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
					<MenuItem onClick={handleClose}>{t('edit')}</MenuItem>
					<MenuItem onClick={handleClose}>{t('delete')}</MenuItem>
				</Menu>
			</Box>
		</Box>
	);
};
