import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import './style.scss';

const SubscriptionPlans = [
	{
		title: 'Simple',
		price: '0$',
		description: ['-Create Goals', '-Create Simple Roadmaps', '-View other users` roadmaps'],
	},
	{
		title: 'Premium',
		price: '20$',
		description: [
			'-Create more complicated Roadmaps',
			'-View profiles of other users and their learning path',
			'-Get help from our mentors',
		],
	},
];

const SubscriptionPage = () => (
	<motion.div
		className="goals"
		initial={{ transform: 'translate(0, -220px)', opacity: 0 }}
		animate={{ transform: 'translate(0, 0)', opacity: 1 }}
		exit={{
			transform: 'translate(0, 220px)',
			opacity: 0,
		}}
	>
		<Box className="subscription__header">
			<Typography variant="h2" className="goals__header-title">
				Subscription Plans
			</Typography>
		</Box>
		<Box className="subscription__plans">
			{SubscriptionPlans.map(item => (
				<Box className="subscription__plan">
					<Box className="subscription__plan__header">
						<Typography variant="subtitle">{item.title}</Typography>
						<Typography variant="subtitle">{item.price}</Typography>
					</Box>
					<Box className="subscription__plan__description">
						<ul>
							{item.description.map(item => (
								<li>
									<Typography variant="body">{item}</Typography>
								</li>
							))}
						</ul>
					</Box>
					<Button
						variant="buttonDark"
						color="primary"
						size="small"
						sx={{ width: '200px', alignSelf: 'center' }}
					>
						<Typography variant="body">Subscribe</Typography>
					</Button>
				</Box>
			))}
		</Box>
	</motion.div>
);

export default SubscriptionPage;
