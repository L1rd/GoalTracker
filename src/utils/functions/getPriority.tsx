import HighPriority from 'assets/icons/high-priority.svg';
import HighestPriority from 'assets/icons/highest-priority.svg';
import LowestPriority from 'assets/icons/lowest-priority.svg';
import MediumPriority from 'assets/icons/medium-priority.svg';

export const getPriority = (priority: number) => {
	switch (priority) {
		case 4:
			return <img src={HighestPriority} alt="highest priority" />;
		case 3:
			return <img src={HighPriority} alt="high priority" />;
		case 2:
			return <img src={MediumPriority} alt="medium priority" />;
		case 1:
			return <img src={LowestPriority} alt="lowest priority" />;

		default:
			break;
	}

	return null;
};
