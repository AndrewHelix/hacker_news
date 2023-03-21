import { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Button } from 'antd';

const GoToMainPageBtn: FC = () => {
	return <Link to={'/'}>
		<Button>Main Page</Button>
	</Link>;
};

export default GoToMainPageBtn;
