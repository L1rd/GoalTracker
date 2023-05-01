import { Box, LinearProgress, linearProgressClasses, LinearProgressProps, styled, Typography } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(() => ({
	height: '16px',
	borderRadius: '8px',
	border: '1px solid #E29B29',
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: '#FFF6E0',
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: '8px',
		backgroundColor: '#E29B29',
	},
}));

const LinearProgressWithLabel = ({ value }: LinearProgressProps) => (
	<Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
		<Box sx={{ width: '270px' }}>
			<BorderLinearProgress variant="determinate" value={value} />
		</Box>
		<Box sx={{ minWidth: 35 }}>
			<Typography variant="body" sx={{ fontWeight: 'bold' }}>{`${Math.round(value || 0)}%`}</Typography>
		</Box>
	</Box>
);

export default LinearProgressWithLabel;
