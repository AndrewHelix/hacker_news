import { FC, useEffect } from 'react';

// Hooks
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

// Actions
import { loadNews } from 'src/store/news/newsActions';

// Selectors
import { newsSelector } from 'src/store/news/newsSelectors';

// Components
import { Button, List, Spin } from 'antd';
import ListItem from 'src/components/ListItem/ListItem';

// Styles
import { updateNewsBtnStyles } from './MainPage.styles';

// Types
import { NewsData, NewsError } from 'src/types/news';

const isNewsError = (item: NewsData): item is NewsError => {
	return (item as NewsError).error !== undefined;
};

const MainPage: FC = () => {
	const { news, loading } = useAppSelector(newsSelector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		updateNews();
	}, []);

	useEffect(() => {
		if (loading) return;

		const id = setInterval(() => {
			updateNews();
		}, 60000);

		return () => {
			clearInterval(id);
		};
	}, [loading]);

	const updateNews = () => dispatch(loadNews());

	return (
		<>
			{loading ? (
				<Spin tip="Loading" size="large" />
			) : (
				<>
					<List
						style={{ maxWidth: '1200px',  }}
						itemLayout="horizontal"
						dataSource={news}
						split
						renderItem={(item, index) =>
							isNewsError(item) ? (
								<List.Item>{item.error}</List.Item>
							) : (
								<ListItem item={item} />
							)
						}
					/>
					<Button
						onClick={updateNews}
						type="primary"
						style={updateNewsBtnStyles}
					>
						Update news
					</Button>
				</>
			)}
		</>
	);
};

export default MainPage;
