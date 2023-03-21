import { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Card, List, Rate, Typography } from 'antd';

// Utils
import { getDate } from 'src/helpers/getDate';

// Types
import { News } from 'src/types/news';

type ListItemProps = {
	item: News;
};

const ListItem: FC<ListItemProps> = ({ item }) => {
	const { id, title, by, time } = item;

	return (
		<Link to={`/${id}`} style={{ margin: '20px' }}>
			<Card
				hoverable
				title={
					<>
						{title} <Rate disabled defaultValue={item.score} />
					</>
				}
				bordered={true}
			>
				<List.Item key={id}>
					<Typography.Text>
						<Typography.Text italic strong>
							Author
						</Typography.Text>
						: {by},{' '}
						<Typography.Text italic strong>
							date
						</Typography.Text>
						: {getDate(time)}
					</Typography.Text>
				</List.Item>
			</Card>
		</Link>
	);
};

export default ListItem;
