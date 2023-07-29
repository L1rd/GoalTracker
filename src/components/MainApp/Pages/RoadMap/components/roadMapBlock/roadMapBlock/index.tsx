import { useTranslation } from 'react-i18next';

// MUI
import { Box, Button, IconButton, Typography } from '@mui/material';

// Icons
import Delete from 'assets/icons/delete-icon.svg';

// Styles
import './style.scss';

interface roadMapProps {
	title: string;
	author: string;
	timeStart: string;
	task: string;
	setIsShow?: () => void;
}

export const RoadMapBlock = ({ title, author, timeStart, task, setIsShow }: roadMapProps) => {
	const { t } = useTranslation('mainApp');
	return (
		<>
			<Box className="roadMapBlock">
				<Box className="roadMapBlock__info">
					<Box className="roadMapBlock__header">
						<Box className="roadMapBlock__header-title">
							<Typography variant="h4">{title}</Typography>
						</Box>
						<IconButton className="roadMapBlock__delete">
							<img src={Delete} alt="delete" />
						</IconButton>
					</Box>
					<Box className="roadMapBlock__parameters">
						<Typography variant="body">
							<span>{timeStart}</span> 29.07.2023
						</Typography>
						<Typography variant="body">
							<span>{author}</span> Artem
						</Typography>
						<Typography variant="body">
							<span>{task}</span> Front-end
						</Typography>
					</Box>
					<Button
						variant="buttonLight"
						size="small"
						color="secondary"
						className="roadMapBlock__view"
						onClick={setIsShow}
					>
						<Typography variant="smallDetails">{t('view-goal')}</Typography>
					</Button>
				</Box>
			</Box>
			<Box className="roadMapBlock">
				<Box className="roadMapBlock__info">
					<Box className="roadMapBlock__header">
						<Box className="roadMapBlock__header-title">
							<Typography variant="h4">{title}</Typography>
						</Box>
						<IconButton className="roadMapBlock__delete">
							<img src={Delete} alt="delete" />
						</IconButton>
					</Box>
					<Box className="roadMapBlock__parameters">
						<Typography variant="body">
							<span>{timeStart}</span> 29.07.2023
						</Typography>
						<Typography variant="body">
							<span>{author}</span> Artem
						</Typography>
						<Typography variant="body">
							<span>{task}</span> Front-end
						</Typography>
					</Box>
					<Button
						variant="buttonLight"
						size="small"
						color="secondary"
						className="roadMapBlock__view"
						onClick={setIsShow}
					>
						<Typography variant="smallDetails">{t('view-goal')}</Typography>
					</Button>
				</Box>
			</Box>
			<Box className="roadMapBlock">
				<Box className="roadMapBlock__info">
					<Box className="roadMapBlock__header">
						<Box className="roadMapBlock__header-title">
							<Typography variant="h4">{title}</Typography>
						</Box>
						<IconButton className="roadMapBlock__delete">
							<img src={Delete} alt="delete" />
						</IconButton>
					</Box>
					<Box className="roadMapBlock__parameters">
						<Typography variant="body">
							<span>{timeStart}</span> 29.07.2023
						</Typography>
						<Typography variant="body">
							<span>{author}</span> Artem
						</Typography>
						<Typography variant="body">
							<span>{task}</span> Front-end
						</Typography>
					</Box>
					<Button
						variant="buttonLight"
						size="small"
						color="secondary"
						className="roadMapBlock__view"
						onClick={setIsShow}
					>
						<Typography variant="smallDetails">{t('view-goal')}</Typography>
					</Button>
				</Box>
			</Box>
		</>
	);
};
