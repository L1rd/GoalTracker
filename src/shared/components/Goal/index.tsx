import { Box, Button, Typography } from '@mui/material';
import Delete from 'assets/icons/delete-icon.svg';
import HighPriority from 'assets/icons/high-priority.svg';
import HighestPriority from 'assets/icons/highest-priority.svg';
import LowestPriority from 'assets/icons/lowest-priority.svg';
import MediumPriority from 'assets/icons/medium-priority.svg';
import CircularProgressWithLabel from '../CircularProgressWithLabel';
import './style.scss';

interface GoalProps {
	progress: number;
	title: string;
	priority: number;
	status: string;
	timeStart: string;
	timeEnd: string;
	category: string;
}

const Goal = ({ progress, title, priority, status, timeStart, timeEnd, category }: GoalProps) => {
	const getPriority = (priority: number) => {
		switch (priority) {
			case 5:
				return <img src={HighestPriority} alt="highest priority" />;
			case 4:
				return <img src={HighPriority} alt="high priority" />;
			case 3:
				return <img src={MediumPriority} alt="medium priority" />;
			case 2:
				return <img src={HighestPriority} alt="low priority" />;
			case 1:
				return <img src={LowestPriority} alt="lowest priority" />;

			default:
				break;
		}

		return null;
	};

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
					<img src={Delete} alt="delete" className="goal__delete" />
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
				<Button variant="buttonLight" size="small" color="secondary" className="goal__view">
					<Typography variant="smallDetails">View goal</Typography>
				</Button>
			</Box>
		</Box>
	);
};

export default Goal;
