export type News = {
	by: string;
	descendants: number;
	id: number;
	kids: number[];
	score: number;
	time: number;
	title: string;
	type: string;
	url: string;
};

export type NewsError = {
	id: number;
	error: string;
};

export type NewsData = News | NewsError