import { Box, Button, Rating, Typography, useTheme } from '@mui/material';
import Arrow from 'assets/icons/arrow.svg';
import Avatar from 'assets/icons/avatar.svg';

const Reviews = () => {
	const theme = useTheme();

	return (
		<Box className="landing__reviews" id="reviews" sx={{ marginBottom: '144px' }}>
			<Typography
				variant="h2"
				sx={{ color: `${theme.palette.darkYellow}`, textAlign: 'center', marginBottom: '48px' }}
			>
				Check out the reviews from our satisfied customers
			</Typography>
			<Box className="landing__carousel">
				<Box className="left">
					<img src={Arrow} alt="arrow" />
				</Box>

				<Box className="landing__review">
					<Box className="landing__review__header">
						<img src={Avatar} alt="arrow" />
						<Box>
							<Typography variant="smallDetails">Alexander Brown</Typography>
							<Typography variant="smallDetailsSecond">Financial Analyst</Typography>
						</Box>
					</Box>
					<Box className="landing__review__content">
						<Typography variant="reviews">
							Goalrizer is an excellent website that has helped me to set achievable goals and stay
							motivated towards achieving them. The user-friendly interface and tracking tools have made
							my goal-setting journey a breeze.
						</Typography>
						<Rating defaultValue={5} precision={1} readOnly sx={{ margin: '42px 0 0 0' }} />
					</Box>
				</Box>
				<Box className="landing__review">
					<Box className="landing__review__header">
						<img src={Avatar} alt="arrow" />
						<Box>
							<Typography variant="smallDetails">Alexander Brown</Typography>
							<Typography variant="smallDetailsSecond">Financial Analyst</Typography>
						</Box>
					</Box>
					<Box className="landing__review__content">
						<Typography variant="reviews">
							Goalrizer is an excellent website that has helped me to set achievable goals and stay
							motivated towards achieving them. The user-friendly interface and tracking tools have made
							my goal-setting journey a breeze.
						</Typography>
						<Rating defaultValue={5} precision={1} readOnly sx={{ margin: '42px 0 0 0' }} />
					</Box>
				</Box>
				<Box className="landing__review">
					<Box className="landing__review__header">
						<img src={Avatar} alt="arrow" />
						<Box>
							<Typography variant="smallDetails">Alexander Brown</Typography>
							<Typography variant="smallDetailsSecond">Financial Analyst</Typography>
						</Box>
					</Box>
					<Box className="landing__review__content">
						<Typography variant="reviews">
							Goalrizer is an excellent website that has helped me to set achievable goals and stay
							motivated towards achieving them. The user-friendly interface and tracking tools have made
							my goal-setting journey a breeze.
						</Typography>
						<Rating defaultValue={5} precision={1} readOnly sx={{ margin: '42px 0 0 0' }} />
					</Box>
				</Box>

				<Box className="right">
					<img src={Arrow} alt="arrow" />
				</Box>
			</Box>
			<Button variant="buttonLight" size="medium" color="primary">
				Browse reviews
			</Button>
		</Box>
	);
};

export default Reviews;
