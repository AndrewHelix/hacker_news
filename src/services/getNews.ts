import { NewsData } from 'src/types/news';

export const getNews = async (ids: number[]): Promise<NewsData[]> => {
	const news: NewsData[] = [];
	const promises = ids.map((id) =>
		fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
			.then((res) => {
				if (!res.ok) {
					return Promise.reject({ message: res.statusText });
				}
				return res;
			})
			.then((res) => res.json())
			.catch((err) => ({
				id,
				error: `Something went wrong with news with id - ${id}`,
			}))
	);

	const results = await Promise.allSettled(promises);
	results.forEach(async (res) => {
		if (res.status === 'fulfilled') {
			const newsJson = res.value;
			news.push(await newsJson);
		} else {
			const err = res.reason;
			news.push(await err);
		}
	});
	return news;
};
