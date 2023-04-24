import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import cx from 'classnames';
import { selectorGetTheme } from 'redux/goals-service/selectors';
import Loader from 'shared/components/Loader';

const LandingPage = lazy(() => import('components/Landing'));
const GoalTracker = lazy(() => import('components/MainApp'));

const App = () => {
	const theme = useSelector(selectorGetTheme);

	return (
		<div className={cx('App', theme)}>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/GoalTracker/" element={<LandingPage />} />
					<Route path="/GoalTracker/MainApp/*" element={<GoalTracker />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
