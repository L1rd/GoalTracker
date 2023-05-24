import { FC, useState } from 'react';
import cx from 'classnames';

// MUI
import { Box, Button, Typography } from '@mui/material';

// Utils
import { getPriority } from 'utils/functions/getPriority';

// Types
import { GoalInterface, GoalTask, SubGoal } from 'utils/interfaces/goal';

// Hooks
import { useEnableEffect } from 'shared/hooks/useEnableEffect';

// Components
import CircularProgressWithLabel from 'shared/components/CircularProgressWithLabel';
import { SubGoalComponent } from 'shared/components/SubGoal';
import { GoalFullTask } from 'shared/components/GoalFullTask';

// Styles
import './style.scss';

interface MainGoalProps {
	goal: GoalInterface;
}

const MainGoal: FC<MainGoalProps> = ({ goal }) => {
	const { enableCloseEffect, handleCloseModal } = useEnableEffect(undefined, -1);
	const [expanded, setExpanded] = useState<string | false>(false);
	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Box
			className={cx('main-goal', {
				close: enableCloseEffect,
			})}
		>
			<Box className="main-goal__global-info">
				<Box className="main-goal__row">
					<Box className="main-goal__progress">
						<CircularProgressWithLabel value={goal.progress} />
					</Box>
					<Box className="main-goal__info">
						<Box className="main-goal__title">
							{getPriority(goal.priority)}
							<Typography variant="h4">{goal.title}</Typography>
						</Box>
						<Box className="main-goal__columns">
							<Box className="main-goal__date">
								<Typography className="main-goal__date-info" variant="body">
									<span className="first-info">Start: </span>
									{goal.start}
								</Typography>
								<Typography className="main-goal__date-info" variant="body">
									<span className="first-info">End: </span>
									{goal.end}
								</Typography>
							</Box>
							<Box className="main-goal__add">
								<Typography className="main-goal__add-info" variant="body">
									<span className="first-info">Status: </span>
									{goal.status}
								</Typography>
								<Typography className="main-goal__add-info" variant="body">
									<span className="first-info">Category: </span>
									{goal.category}
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			{goal.type === 'Simple' ? (
				<Box className="main-goal__tasks">
					{goal.tasks.map((task: GoalTask) => (
						<GoalFullTask title={task.title} time={task.time} key={task.title} />
					))}
				</Box>
			) : (
				<Box className="main-goal__sub-goals">
					{goal.subgoals.map((subGoal: SubGoal, index) => (
						<SubGoalComponent
							subGoal={subGoal}
							isExpanded={expanded === `panel${index + 1}`}
							handleChangeExpanded={handleChange(`panel${index + 1}`)}
						/>
					))}
				</Box>
			)}

			<Box className="main-goal__actions">
				<Button color="secondary" variant="buttonLight" size="small" onClick={handleCloseModal}>
					<Typography variant="body">Go Back</Typography>
				</Button>
				<Button color="primary" variant="buttonDark" size="small">
					<Typography variant="body">Edit</Typography>
				</Button>
			</Box>
		</Box>
	);
};

export default MainGoal;
