import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from 'components/Landing';
import GoalTracker from 'components/MainApp';

const App = () => (
	<div className="App">
		<Routes>
			<Route path="/GoalTracker/" element={<LandingPage />} />
			<Route path="/MainApp" element={<GoalTracker />} />
		</Routes>
	</div>
);

export default App;
