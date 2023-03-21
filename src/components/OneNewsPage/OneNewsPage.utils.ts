import { News } from 'src/types/news';

export const fetchNews = async (newsId: number) => {
	const res = await fetch(
		`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`
	);
	const json: News = await res.json();
	return json
};
