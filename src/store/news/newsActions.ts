import { ThunkAction } from 'redux-thunk';
import { NewsData } from 'src/types/news';
import { RootState } from 'src/store/index';
import { getLatestNews } from 'src/services/getLatestNews';
import { getNews } from 'src/services/getNews';

export enum NewsActionTypes {
	NEWS_REQUEST = 'NEWS_REQUEST',
	NEWS_REQUEST_SUCCESS = 'NEWS_REQUEST_SUCCESS',
	NEWS_REQUEST_FAILED = 'NEWS_REQUEST_FAILED',
}

export type NewsRequestStart = {
	type: NewsActionTypes.NEWS_REQUEST;
};

export type NewsRequestSuccess = {
	type: NewsActionTypes.NEWS_REQUEST_SUCCESS;
	payload: NewsData[];
};

export type NewsRequestFailed = {
	type: NewsActionTypes.NEWS_REQUEST_FAILED;
	payload: string;
};

export type NewsAction =
	| NewsRequestStart
	| NewsRequestSuccess
	| NewsRequestFailed;

export const newsRequestStart = (): NewsRequestStart => ({
	type: NewsActionTypes.NEWS_REQUEST,
});

export const newsRequestSuccess = (news: NewsData[]): NewsRequestSuccess => ({
	type: NewsActionTypes.NEWS_REQUEST_SUCCESS,
	payload: news,
});

export const newsRequestFailed = (error: string): NewsRequestFailed => ({
	type: NewsActionTypes.NEWS_REQUEST_FAILED,
	payload: error,
});

export const loadNews =
	(): ThunkAction<void, RootState, unknown, NewsAction> =>
	async (dispatch) => {
		try {
			dispatch(newsRequestStart());
			const ids = await getLatestNews();
			const news = await getNews(ids);
			dispatch(newsRequestSuccess(news));
		} catch (error) {
			if (error instanceof Error) {
				dispatch(newsRequestFailed(error.message));
			}
		}
	};
