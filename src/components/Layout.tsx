import React from 'react';
import { Layout as AntLayout, Space } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Footer, Sider, Content } = AntLayout;

const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#108ee9',
};

const footerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#7dbcea',
};

const Layout: React.FC = () => (
	<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
		<AntLayout style={{ height: '100vh' }}>
			<Header style={headerStyle}>Header</Header>
			<Content style={contentStyle}>
				<Outlet />
			</Content>
			<Footer style={footerStyle}>Footer</Footer>
		</AntLayout>
	</Space>
);

export default Layout;
