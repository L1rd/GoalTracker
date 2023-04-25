import { FC, useState } from 'react';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import Dots from 'assets/icons/dots.svg';
import { GoalFullTask } from '../GoalFullTask';
import LinearProgressWithLabel from '../LinearProgressWithLabel';

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
	justifyContent: 'center',
	gap: '16px',
}));

interface SubGoalProps {
	isExpanded?: boolean;
	handleChangeExpanded?: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export const SubGoal: FC<SubGoalProps> = ({ isExpanded, handleChangeExpanded }) => {
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
				<Typography variant="subtitle">Collapsible Group Item #1</Typography>
				<LinearProgressWithLabel value={70} />
				<IconButton onClick={handleClick}>
					<img src={Dots} alt="Dots" />
				</IconButton>
				<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
					<MenuItem onClick={handleClose}>Edit</MenuItem>
					<MenuItem onClick={handleClose}>Delete</MenuItem>
				</Menu>
			</AccordionSummary>
			<AccordionDetails>
				<GoalFullTask />
				<GoalFullTask />
				<GoalFullTask />
			</AccordionDetails>
		</Accordion>
	);
};
