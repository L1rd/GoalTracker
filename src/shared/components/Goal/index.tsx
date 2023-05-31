import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// MUI
import { Box, Button, IconButton, Typography } from '@mui/material';

// Utils
import { getPriority } from 'utils/functions/getPriority';

// Icons
import Delete from 'assets/icons/delete-icon.svg';

// Components
import DeleteGoalModal from 'components/MainApp/Pages/Goals/components/DeleteGoalModal';
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
	const [isShowDeleteGoalModal, setIsShowDeleteGoalModal] = useState(false);
	const { t } = useTranslation('mainApp');

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
					<IconButton className="goal__delete" onClick={() => setIsShowDeleteGoalModal(true)}>
						<img src={Delete} alt="delete" />
					</IconButton>
				</Box>
				<Box className="goal__parameters">
					<Typography variant="body">
						<span>{t('time')}</span>: {timeStart} – {timeEnd}{' '}
					</Typography>
					<Typography variant="body">
						<span>{t('status')}</span>: {status}
					</Typography>
					<Typography variant="body">
						<span>{t('category')}</span>: {category}
					</Typography>
				</Box>
				<Button variant="buttonLight" size="small" color="secondary" className="goal__view" onClick={setIsShow}>
					<Typography variant="smallDetails">{t('view-goal')}</Typography>
				</Button>
			</Box>
			<DeleteGoalModal
				isShow={isShowDeleteGoalModal}
				setIsShow={setIsShowDeleteGoalModal}
				name={title}
				elemDeleting="goal"
			/>
		</Box>
	);
};

export default Goal;
