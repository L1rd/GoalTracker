import { useDispatch } from 'react-redux';

// MUI
import { Box, Button, IconButton, Typography } from '@mui/material';

// Actions
import { deleteGoal } from 'redux/goals-service/reducer';

// Utils
import { getPriority } from 'utils/functions/getPriority';

// Icons
import Delete from 'assets/icons/delete-icon.svg';

// Components
import CircularProgressWithLabel from '../CircularProgressWithLabel';

// Styles
import './style.scss';

interface GoalProps {
	progress: number;
	title: string;
	priority: number;
	status: string;
	timeStart: string;
	timeEnd: string;
	category: string;
	setIsShow?: () => void;
}

const Goal = ({ progress, title, priority, status, timeStart, timeEnd, category, setIsShow }: GoalProps) => {
	const dispatch = useDispatch();

	return (
		<Box className="goal">
			<Box className="goal__progress">
				<CircularProgressWithLabel value={progress} />
			</Box>
			<Box className="goal__info">
				<Box className="goal__header">
					<Box className="goal__header-title">
						{getPriority(priority)}
						<Typography variant="h4">{title}</Typography>
					</Box>
					<IconButton className="goal__delete" onClick={() => dispatch(deleteGoal(title))}>
						<img src={Delete} alt="delete" />
					</IconButton>
				</Box>
				<Box className="goal__parameters">
					<Typography variant="body">
						<span>Time</span>: {timeStart} – {timeEnd}{' '}
					</Typography>
					<Typography variant="body">
						<span>Status</span>: {status}
					</Typography>
					<Typography variant="body">
						<span>Category</span>: {category}
					</Typography>
				</Box>
				<Button variant="buttonLight" size="small" color="secondary" className="goal__view" onClick={setIsShow}>
					<Typography variant="smallDetails">View goal</Typography>
				</Button>
			</Box>
		</Box>
	);
};

export default Goal;
