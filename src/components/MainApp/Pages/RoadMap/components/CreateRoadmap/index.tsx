import { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs, { Dayjs } from 'dayjs';
import cx from 'classnames';
import { motion } from 'framer-motion';

// MUI
import { Alert, Box, Button, Snackbar, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Interfaces
import { RoadmapInterface } from 'utils/interfaces/roadmap';

// Hooks
import { useEnableEffect } from 'shared/hooks/useEnableEffect';

// Styles
import './style.scss';
import { GoalInterface } from 'utils/interfaces/goal';
import Goal from 'shared/components/Goal';
import { useDispatch } from 'react-redux';
import { DispatchType } from 'redux/store';
import { createRoadmap } from 'redux/goals-service/reducer';
import GoalsListModal from './components/GoalsListModal';

const CreateRoadmap: FC = () => {
	const { t } = useTranslation('mainApp');
	const dispatch: DispatchType = useDispatch();
	const { enableCloseEffect, handleCloseModal } = useEnableEffect(undefined, -1);
	const [goals, setGoals] = useState([]);
	const [isShowModal, setIsShowModal] = useState(false);
	const [isShowError, setIsShowError] = useState(false);
	const today = dayjs();
	const [roadmap, setRoadmap] = useState<RoadmapInterface>({
		title: '',
		createdAt: today.format('DD/MM/YYYY'),
		author: '',
		stackOfTechnology: '',
		goals,
	});

	const handleClosePage = () => {
		handleCloseModal();
		setRoadmap({
			title: '',
			createdAt: today.format('DD/MM/YYYY'),
			author: '',
			stackOfTechnology: '',
			goals: [],
		});
	};

	const handleChangeEndDate = (newValue: Dayjs | null) => {
		setRoadmap((prev: RoadmapInterface) => ({ ...prev, end: newValue?.format('DD/MM/YYYY') || '' }));
	};

	useEffect(() => {
		setRoadmap((prev: RoadmapInterface) => ({ ...prev, goals }));
	}, [goals]);

	const isButtonDisabled = useMemo(
		() =>
			!!roadmap.title &&
			!!roadmap.createdAt &&
			!!roadmap.author &&
			!!roadmap.stackOfTechnology &&
			roadmap.goals.length >= 2,
		[roadmap]
	);

	const handleSaveRoadmap = () => {
		dispatch(createRoadmap(roadmap));
		handleClosePage();
	};

	return (
		<motion.div
			initial={{ transform: 'translate(0, -220px)', opacity: 0 }}
			animate={{ transform: 'translate(0, 0)', opacity: 1 }}
			exit={{
				transform: 'translate(0, 220px)',
				opacity: 0,
			}}
		>
			<Box
				className={cx('create-roadmap', {
					close: enableCloseEffect,
				})}
			>
				<Box className="create-roadmap__title">
					<Typography variant="subtitle">Title:</Typography>
					<input
						type="text"
						placeholder="Learn React"
						value={roadmap.title}
						onChange={event =>
							setRoadmap((prev: RoadmapInterface) => ({
								...prev,
								title: event.target.value,
							}))
						}
					/>
				</Box>
				<Box className="create-roadmap__author-name flex">
					<Typography variant="subtitle">Author:</Typography>
					<input
						type="text"
						placeholder="Artem"
						value={roadmap.author}
						onChange={event =>
							setRoadmap((prev: RoadmapInterface) => ({
								...prev,
								author: event.target.value,
							}))
						}
					/>
				</Box>
				<Box className="create-roadmap__stack-of-technology flex">
					<Typography variant="subtitle">Stack Of Technology:</Typography>
					<input
						type="text"
						placeholder="Frontend"
						value={roadmap.stackOfTechnology}
						onChange={event =>
							setRoadmap((prev: RoadmapInterface) => ({
								...prev,
								stackOfTechnology: event.target.value,
							}))
						}
					/>
				</Box>
				<Box className="create-roadmap__date">
					<Typography variant="subtitle">Created at:</Typography>
					<DatePicker
						className="date"
						defaultValue={today}
						format="DD/MM/YYYY"
						onChange={handleChangeEndDate}
					/>
				</Box>
				{!!goals.length && (
					<Box className="create-roadmap__tasks">
						{goals.map((goal: GoalInterface) => (
							<Goal
								progress={100}
								title={goal.title}
								priority={goal.priority}
								status="In Progress"
								timeStart={goal.start}
								timeEnd={goal.end}
								category={goal.category}
								key={goal.title}
								sx={{
									filter: 'none !important',
									border: '1px solid #0d2569',
									width: '100% !important',
								}}
							/>
						))}
					</Box>
				)}
				<Button
					size="medium"
					color="primary"
					variant="buttonLight"
					className={cx('create-goal__add-task')}
					onClick={() => setIsShowModal(true)}
				>
					<Typography variant="body" className="goals__header-title">
						Add a goal
					</Typography>
				</Button>

				<Box className="create-goal__actions">
					<Button color="secondary" variant="buttonLight" size="small" onClick={handleClosePage}>
						<Typography variant="body">{t('cancel')}</Typography>
					</Button>
					<Button
						color="primary"
						variant="buttonDark"
						size="small"
						// onClick={handleCreateGoal}
						className={cx({
							isDisabled: !isButtonDisabled,
						})}
						disabled={!isButtonDisabled}
						onClick={handleSaveRoadmap}
					>
						<Typography variant="body">Save RoadMap</Typography>
					</Button>
				</Box>
			</Box>
			<GoalsListModal
				isShow={isShowModal}
				setIsShow={setIsShowModal}
				title="Select Goals For Roadmap"
				setRoadmapsGoals={setGoals}
				roadmapsGoals={goals}
			/>
			<Snackbar open={isShowError} autoHideDuration={4000} onClose={() => setIsShowError(false)}>
				<Alert onClose={() => setIsShowError(false)} severity="error" sx={{ width: '100%' }}>
					<Typography variant="subtitle">{t('goal-with-same-name')}</Typography>
				</Alert>
			</Snackbar>
		</motion.div>
	);
};

export default CreateRoadmap;
