import { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import dayjs, { Dayjs } from 'dayjs';

// Hooks
import { useEnableEffect } from 'shared/hooks/useEnableEffect';

// MUI
import { Alert, Box, Button, Snackbar, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

// Types
import { GoalInterface, GoalTask, SubGoal } from 'utils/interfaces/goal';

// Components
import { GoalFullTask } from 'shared/components/GoalFullTask';
import CreateGoalTaskModal from '../CreateGoalTask';

// Styles
import './style.scss';

interface CreateSubGoalProps {
	goal: GoalInterface;
}

const CreateSubGoal: FC<CreateSubGoalProps> = ({ goal }) => {
	const { t } = useTranslation('mainApp');
	const [isShowCreateTaskModal, setIsShowCreateTaskModal] = useState(false);
	const { enableCloseEffect, handleCloseModal } = useEnableEffect(undefined, -1);
	const [isShowError, setIsShowError] = useState(false);
	const today = dayjs();
	const yesterday = dayjs().subtract(1, 'day');
	const [subGoal, setSubGoal] = useState<SubGoal>({
		title: '',
		start: yesterday.format('DD/MM/YYYY'),
		end: today.format('DD/MM/YYYY'),
		progress: 0,
		tasks: [],
	});
	const [tasks, setTasks] = useState<GoalTask[]>([]);

	const handleChangeStartDate = (newValue: Dayjs | null) => {
		setSubGoal(prev => ({ ...prev, start: newValue?.format('DD/MM/YYYY') || '' }));
	};

	const handleChangeEndDate = (newValue: Dayjs | null) => {
		setSubGoal(prev => ({ ...prev, end: newValue?.format('DD/MM/YYYY') || '' }));
	};

	const handleClosePage = () => {
		handleCloseModal();
		setTasks([]);
		setSubGoal({
			title: '',
			start: yesterday.format('DD/MM/YYYY'),
			end: today.format('DD/MM/YYYY'),
			tasks: [],
			progress: 0,
		});
	};

	useEffect(() => {
		setSubGoal(prev => ({ ...prev, tasks }));
	}, [tasks]);

	const handleCreateGoal = () => {
		if (goal.subgoals.find((item: SubGoal) => item.title === subGoal.title)) {
			setIsShowError(true);
		} else {
			goal.subgoals = [
				...goal.subgoals,
				{
					title: subGoal.title,
					start: subGoal.start,
					end: subGoal.end,
					tasks,
					progress: 0,
				},
			];
		}
		handleClosePage();
	};

	const isButtonDisabled = useMemo(
		() => !!subGoal.title && !!subGoal.start && !!subGoal.end && !!subGoal.tasks.length,
		[subGoal]
	);

	return (
		<>
			<Box
				className={cx('create-subgoal', {
					close: enableCloseEffect,
				})}
			>
				<Box className="create-subgoal__header">
					<Typography variant="subtitle">{t('goal-name')}:</Typography>
					<Typography variant="h4">{goal.title}</Typography>
				</Box>

				<Box className="create-subgoal__title">
					<Typography variant="subtitle">{t('subgoal-name')}:</Typography>
					<input
						type="text"
						placeholder="Reach level A1 in Spanish"
						onChange={event => setSubGoal(prev => ({ ...prev, title: event.target.value }))}
					/>
				</Box>
				<Box className="create-subgoal__date">
					<Box className="create-subgoal__date-start flex">
						<Typography variant="subtitle">{t('start-date')}:</Typography>
						<DatePicker
							className="date"
							defaultValue={yesterday}
							format="DD/MM/YYYY"
							onChange={handleChangeStartDate}
						/>
					</Box>
					<Box className="create-subgoal__date-end flex">
						<Typography variant="subtitle">{t('end-date')}:</Typography>
						<DatePicker
							className="date"
							defaultValue={today}
							format="DD/MM/YYYY"
							onChange={handleChangeEndDate}
						/>
					</Box>
				</Box>
				{!!tasks.length && (
					<Box className="create-subgoal__tasks">
						{tasks.map((item: GoalTask) => (
							<GoalFullTask title={item.title} time={item.time} key={item.title} />
						))}
					</Box>
				)}
				<Button
					size="medium"
					color="primary"
					variant="buttonLight"
					className="create-goal__add-task"
					onClick={() => setIsShowCreateTaskModal(true)}
				>
					<Typography variant="body" className="goals__header-title">
						{t('add-a-task')}
					</Typography>
				</Button>
				<Box className="create-subgoal__actions">
					<Button color="secondary" variant="buttonLight" size="small" onClick={handleClosePage}>
						<Typography variant="body">{t('cancel')}</Typography>
					</Button>
					<Button
						color="primary"
						variant="buttonDark"
						size="small"
						onClick={handleCreateGoal}
						className={cx({
							isDisabled: !isButtonDisabled,
						})}
						disabled={!isButtonDisabled}
					>
						<Typography variant="body">{t('save-subgoal')}</Typography>
					</Button>
				</Box>
				<CreateGoalTaskModal
					isShow={isShowCreateTaskModal}
					setIsShow={setIsShowCreateTaskModal}
					setTask={setTasks}
					tasks={tasks}
				/>
			</Box>
			<Snackbar open={isShowError} autoHideDuration={4000} onClose={() => setIsShowError(false)}>
				<Alert onClose={() => setIsShowError(false)} severity="error" sx={{ width: '100%' }}>
					<Typography variant="subtitle">{t('subgoal-with-same-name')}</Typography>
				</Alert>
			</Snackbar>
		</>
	);
};

export default CreateSubGoal;
