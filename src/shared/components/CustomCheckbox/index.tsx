/* eslint-disable jsx-a11y/label-has-associated-control */
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useField } from 'formik';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomCheckbox = ({ label, ...props }: any) => {
	const [field] = useField(props);

	return (
		<div className="custom-checkbox">
			<FormControlLabel
				control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: '25px', fill: '#0B215C' } }} />}
				sx={{
					userSelect: 'none',
					'& .MuiTypography-root': {
						fontWeight: 'bold',
					},
				}}
				label={<Typography variant="smallDetails">{label}</Typography>}
				{...field}
				{...props}
			/>
		</div>
	);
};
export default CustomCheckbox;
