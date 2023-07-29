import { useTranslation } from 'react-i18next';

// MUI
import { Box, Button, IconButton, Typography } from '@mui/material';

// Icons
import Delete from 'assets/icons/delete-icon.svg';
import EmptyStateIcon from 'assets/icons/empty-goal-state.png';

// Styles
import './style.scss';
import { useSelector } from 'react-redux';
import { selectorGetRoadmaps } from 'redux/goals-service/selectors';
import { useState } from 'react';
import { RoadmapInterface } from 'utils/interfaces/roadmap';
import RoadmapPreview from '../RoadmapPreview';

export const RoadMapList = () => {
	const [currentGoal, setCurrentGoal] = useState({});
	const [isShow, setIsShow] = useState(false);
	const { t } = useTranslation('mainApp');
	const roadMaps = useSelector(selectorGetRoadmaps);
	const handleOpenRoadMap = (currentGoal: RoadmapInterface) => {
		setIsShow(true);
		setCurrentGoal(currentGoal);
	};
	return roadMaps.length ? (
		<Box>
			{roadMaps.map(item => (
				<Box className="roadMapBlock">
					<Box className="roadMapBlock__info">
						<Box className="roadMapBlock__header">
							<Box className="roadMapBlock__header-title">
								<Typography variant="h4">{item.title}</Typography>
							</Box>
							<IconButton className="roadMapBlock__delete">
								<img src={Delete} alt="delete" />
							</IconButton>
						</Box>
						<Box className="roadMapBlock__parameters">
							<Typography variant="body">
								<span>CreatedAt:</span> {item.createdAt}
							</Typography>
							<Typography variant="body">
								<span>Author:</span> {item.author}
							</Typography>
							<Typography variant="body">
								<span>Stack of Technology:</span> {item.stackOfTechnology}
							</Typography>
						</Box>
						<Button
							variant="buttonLight"
							size="small"
							color="secondary"
							className="roadMapBlock__view"
							onClick={() => handleOpenRoadMap(item)}
						>
							<Typography variant="smallDetails">{t('view-goal')}</Typography>
						</Button>
					</Box>
				</Box>
			))}
			<RoadmapPreview isShow={isShow} setIsShow={setIsShow} currentGoal={currentGoal} />
		</Box>
	) : (
		<Box className="goals__list-empty">
			<img src={EmptyStateIcon} alt="empty state icon" />
			<Typography variant="body">You have no roadmaps here</Typography>
		</Box>
	);
};
