export const getLatestNews = async (): Promise<number[]> => {
	const res = await fetch(
		'https://hacker-news.firebaseio.com/v0/newstories.json'
	);
	const ids: number[] = await res.json();
	return ids.slice(0, 100);
};
