import { useEffect, useState } from 'react';

export const useScrollToTop = () => {
	const [isShowScrollToTop, setShowGoTop] = useState(false);

	const handleVisibleButton = () => {
		setShowGoTop(window.pageYOffset > 200);
	};

	const handleScrollUp = () => {
		setShowGoTop(false);
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', handleVisibleButton);

		return () => {
			window.removeEventListener('scroll', handleVisibleButton);
		};
	}, []);

	return { isShowScrollToTop, setShowGoTop, handleScrollUp };
};
