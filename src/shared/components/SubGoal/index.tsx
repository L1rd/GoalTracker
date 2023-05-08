import { FC, useState } from 'react';

// MUI
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

// Types
import { SubGoal } from 'utils/interfaces/goal';

// Icons
import Dots from 'assets/icons/dots.svg';

// Components
import { GoalFullTask } from '../GoalFullTask';
import LinearProgressWithLabel from '../LinearProgressWithLabel';

// Styles
import './style.scss';

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
	() => ({
		background: 'rgba(255, 239, 198, 0.5)',
		boxShadow: '0px 4px 4px rgba(11, 33, 92, 0.25)',
		backdropFilter: 'blur(8px)',
		borderRadius: '8px',

		'& .MuiAccordionSummary-expandIconWrapper': {
			background: '#0D2569',
			padding: '5px',
			borderRadius: '50px',
			transform: 'rotate(90deg)',

			'&.Mui-expanded': {
				transform: 'rotate(270deg)',
			},

			'& svg': {
				color: '#FFD260',
			},
		},
		'&:hover': {
			transform: 'scale(1)',
		},
	})
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(() => ({
	color: '#2647AC',

	'.MuiAccordionSummary-content': {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
	display: 'flex',
	alignItems: 'flex-end',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	gap: '16px',
	overflowY: 'auto',
	maxHeight: '100px',
	height: '100px',

	'&::-webkit-scrollbar': {
		width: '0.2em',
	},

	'&::-webkit-scrollbar-thumb': {
		borderRadius: '5px',
		backgroundColor: 'lightgrey',
	},
}));

interface SubGoalProps {
	isExpanded?: boolean;
	handleChangeExpanded?: (event: React.SyntheticEvent, isExpanded: boolean) => void;
	subGoal: SubGoal;
}

export const SubGoalComponent: FC<SubGoalProps> = ({ isExpanded, handleChangeExpanded, subGoal }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Accordion expanded={isExpanded} onChange={handleChangeExpanded}>
			<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
				<Typography variant="subtitle" className="subgoal__title">
					{subGoal.title}
				</Typography>
				<Box className="subgoal__info">
					<LinearProgressWithLabel value={subGoal.progress} />
					<IconButton onClick={handleClick}>
						<img src={Dots} alt="Dots" />
					</IconButton>
					<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
						<MenuItem onClick={handleClose}>Edit</MenuItem>
						<MenuItem onClick={handleClose}>Delete</MenuItem>
					</Menu>
				</Box>
			</AccordionSummary>
			<AccordionDetails>
				{subGoal.tasks.map(task => (
					<GoalFullTask title={task.title} time={task.time} />
				))}
			</AccordionDetails>
		</Accordion>
	);
};
