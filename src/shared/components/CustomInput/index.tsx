/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Typography } from '@mui/material';
import cx from 'classnames';
import { useField } from 'formik';
import './style.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomInput = ({ label, ...props }: any) => {
	const [field, meta] = useField(props);

	return (
		<Box className="custom-input">
			<label>
				<Typography variant="reviews">{label}</Typography>
			</label>
			<input
				{...field}
				{...props}
				className={cx({
					'input-error': meta.touched && meta.error,
				})}
			/>
			{meta.touched && meta.error && (
				<Typography variant="reviews" className="error">
					{meta.error}
				</Typography>
			)}
		</Box>
	);
};
export default CustomInput;
