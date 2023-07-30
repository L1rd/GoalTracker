/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector } from 'react-redux';
import { Dispatch, FC, SetStateAction } from 'react';
import ReactDom from 'react-dom';
import cx from 'classnames';

// MUI
import { Box, IconButton, Typography } from '@mui/material';

// Icons
import Close from 'assets/icons/close.svg';

// Hooks
import { useEnableEffect } from 'shared/hooks/useEnableEffect';

// Styles
import './style.scss';
import Goal from 'shared/components/Goal';
import { GoalInterface } from 'utils/interfaces/goal';
import { selectorGetGoals } from 'redux/goals-service/selectors';

// @ts-ignore
const containerEl = document.getElementById('portal-root');

interface GoalsListModalProps {
	isShow: boolean;
	setIsShow: (props: boolean) => void;
	title: string;
	setRoadmapsGoals: Dispatch<SetStateAction<any>>;
	roadmapsGoals: GoalInterface[];
}

const GoalsListModal: FC<GoalsListModalProps> = ({ isShow, setIsShow, title, roadmapsGoals, setRoadmapsGoals }) => {
	const { enableCloseEffect, handleCloseModal } = useEnableEffect(setIsShow);
	const goals = useSelector(selectorGetGoals);

	const handleAddGoalToList = (goal: GoalInterface) => {
		setRoadmapsGoals((prev: GoalInterface[]) => [...prev, goal]);
		handleCloseModal();
	};

	if (!isShow) {
		return null;
	}

	return ReactDom.createPortal(
		<Box className="goals-list-modal__wrapper">
			<Box
				className={cx('goals-list-modal', {
					close: enableCloseEffect,
				})}
			>
				<IconButton className="goals-list-modal__close-icon" onClick={handleCloseModal}>
					<img src={Close} alt="close" />
				</IconButton>
				<Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '10px' }}>
					{title}
				</Typography>
				<Box className="goals-list-modal__content">
					{goals
						.filter(goal => !roadmapsGoals.some(el => el.title === goal.title))
						.map((goal: GoalInterface) => (
							<Goal
								progress={goal.progress}
								title={goal.title}
								priority={goal.priority}
								status="In Progress"
								timeStart={goal.start}
								timeEnd={goal.end}
								category={goal.category}
								key={goal.title}
								onClick={() => handleAddGoalToList(goal)}
								sx={{
									filter: 'none !important',
									border: '1px solid #0d2569',
									cursor: 'pointer',
									width: '100%',
								}}
							/>
						))}
				</Box>
			</Box>
		</Box>,
		// @ts-ignore
		containerEl
	);
};

export default GoalsListModal;
