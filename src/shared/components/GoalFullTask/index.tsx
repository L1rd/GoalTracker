import { useState } from 'react';
import { Box, Checkbox, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import Dots from 'assets/icons/dots.svg';
import './style.scss';

export const GoalFullTask = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box className="goal-full-task">
			<Box className="goal-full-task__sides">
				<Typography variant="smallDetails" className="goal-full-task__time">
					12:00
				</Typography>
				<Typography variant="body" className="goal-full-task__title">
					Create cards with letters
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
				/>
				<IconButton onClick={handleClick}>
					<img src={Dots} alt="Dots" />
				</IconButton>
				<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
					<MenuItem onClick={handleClose}>Edit</MenuItem>
					<MenuItem onClick={handleClose}>Delete</MenuItem>
				</Menu>
			</Box>
		</Box>
	);
};
