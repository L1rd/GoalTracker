import { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs, { Dayjs } from 'dayjs';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

// MUI
import {
	Alert,
	Box,
	Button,
	FormControlLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	SelectChangeEvent,
	Snackbar,
	Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Interfaces
import { GoalInterface, GoalTask, SubGoal } from 'utils/interfaces/goal';

// Selectors
import { selectorGetCategories, selectorGetGoals } from 'redux/goals-service/selectors';

// Utils
import { getPriority } from 'utils/functions/getPriority';

// Acions
import { createGoal } from 'redux/goals-service/reducer';

// Hooks
import { useEnableEffect } from 'shared/hooks/useEnableEffect';

// Components
import { GoalFullTask } from 'shared/components/GoalFullTask';
import { SubGoalComponent } from 'shared/components/SubGoal';
import CreateGoalTaskModal from './CreateGoalTask';
import CreateSubGoal from './CreateSubGoal';

// Styles
import './style.scss';

const CreateGoal: FC = () => {
	const { t } = useTranslation('mainApp');
	const dispatch = useDispatch();
	const goals = useSelector(selectorGetGoals);
	const categories = useSelector(selectorGetCategories);
	const { enableCloseEffect, handleCloseModal } = useEnableEffect(undefined, -1);
	const navigate = useNavigate();
	const [isShowError, setIsShowError] = useState(false);
	const [tasks, setTasks] = useState<GoalTask[]>([]);
	const [priority, setPriority] = useState('4');
	const [category, setCategory] = useState('Personal');
	const [type, setType] = useState('Multi-step');
	const today = dayjs();
	const yesterday = dayjs().subtract(1, 'day');
	const [goal, setGoal] = useState<GoalInterface>({
		title: '',
		category,
		priority: +priority,
		start: yesterday.format('DD/MM/YYYY'),
		end: today.format('DD/MM/YYYY'),
		progress: 0,
		status: 'In Progress',
		tasks: [],
		subgoals: [],
		type,
	});

	const [expanded, setExpanded] = useState<string | false>(false);
	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	const [isShowCreateTaskModal, setIsShowCreateTaskModal] = useState(false);

	const handleChangePriority = (event: SelectChangeEvent) => {
		setPriority(event.target.value as string);
		setGoal((prev: GoalInterface) => ({ ...prev, priority: +event.target.value }));
	};

	const handleChangeCategory = (event: SelectChangeEvent) => {
		setCategory(event.target.value);
		setGoal((prev: GoalInterface) => ({ ...prev, category: event.target.value }));
	};

	const handleClosePage = () => {
		handleCloseModal();
		setTasks([]);
		setGoal({
			title: '',
			category,
			priority: +priority,
			start: yesterday.format('DD/MM/YYYY'),
			end: today.format('DD/MM/YYYY'),
			tasks: [],
			subgoals: [],
			type: '',
			progress: 0,
			status: 'In Progress',
		});
	};

	const handleCreateGoal = () => {
		if (goals.find((item: GoalInterface) => item.title === goal.title)) {
			setIsShowError(true);
		} else {
			dispatch(
				createGoal({
					title: goal.title,
					category: goal.category,
					priority: goal.priority,
					start: goal.start,
					end: goal.end,
					tasks: goal.tasks,
					subgoals: goal.subgoals,
					type: goal.type,
					progress: 0,
					status: 'In Progress',
				})
			);
			handleClosePage();
		}
	};

	const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
		setType((event.target as HTMLInputElement).value);
		setGoal((prev: GoalInterface) => ({ ...prev, type: event.target.value }));
	};

	const handleChangeStartDate = (newValue: Dayjs | null) => {
		setGoal((prev: GoalInterface) => ({ ...prev, start: newValue?.format('DD/MM/YYYY') || '' }));
	};

	const handleChangeEndDate = (newValue: Dayjs | null) => {
		setGoal((prev: GoalInterface) => ({ ...prev, end: newValue?.format('DD/MM/YYYY') || '' }));
	};

	useEffect(() => {
		setGoal((prev: GoalInterface) => ({ ...prev, tasks }));
	}, [tasks]);

	const isButtonDisabled = useMemo(
		() =>
			!!goal.title &&
			!!goal.category &&
			!!goal.priority &&
			!!goal.start &&
			!!goal.end &&
			(!!goal.tasks || !!goal.subgoals) &&
			(!!goal.tasks.length || !!goal.subgoals.length),
		[goal]
	);

	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<Box
							className={cx('create-goal', {
								close: enableCloseEffect,
							})}
						>
							<Box className="create-goal__title">
								<Box className="create-goal__title__goal-name flex">
									<Typography variant="subtitle">{t('goal-name')}:</Typography>
									<input
										type="text"
										placeholder="Reach level A1 in Spanish"
										value={goal.title}
										onChange={event =>
											setGoal((prev: GoalInterface) => ({
												...prev,
												title: event.target.value,
											}))
										}
									/>
								</Box>
								<Box className="create-goal__radio-type">
									<Typography variant="subtitle">{t('goal-type')}:</Typography>
									<RadioGroup
										defaultValue="Multi-step"
										name="radio-buttons-group"
										value={type}
										onChange={handleChangeType}
									>
										<FormControlLabel
											value="Simple"
											control={<Radio />}
											label={t('simple')}
											disabled={tasks.length !== 0 || goal.subgoals.length !== 0}
										/>
										<FormControlLabel
											value="Multi-step"
											control={<Radio />}
											label={t('multi-step')}
											disabled={tasks.length !== 0 || goal.subgoals.length !== 0}
										/>
									</RadioGroup>
								</Box>
								<Box className="create-goal__title__priority flex">
									<Typography variant="subtitle">{t('priority')}:</Typography>
									<Select
										value={priority}
										label="Priority"
										className="select"
										onChange={handleChangePriority}
									>
										<MenuItem value={1}>
											<Typography variant="body">
												{getPriority(1)}
												{t('lowest-priority')}
											</Typography>
										</MenuItem>
										<MenuItem value={2}>
											<Typography variant="body">
												{getPriority(2)} {t('medium-priority')}
											</Typography>
										</MenuItem>
										<MenuItem value={3}>
											<Typography variant="body">
												{getPriority(3)} {t('high-priority')}
											</Typography>
										</MenuItem>
										<MenuItem value={4}>
											<Typography variant="body">
												{getPriority(4)} {t('highest-priority')}
											</Typography>
										</MenuItem>
									</Select>
								</Box>
							</Box>
							<Box className="create-goal__date">
								<Box className="create-goal__date-start flex">
									<Typography variant="subtitle">{t('start-date')}:</Typography>
									<DatePicker
										className="date"
										defaultValue={yesterday}
										format="DD/MM/YYYY"
										onChange={handleChangeStartDate}
									/>
								</Box>
								<Box className="create-goal__date-end flex">
									<Typography variant="subtitle">{t('end-date')}:</Typography>
									<DatePicker
										className="date"
										defaultValue={today}
										format="DD/MM/YYYY"
										onChange={handleChangeEndDate}
									/>
								</Box>
							</Box>
							<Box className="create-goal__category">
								<Box className="create-goal__category-info">
									<Typography variant="subtitle">{t('category')}:</Typography>
									<Select
										value={category}
										label="Category"
										className="select"
										onChange={handleChangeCategory}
									>
										{categories.map(category => (
											<MenuItem value={category.title} key={category.title}>
												<Typography variant="body">{category.title}</Typography>
											</MenuItem>
										))}
									</Select>
								</Box>
							</Box>
							{!!tasks.length && (
								<Box className="create-goal__tasks">
									{tasks.map((item: GoalTask) => (
										<GoalFullTask title={item.title} time={item.time} key={item.title} />
									))}
								</Box>
							)}
							{!!goal.subgoals.length && (
								<Box className="create-goal__subgoals">
									{goal.subgoals.map((subGoal: SubGoal, index) => (
										<SubGoalComponent
											subGoal={subGoal}
											isExpanded={expanded === `panel${index + 1}`}
											handleChangeExpanded={handleChange(`panel${index + 1}`)}
										/>
									))}
								</Box>
							)}
							{type === 'Simple' ? (
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
							) : (
								<Button
									size="medium"
									color="primary"
									variant="buttonLight"
									className={cx('create-goal__add-task', {
										isDisabled: goal.title === '',
									})}
									onClick={() => navigate('CreateSubGoal')}
									disabled={goal.title === ''}
								>
									<Typography variant="body" className="goals__header-title">
										{t('add-a-subgoal')}
									</Typography>
								</Button>
							)}

							<Box className="create-goal__actions">
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
									<Typography variant="body">{t('save-goal')}</Typography>
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
								<Typography variant="subtitle">{t('goal-with-same-name')}</Typography>
							</Alert>
						</Snackbar>
					</>
				}
			/>
			<Route path="/CreateSubGoal/" element={<CreateSubGoal goal={goal} />} />
		</Routes>
	);
};

export default CreateGoal;
