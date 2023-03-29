import Arrow from 'assets/icons/arrow-up.svg';
import { useScrollToTop } from 'shared/hooks/useScrollToTop';
import './style.scss';

const ScrollToTop = () => {
	const { handleScrollUp } = useScrollToTop();

	return (
		<button type="button" className="btn-t" onClick={handleScrollUp}>
			<img src={Arrow} alt="arrow" />
		</button>
	);
};

export default ScrollToTop;
