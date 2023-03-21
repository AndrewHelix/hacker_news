import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// Components
import Meta from 'antd/es/card/Meta';
import { Button, Card, Col, Divider, Row, Skeleton, Typography } from 'antd';
import GoToMainPageBtn from 'src/components/Buttons/GoToMainPageBtn';

// Utils
import { getDate } from 'src/helpers/getDate';
import { fetchNews } from './OneNewsPage.utils';

// Types
import { News } from 'src/types/news';

const NewsPage: FC = () => {
	const [news, setNews] = useState<News | null>(null);
	const { newsId } = useParams();

	useEffect(() => {
		if (newsId) {
			const id = parseInt(newsId);
			updateData(id);
		}
	}, [newsId]);

	const updateData = (id: number) => {
		fetchNews(id).then((res) => setNews(res));
	};
	return (
		<>
			{news ? (
				<Card
					style={{ width: 300 }}
					title="Original article"
					extra={
						<Link to={news.url} target="_blank">
							<Button type="primary">More info</Button>
						</Link>
					}
				>
					<Meta description={<>By: {news.by}</>} />
					<div style={{ marginTop: 20 }}>
						<Typography.Title level={3}>
							{news.title}
						</Typography.Title>
						<Typography.Text italic strong>
							Date:{' '}
						</Typography.Text>
						<Typography.Text>{getDate(news.time)}</Typography.Text>
						<br />
						<Typography.Text italic strong>
							Total comments:{' '}
						</Typography.Text>
						<Typography.Text>{news.descendants}</Typography.Text>
						<Divider />
						<Row justify="space-between">
							<Col>
								<GoToMainPageBtn />
							</Col>
							<Col>
								<Button onClick={() => updateData(news.id)}>
									Update comments
								</Button>
							</Col>
						</Row>
					</div>
				</Card>
			) : (
				<Skeleton
					loading={true}
					active
					style={{ width: 300 }}
				></Skeleton>
			)}
		</>
	);
};

export default NewsPage;
