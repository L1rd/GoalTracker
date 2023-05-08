/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

// Interfaces
import { GoalTask } from 'utils/interfaces/goal';

// MUI
import {
	Typography,
	Box,
	FormControlLabel,
	Radio,
	RadioGroup,
	Checkbox,
	FormGroup,
	Button,
	Alert,
	Snackbar,
} from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

// Styles
import './style.scss';
import dayjs, { Dayjs } from 'dayjs';

interface CreateGoalTaskModalProps {
	isShow: boolean;
	setIsShow: Dispatch<SetStateAction<boolean>>;
	setTask: Dispatch<SetStateAction<GoalTask[]>>;
	tasks: GoalTask[];
}

const dropIn = {
	hidden: {
		y: '-100vh',
		opacity: 0,
	},
	visible: {
		y: '0',
		opacity: 1,
		transition: {
			duration: 0.1,
			type: 'spring',
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: '100vh',
		opacity: 0,
	},
};
// @ts-ignore
const containerEl = document.getElementById('portal-root');

const CreateGoalTaskModal: FC<CreateGoalTaskModalProps> = ({ isShow, setIsShow, setTask, tasks }) => {
	const [isShowError, setIsShowError] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [time, setTime] = useState<Dayjs | null>(dayjs());
	const [days, setDays] = useState({
		Mon: true,
		Tue: false,
		Wed: false,
		Thu: false,
		Fri: false,
		Sat: false,
		Sun: false,
	});

	const [period, setPeriod] = useState('Custom');

	const handleChangePeriod = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPeriod((event.target as HTMLInputElement).value);
	};

	const { Mon, Tue, Wed, Thu, Fri, Sat, Sun } = days;

	const WEEK = [
		{ title: 'Mon', state: Mon },
		{ title: 'Tue', state: Tue },
		{ title: 'Wed', state: Wed },
		{ title: 'Thu', state: Thu },
		{ title: 'Fri', state: Fri },
		{ title: 'Sat', state: Sat },
		{ title: 'Sun', state: Sun },
	];

	const handleChangeDay = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPeriod('Custom');
		setDays(prev => ({
			...prev,
			[event.target.name]: event.target.checked,
		}));
	};

	const handleChangeTime = (newValue: Dayjs | null) => {
		setTime(newValue);
	};

	const handleCreateTask = () => {
		if (tasks.find((item: GoalTask) => item.title === inputValue)) {
			setIsShowError(true);
		} else {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			setTask((prev: any) => [...prev, { title: inputValue, time: time?.format('HH:MM') }]);
			setInputValue('');
			setTime(dayjs());
			setIsShow(false);
		}
	};

	const handleEnterInfo = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputValue(event.target.value.trim());
	};

	const isButtonDisabled = useMemo(() => !!inputValue, [inputValue]);

	useEffect(() => {
		switch (period) {
			case 'Every day':
				setDays({
					Mon: true,
					Tue: true,
					Wed: true,
					Thu: true,
					Fri: true,
					Sat: true,
					Sun: true,
				});
				break;
			case 'On weekdays':
				setDays({
					Mon: true,
					Tue: true,
					Wed: true,
					Thu: true,
					Fri: true,
					Sat: false,
					Sun: false,
				});
				break;
			case 'On weekends':
				setDays({
					Mon: false,
					Tue: false,
					Wed: false,
					Thu: false,
					Fri: false,
					Sat: true,
					Sun: true,
				});
				break;

			default:
				break;
		}
	}, [period]);

	if (!isShow) {
		return null;
	}

	return ReactDOM.createPortal(
		<Box className="create-task__wrapper">
			<motion.div variants={dropIn} initial="hidden" animate="visible" exit="exit" className="create-task">
				<Box className="create-task__header">
					<Typography variant="h4">NEW TASK</Typography>
				</Box>
				<Box className="create-task__main-info">
					<Box className="create-task__title">
						<Typography variant="subtitle">Task:</Typography>
						<input
							type="text"
							placeholder="Create cards with letters"
							onChange={event => handleEnterInfo(event)}
						/>
					</Box>
					<Box className="create-task__reminder">
						<Typography variant="subtitle">Remind me:</Typography>
						<Box className="create-task__reminder__frequency">
							<RadioGroup
								defaultValue="Custom"
								name="radio-buttons-group"
								value={period}
								onChange={handleChangePeriod}
							>
								<FormControlLabel value="Every day" control={<Radio />} label="Every day" />
								<FormControlLabel value="On weekdays" control={<Radio />} label="On weekdays" />
								<FormControlLabel value="On weekends" control={<Radio />} label="On weekends" />
								<FormControlLabel value="Custom" control={<Radio />} label="Custom" />
							</RadioGroup>
							<FormGroup>
								{WEEK.map(item => (
									<FormControlLabel
										control={
											<Checkbox
												checked={item.state}
												onChange={handleChangeDay}
												name={item.title}
											/>
										}
										key={item.title}
										label={item.title}
									/>
								))}
							</FormGroup>
						</Box>
					</Box>
					<Box className="create-task__time">
						<Typography variant="subtitle">Time:</Typography>
						<MobileTimePicker
							defaultValue={dayjs('2022-04-17T15:30')}
							value={time}
							onChange={handleChangeTime}
							className="time"
						/>
					</Box>
				</Box>
				<Box className="create-task__actions">
					<Button color="secondary" variant="buttonLight" size="small" onClick={() => setIsShow(false)}>
						<Typography variant="body">Cancel</Typography>
					</Button>
					<Button
						color="primary"
						variant="buttonDark"
						size="small"
						onClick={handleCreateTask}
						disabled={!isButtonDisabled}
					>
						<Typography variant="body">Add task</Typography>
					</Button>
				</Box>
			</motion.div>
			<Snackbar open={isShowError} autoHideDuration={4000} onClose={() => setIsShowError(false)}>
				<Alert onClose={() => setIsShowError(false)} severity="error" sx={{ width: '30%', right: 0 }}>
					<Typography variant="subtitle">There is already a task with that name!</Typography>
				</Alert>
			</Snackbar>
		</Box>,
		// @ts-ignore
		containerEl
	);
};

export default CreateGoalTaskModal;
