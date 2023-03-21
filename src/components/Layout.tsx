import React from 'react';
import { Layout as AntLayout, Space } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { contentStyle, footerStyle, headerStyle } from './Layout.styles';

const { Header, Footer, Content } = AntLayout;

const Layout: React.FC = () => (
	<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
		<AntLayout style={{ minHeight: '100vh' }}>
			<Link to={'/'}>
				<Header style={headerStyle}>Hacker news</Header>
			</Link>
			<Content style={contentStyle}>
				<Outlet />
			</Content>
			<Footer style={footerStyle}>© ISsoft</Footer>
		</AntLayout>
	</Space>
);

export default Layout;
