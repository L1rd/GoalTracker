import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import cx from 'classnames';
import { AnimatePresence } from 'framer-motion';
import { selectorGetTheme } from 'redux/goals-service/selectors';
import Loader from 'shared/components/Loader';

const LandingPage = lazy(() => import('components/Landing'));
const GoalTracker = lazy(() => import('components/MainApp'));
const LogIn = lazy(() => import('components/Auth/LogIn'));
const SignUp = lazy(() => import('components/Auth/SignUp'));

const App = () => {
	const theme = useSelector(selectorGetTheme);
	const location = useLocation();

	return (
		<div className={cx('App', theme)}>
			<Suspense fallback={<Loader />}>
				<AnimatePresence>
					<Routes location={location}>
						<Route path="/GoalTracker/" element={<LandingPage />} />
						<Route path="/GoalTracker/MainApp/*" element={<GoalTracker />} />
						<Route path="/GoalTracker/Auth/LogIn/*" element={<LogIn />} />
						<Route path="/GoalTracker/Auth/SignUp/*" element={<SignUp />} />
					</Routes>
				</AnimatePresence>
			</Suspense>
		</div>
	);
};

export default App;
