import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Box, Button, Rating, Typography } from '@mui/material';
import Arrow from 'assets/icons/arrow.svg';
import Avatar from 'assets/icons/avatar.svg';
import { selectorGetTheme } from 'redux/goals-service/selectors';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {
	const theme = useSelector(selectorGetTheme);
	const { t } = useTranslation('landing');

	return (
		<Box className="landing__reviews" id="reviews" sx={{ marginBottom: '144px' }}>
			<Typography variant="h2" className="landing__reviews-title">
				{t('checkout-review')}
			</Typography>
			<Swiper
				effect="coverflow"
				grabCursor
				loop
				centeredSlides
				slidesPerView={4}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
				}}
				pagination={{ el: '.swiper-pagination', clickable: true }}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				modules={[EffectCoverflow, Navigation, Pagination]}
				style={{
					width: '100%',
					height: '100%',
					marginBottom: '80px',
				}}
			>
				<SwiperSlide>
					<Box className="landing__review">
						<Box className="landing__review__header">
							<img src={Avatar} alt="arrow" />
							<Box>
								<Typography variant="smallDetails">Alexander Brown1</Typography>
								<Typography variant="smallDetailsSecond">Financial Analyst</Typography>
							</Box>
						</Box>
						<Box className="landing__review__content">
							<Typography variant="reviews">
								Goalrizer is an excellent website that has helped me to set achievable goals and stay
								motivated towards achieving them. The user-friendly interface and tracking tools have
								made my goal-setting journey a breeze.
							</Typography>
							<Rating defaultValue={5} precision={1} readOnly sx={{ margin: '42px 0 0 0' }} />
						</Box>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box className="landing__review">
						<Box className="landing__review__header">
							<img src={Avatar} alt="arrow" />
							<Box>
								<Typography variant="smallDetails">Alexander Brown2</Typography>
								<Typography variant="smallDetailsSecond">Financial Analyst</Typography>
							</Box>
						</Box>
						<Box className="landing__review__content">
							<Typography variant="reviews">
								Goalrizer is an excellent website that has helped me to set achievable goals and stay
								motivated towards achieving them. The user-friendly interface and tracking tools have
								made my goal-setting journey a breeze.
							</Typography>
							<Rating defaultValue={5} precision={1} readOnly sx={{ margin: '42px 0 0 0' }} />
						</Box>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box className="landing__review">
						<Box className="landing__review__header">
							<img src={Avatar} alt="arrow" />
							<Box>
								<Typography variant="smallDetails">Alexander Brown3</Typography>
								<Typography variant="smallDetailsSecond">Financial Analyst</Typography>
							</Box>
						</Box>
						<Box className="landing__review__content">
							<Typography variant="reviews">
								Goalrizer is an excellent website that has helped me to set achievable goals and stay
								motivated towards achieving them. The user-friendly interface and tracking tools have
								made my goal-setting journey a breeze.
							</Typography>
							<Rating defaultValue={5} precision={1} readOnly sx={{ margin: '42px 0 0 0' }} />
						</Box>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box className="landing__review">
						<Box className="landing__review__header">
							<img src={Avatar} alt="arrow" />
							<Box>
								<Typography variant="smallDetails">Alexander Brown4</Typography>
								<Typography variant="smallDetailsSecond">Financial Analyst</Typography>
							</Box>
						</Box>
						<Box className="landing__review__content">
							<Typography variant="reviews">
								Goalrizer is an excellent website that has helped me to set achievable goals and stay
								motivated towards achieving them. The user-friendly interface and tracking tools have
								made my goal-setting journey a breeze.
							</Typography>
							<Rating defaultValue={5} precision={1} readOnly sx={{ margin: '42px 0 0 0' }} />
						</Box>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box className="landing__review">
						<Box className="landing__review__header">
							<img src={Avatar} alt="arrow" />
							<Box>
								<Typography variant="smallDetails">Alexander Brown5</Typography>
								<Typography variant="smallDetailsSecond">Financial Analyst</Typography>
							</Box>
						</Box>
						<Box className="landing__review__content">
							<Typography variant="reviews">
								Goalrizer is an excellent website that has helped me to set achievable goals and stay
								motivated towards achieving them. The user-friendly interface and tracking tools have
								made my goal-setting journey a breeze.
							</Typography>
							<Rating defaultValue={5} precision={1} readOnly sx={{ margin: '42px 0 0 0' }} />
						</Box>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box className="landing__review">
						<Box className="landing__review__header">
							<img src={Avatar} alt="arrow" />
							<Box>
								<Typography variant="smallDetails">Alexander Brown6</Typography>
								<Typography variant="smallDetailsSecond">Financial Analyst</Typography>
							</Box>
						</Box>
						<Box className="landing__review__content">
							<Typography variant="reviews">
								Goalrizer is an excellent website that has helped me to set achievable goals and stay
								motivated towards achieving them. The user-friendly interface and tracking tools have
								made my goal-setting journey a breeze.
							</Typography>
							<Rating defaultValue={5} precision={1} readOnly sx={{ margin: '42px 0 0 0' }} />
						</Box>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box className="landing__review">
						<Box className="landing__review__header">
							<img src={Avatar} alt="arrow" />
							<Box>
								<Typography variant="smallDetails">Alexander Brown7</Typography>
								<Typography variant="smallDetailsSecond">Financial Analyst</Typography>
							</Box>
						</Box>
						<Box className="landing__review__content">
							<Typography variant="reviews">
								Goalrizer is an excellent website that has helped me to set achievable goals and stay
								motivated towards achieving them. The user-friendly interface and tracking tools have
								made my goal-setting journey a breeze.
							</Typography>
							<Rating defaultValue={5} precision={1} readOnly sx={{ margin: '42px 0 0 0' }} />
						</Box>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box className="landing__review">
						<Box className="landing__review__header">
							<img src={Avatar} alt="arrow" />
							<Box>
								<Typography variant="smallDetails">Alexander Brown8</Typography>
								<Typography variant="smallDetailsSecond">Financial Analyst</Typography>
							</Box>
						</Box>
						<Box className="landing__review__content">
							<Typography variant="reviews">
								Goalrizer is an excellent website that has helped me to set achievable goals and stay
								motivated towards achieving them. The user-friendly interface and tracking tools have
								made my goal-setting journey a breeze.
							</Typography>
							<Rating defaultValue={5} precision={1} readOnly sx={{ margin: '42px 0 0 0' }} />
						</Box>
					</Box>
				</SwiperSlide>

				<div className="slider-controler">
					<Box className="left swiper-button-prev">
						<img src={Arrow} alt="arrow" />
					</Box>
					<Box className="right swiper-button-next">
						<img src={Arrow} alt="arrow" />
					</Box>
					<div className="swiper-pagination" />
				</div>
			</Swiper>
			<Button
				size="large"
				variant={theme === 'theme-dark' ? 'buttonLight' : 'buttonDark'}
				color={theme === 'theme-dark' ? 'primary' : 'secondary'}
			>
				<Typography variant="body">{t('browse-reviews')}</Typography>
			</Button>
		</Box>
	);
};

export default Reviews;
