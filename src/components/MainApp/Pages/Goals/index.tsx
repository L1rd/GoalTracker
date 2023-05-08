import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import AddCategory from 'assets/icons/add-category.svg';
import EditCategory from 'assets/icons/edit-category.svg';
import EditCategoryAccept from 'assets/icons/edit-category-accept.svg';
import RemoveCategory from 'assets/icons/remove-category.svg';
import cx from 'classnames';
import { motion } from 'framer-motion';
import Goal from 'shared/components/Goal';
import { useEnableEffect } from 'shared/hooks/useEnableEffect';
import AddCategoryModal from './components/AddCategoryModal';
import MainGoal from './components/MainGoal';
import './style.scss';

const CATEGORIES = [
	{
		title: 'All',
		isCustom: false,
		count: 5,
	},
	{
		title: 'Personal',
		isCustom: false,
		count: 3,
	},
	{
		title: 'Home',
		isCustom: false,
		count: 1,
	},
	{
		title: 'Work',
		isCustom: false,
		count: 1,
	},
];

const STATUSES = [
	{
		title: 'Complete',
		count: 3,
	},
	{
		title: 'In progress',
		count: 2,
	},
	{
		title: 'On hold',
		count: 0,
	},
	{
		title: 'Timed out',
		count: 0,
	},
];

const Goals = () => {
	const [isCheck, setIsCheck] = useState(false);
	const [categories, setCategories] = useState(CATEGORIES);
	const [isShowModal, setIsShowModal] = useState(false);
	const [isShowGoal, setIsShowGoal] = useState(false);
	const [isShowError, setIsShowError] = useState(false);
	const [isChoosen, setIsChoosen] = useState({ category: 'All', status: 'In progress' });
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
			setCategories(prev => [
				...prev,
				{
					title,
					isCustom: true,
					count: 5,
				},
			]);
		}
	};

	const handleDeleteCategory = (title: string) => {
		setCategories(prev => prev.filter(category => category.title !== title));
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
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1 }}
			// exit={{
			// 	opacity: 0,
			// }}
		>
			<Box className="goals__header">
				{!isShowGoal ? (
					<>
						<Typography variant="h2" className="goals__header-title">
							My goals
						</Typography>
						<Button variant="buttonDark" color="primary" size="medium">
							<Typography variant="body" className="goals__header-title">
								Create goal
							</Typography>
						</Button>
					</>
				) : (
					<Typography variant="h2" className="goals__header-title">
						Goal overview
					</Typography>
				)}
			</Box>
			{!isShowGoal && (
				<Box className="goals__main-info">
					<Box className="goals__filter">
						<Box className="goals__categories">
							<Box className="goals__categories-title">
								<Typography variant="subtitle">Category</Typography>
								<Box onClick={handleEditCategory}>
									<img src={!isCheck ? EditCategory : EditCategoryAccept} alt="edit-categories" />
								</Box>
							</Box>
							<Box className="goals__category-list">
								<Box className="categories">
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
										<Typography variant="body">Add category</Typography>
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
								<Typography variant="subtitle">Status</Typography>
							</Box>
							<Box className="goals__status-list">
								{STATUSES.map(status => (
									<Box
										onClick={() => setIsChoosen(prev => ({ ...prev, status: status.title }))}
										className={cx('goals__status', {
											choosen: isChoosen.status === status.title,
										})}
										key={status.title}
									>
										<Typography variant="body">{status.title}</Typography>
										<Box className="goals__category-count">{status.count}</Box>
									</Box>
								))}
							</Box>
						</Box>
					</Box>
					<Box className="goals__list">
						<Goal
							progress={79}
							title="Reach level A1 in Sp..."
							priority={5}
							status="In Progress"
							timeStart="18.02.2023"
							timeEnd="18.04.2023"
							category="Personal"
							setIsShow={setIsShowGoal}
						/>
						<Goal
							progress={79}
							title="Reach level A1 in Sp..."
							priority={5}
							status="In Progress"
							timeStart="18.02.2023"
							timeEnd="18.04.2023"
							category="Personal"
							setIsShow={setIsShowGoal}
						/>
						<Goal
							progress={79}
							title="Reach level A1 in Sp..."
							priority={5}
							status="In Progress"
							timeStart="18.02.2023"
							timeEnd="18.04.2023"
							category="Personal"
							setIsShow={setIsShowGoal}
						/>
						<Goal
							progress={79}
							title="Reach level A1 in Sp..."
							priority={5}
							status="In Progress"
							timeStart="18.02.2023"
							timeEnd="18.04.2023"
							category="Personal"
							setIsShow={setIsShowGoal}
						/>
						<Goal
							progress={79}
							title="Reach level A1 in Sp..."
							priority={5}
							status="In Progress"
							timeStart="18.02.2023"
							timeEnd="18.04.2023"
							category="Personal"
							setIsShow={setIsShowGoal}
						/>
						<Goal
							progress={79}
							title="Reach level A1 in Sp..."
							priority={5}
							status="In Progress"
							timeStart="18.02.2023"
							timeEnd="18.04.2023"
							category="Personal"
							setIsShow={setIsShowGoal}
						/>
					</Box>
				</Box>
			)}
			<MainGoal isShown={isShowGoal} setIsShown={setIsShowGoal} />
		</motion.div>
	);
};

export default Goals;
