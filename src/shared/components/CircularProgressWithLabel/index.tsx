import { Box, CircularProgress, Typography } from '@mui/material';

const CircularProgressWithLabel = ({ value }: { value: number }) => (
	<Box sx={{ position: 'relative', display: 'inline-flex' }}>
		<CircularProgress variant="determinate" value={value} />
		<Box
			sx={{
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				position: 'absolute',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				border: '9px solid white',
				zIndex: '-1',
				borderRadius: '50px',
			}}
		>
			<Typography variant="h4" sx={{ color: '#0B215C' }}>{`${Math.round(value)}%`}</Typography>
		</Box>
	</Box>
);

export default CircularProgressWithLabel;
