/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Typography } from '@mui/material';
import { ClickAwayListener } from '@mui/base';
import cx from 'classnames';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FC } from 'react';
import ReactDOM from 'react-dom';
import { RoadmapInterface } from 'utils/interfaces/roadmap';
import { GoalInterface, GoalTask, SubGoal } from 'utils/interfaces/goal';

import './style.scss';
import { useEnableEffect } from 'shared/hooks/useEnableEffect';

// @ts-ignore
const containerEl = document.getElementById('portal-root');

interface RoadmapPreviewProps {
	isShow: boolean;
	setIsShow: (value: boolean) => void;
	currentGoal: RoadmapInterface | any;
}

const RoadmapPreview: FC<RoadmapPreviewProps> = ({ isShow, setIsShow, currentGoal }) => {
	const { enableCloseEffect, handleCloseModal } = useEnableEffect(setIsShow);

	if (!isShow) {
		return null;
	}

	return ReactDOM.createPortal(
		<Box className="roadmap__wrapper">
			<ClickAwayListener onClickAway={handleCloseModal}>
				<Box
					className={cx('roadmap', {
						close: enableCloseEffect,
					})}
				>
					{currentGoal.goals.map((goal: GoalInterface) => (
						<Box className="flex" sx={{ flexDirection: 'column !important' }}>
							<Box className="flex">
								{goal.tasks.length !== 0 ? (
									<Box className="flex">
										<Box className="roadmap__box">
											<ul>
												{goal.tasks.map((item: GoalTask, index) => (
													<li>
														{index + 1}. {item.title}
													</li>
												))}
											</ul>
										</Box>
										<ArrowBackIcon />
									</Box>
								) : (
									<Box sx={{ width: '10% !important', height: '100px' }} />
								)}
								<Box className="roadmap__goal">
									<Box className="roadmap__box">
										<Typography variant="subtitle">{goal.title}</Typography>
									</Box>
								</Box>
								{goal.subgoals.length !== 0 ? (
									<Box className="flex">
										<ArrowForwardIcon />
										<Box className="flex" sx={{ alignItems: 'baseline !important' }}>
											{goal.subgoals.map((subgoal: SubGoal) => (
												<Box className="roadmap__goal">
													<Box className="roadmap__box">
														<Typography variant="subtitle">{subgoal.title}</Typography>
													</Box>
													<ArrowDownwardIcon />
													<Box className="roadmap__box">
														<ul>
															{subgoal.tasks.map((task, index) => (
																<li>
																	{index + 1}. {task.title}
																</li>
															))}
														</ul>
													</Box>
												</Box>
											))}
										</Box>
									</Box>
								) : (
									<Box sx={{ width: '10% !important', height: '100px' }} />
								)}
							</Box>
							<ArrowDownwardIcon sx={{ height: '60px' }} />
						</Box>
					))}
					<Box className="roadmap__box">
						<Typography variant="subtitle">End</Typography>
					</Box>
				</Box>
			</ClickAwayListener>
		</Box>,
		// @ts-ignore
		containerEl
	);
};

export default RoadmapPreview;
