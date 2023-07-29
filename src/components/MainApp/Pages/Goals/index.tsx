import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import cx from 'classnames';
import { motion } from 'framer-motion';

// MUI
import { Box, Button, Typography } from '@mui/material';

// Types
import { GoalInterface } from 'utils/interfaces/goal';

// Selectors
import { selectorGetCategories, selectorGetGoals, selectorGetStatuses } from 'redux/goals-service/selectors';

// Actions
import { createCategory, deleteCategory, updateCategory, updateStatus } from 'redux/goals-service/reducer';

// Icons
import AddCategory from 'assets/icons/add-category.svg';
import EditCategory from 'assets/icons/edit-category.svg';
import EditCategoryAccept from 'assets/icons/edit-category-accept.svg';
import RemoveCategory from 'assets/icons/remove-category.svg';
import EmptyStateIcon from 'assets/icons/empty-goal-state.png';

// Hooks
import { useEnableEffect } from 'shared/hooks/useEnableEffect';

// Components
import Goal from 'shared/components/Goal';
import AddCategoryModal from './components/AddCategoryModal';
import CreateGoal from './components/CreateGoal';
import MainGoal from './components/MainGoal';

// Styles
import './style.scss';

const Goals = () => {
	const { t } = useTranslation('mainApp');
	const dispatch = useDispatch();
	const goals = useSelector(selectorGetGoals);
	const statuses = useSelector(selectorGetStatuses);
	const categories = useSelector(selectorGetCategories);
	const navigate = useNavigate();
	const [isCheck, setIsCheck] = useState(false);
	const [isShowModal, setIsShowModal] = useState(false);
	const [isShowError, setIsShowError] = useState(false);
	const param = useParams();
	const [isChoosen, setIsChoosen] = useState({ category: 'All', status: 'in-progress' });
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [currentGoal, setCurrentGoal] = useState<any>();
	const { enableCloseEffect, handleCloseModal } = useEnableEffect(setIsCheck);

	const handleEditCategory = () => {
		if (!isCheck) {
			setIsCheck(true);
		} else {
			handleCloseModal();
		}
	};

	const handleAddCustomCategory = (title: string) => {
		if (categories.find(category => category.title === title)) {
			setIsShowError(true);
		} else {
			dispatch(createCategory({ title, isCustom: true, count: 0 }));
		}
	};

	const handleDeleteCategory = (title: string) => {
		if (!goals.find(goal => goal.category === title)) {
			setIsChoosen(prev => ({ ...prev, category: 'All' }));
			dispatch(deleteCategory(title));
		}
	};

	useEffect(() => {
		if (goals) {
			const arr = categories.map(category => ({
				...category,
				count: goals.filter(goal => goal.category === category.title).length,
			}));
			dispatch(updateCategory(arr));
		}
		if (statuses) {
			const arr = statuses.map(status => ({
				...status,
				count: goals.filter(goal => goal.status === status.title).length,
			}));
			dispatch(updateStatus(arr));
		}
	}, [goals]);

	const getTitle = useMemo(() => {
		switch (param['*']) {
			case 'Goal':
				return (
					<Typography variant="h2" className="goals__header-title">
						{t('goal-overview')}
					</Typography>
				);
			case 'CreateGoal':
				return (
					<Typography variant="h2" className="goals__header-title">
						{t('set-a-goal')}
					</Typography>
				);

			case 'CreateGoal/CreateSubGoal':
				return (
					<Typography variant="h2" className="goals__header-title">
						{t('set-a-subgoal')}
					</Typography>
				);

			default:
				return (
					<>
						<Typography variant="h2" className="goals__header-title">
							{t('my-goals')}
						</Typography>
						<Button
							variant="buttonDark"
							color="primary"
							size="medium"
							onClick={() => navigate('CreateGoal')}
						>
							<Typography variant="body" className="goals__header-title">
								{t('create-goal')}
							</Typography>
						</Button>
					</>
				);
		}
	}, [param]);

	const handleShowGoal = (goal: GoalInterface) => {
		navigate('Goal');
		setCurrentGoal(goal);
	};

	return (
		<motion.div
			className="goals"
			initial={{ transform: 'translate(0, -220px)', opacity: 0 }}
			animate={{ transform: 'translate(0, 0)', opacity: 1 }}
			exit={{
				transform: 'translate(0, 220px)',
				opacity: 0,
			}}
		>
			<Box className="goals__header">{getTitle}</Box>
			<Routes>
				<Route
					path="/"
					element={
						<Box className="goals__main-info">
							<Box className="goals__filter">
								<Box className="goals__categories">
									<Box className="goals__categories-title">
										<Typography variant="subtitle">{t('category')}</Typography>
										<Box onClick={handleEditCategory}>
											<img
												src={!isCheck ? EditCategory : EditCategoryAccept}
												alt="edit-categories"
											/>
										</Box>
									</Box>
									<Box className="goals__category-list">
										<Box className="categories">
											<Box
												onClick={() => setIsChoosen(prev => ({ ...prev, category: 'All' }))}
												className={cx('goals__category', {
													choosen: isChoosen.category === 'All',
												})}
											>
												<Typography variant="body">All</Typography>
												<Box className="goals__category-count">{goals.length}</Box>
											</Box>
											{categories.map(category => (
												<Box
													onClick={() =>
														setIsChoosen(prev => ({ ...prev, category: category.title }))
													}
													className={cx('goals__category', {
														choosen: isChoosen.category === category.title,
													})}
													key={category.title}
												>
													<Typography variant="body">{category.title}</Typography>
													{!category?.isCustom && (
														<Box className="goals__category-count">{category.count}</Box>
													)}
													{isCheck && category?.isCustom && (
														<Box onClick={() => handleDeleteCategory(category.title)}>
															<img src={RemoveCategory} alt="remove" />
														</Box>
													)}
													{category?.isCustom && !isCheck && (
														<Box className="goals__category-count">{category.count}</Box>
													)}
												</Box>
											))}
										</Box>
										{isCheck && (
											<Box
												className={cx('goals__category-add', {
													hide: enableCloseEffect,
												})}
												onClick={() => setIsShowModal(true)}
											>
												<Typography variant="body">{t('add-category')}</Typography>
												<img src={AddCategory} alt="add" />
											</Box>
										)}
										<AddCategoryModal
											isShow={isShowModal}
											setIsShow={setIsShowModal}
											handleAddCustomCategory={handleAddCustomCategory}
											isShowError={isShowError}
											setIsShowError={setIsShowError}
										/>
									</Box>
								</Box>
								<Box className="goals__statuses">
									<Box className="goals__statuses-title">
										<Typography variant="subtitle">{t('status')}</Typography>
									</Box>
									<Box className="goals__status-list">
										{statuses.map(status => (
											<Box
												onClick={() =>
													setIsChoosen(prev => ({ ...prev, status: t(status.title) }))
												}
												className={cx('goals__status', {
													choosen: t(isChoosen.status) === t(status.title),
												})}
												key={status.title}
											>
												<Typography variant="body">{t(status.title)}</Typography>
												<Box className="goals__category-count">{status.count}</Box>
											</Box>
										))}
									</Box>
								</Box>
							</Box>

							{goals.length ? (
								<Box className="goals__list">
									{goals
										.filter(
											goal =>
												(goal.category === isChoosen.category ||
													isChoosen.category === 'All') &&
												t(goal.status) === t(isChoosen.status)
										)
										.map((goal: GoalInterface) => (
											<Goal
												progress={0}
												title={goal.title}
												priority={goal.priority}
												status="In Progress"
												timeStart={goal.start}
												timeEnd={goal.end}
												category={goal.category}
												setIsShow={() => handleShowGoal(goal)}
												key={goal.title}
											/>
										))}
								</Box>
							) : (
								<Box className="goals__list-empty">
									<img src={EmptyStateIcon} alt="empty state icon" />
									<Typography variant="body">{t('goals-empty-state')}</Typography>
								</Box>
							)}
						</Box>
					}
				/>
				<Route path="/Goal/" element={<MainGoal goal={currentGoal} />} />
				<Route path="/CreateGoal/*" element={<CreateGoal />} />
			</Routes>
		</motion.div>
	);
};

export default Goals;
