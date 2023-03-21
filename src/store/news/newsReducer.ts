import { NewsAction, NewsActionTypes } from './newsActions';
import { NewsData } from 'src/types/news';

type NewsState = {
	news: NewsData[];
	loading: boolean;
	error: string;
};

const defaultState: NewsState = {
	news: [],
	loading: false,
	error: '',
};

function exhaustiveCheck(action: never) {
	return action;
}

export const newsReducer = (
	state: NewsState = defaultState,
	action: NewsAction
): NewsState => {
	switch (action.type) {
		case NewsActionTypes.NEWS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case NewsActionTypes.NEWS_REQUEST_SUCCESS:
			return {
				...state,
				loading: false,
				news: action.payload,
			};
		case NewsActionTypes.NEWS_REQUEST_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return exhaustiveCheck(action);
	}
};
