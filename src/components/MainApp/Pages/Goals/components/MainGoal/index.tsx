import { FC, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import HighPriority from 'assets/icons/high-priority.svg';
import HighestPriority from 'assets/icons/highest-priority.svg';
import LowestPriority from 'assets/icons/lowest-priority.svg';
import MediumPriority from 'assets/icons/medium-priority.svg';
import cx from 'classnames';
import CircularProgressWithLabel from 'shared/components/CircularProgressWithLabel';
import { SubGoal } from 'shared/components/SubGoal';
import { useEnableEffect } from 'shared/hooks/useEnableEffect';
import './style.scss';

interface MainGoalProps {
	isShown: boolean;
	setIsShown: (value: boolean) => void;
}

const MainGoal: FC<MainGoalProps> = ({ isShown, setIsShown }) => {
	const { enableCloseEffect, handleCloseModal } = useEnableEffect(setIsShown);
	const [expanded, setExpanded] = useState<string | false>(false);
	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	const getPriority = (priority: number) => {
		switch (priority) {
			case 5:
				return <img src={HighestPriority} alt="highest priority" />;
			case 4:
				return <img src={HighPriority} alt="high priority" />;
			case 3:
				return <img src={MediumPriority} alt="medium priority" />;
			case 2:
				return <img src={HighestPriority} alt="low priority" />;
			case 1:
				return <img src={LowestPriority} alt="lowest priority" />;

			default:
				break;
		}

		return null;
	};

	if (!isShown) {
		return null;
	}
	return (
		<Box
			className={cx('main-goal', {
				close: enableCloseEffect,
			})}
		>
			<Box className="main-goal__global-info">
				<Box className="main-goal__row">
					<Box className="main-goal__progress">
						<CircularProgressWithLabel value={70} />
					</Box>
					<Box className="main-goal__info">
						<Box className="main-goal__title">
							{getPriority(5)}
							<Typography variant="h4">Reach level A1 in Spanish</Typography>
						</Box>
						<Box className="main-goal__columns">
							<Box className="main-goal__date">
								<Typography className="main-goal__date-info" variant="body">
									<span className="first-info">Start: </span>18.02.2023
								</Typography>
								<Typography className="main-goal__date-info" variant="body">
									<span className="first-info">End: </span>18.04.2023
								</Typography>
							</Box>
							<Box className="main-goal__add">
								<Typography className="main-goal__add-info" variant="body">
									<span className="first-info">Status: </span>In Progress
								</Typography>
								<Typography className="main-goal__add-info" variant="body">
									<span className="first-info">Category: </span>Personal
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className="main-goal__sub-goals">
				<SubGoal isExpanded={expanded === 'panel1'} handleChangeExpanded={handleChange('panel1')} />
				<SubGoal isExpanded={expanded === 'panel2'} handleChangeExpanded={handleChange('panel2')} />
				<SubGoal isExpanded={expanded === 'panel3'} handleChangeExpanded={handleChange('panel3')} />
			</Box>
			<Box className="main-goal__actions">
				<Button color="primary" variant="buttonLight" size="small" onClick={handleCloseModal}>
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
