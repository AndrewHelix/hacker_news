import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Components
import MainPage from 'src/components/MainPage/MainPage';
import NewsPage from 'src/components/OneNewsPage/OneNewsPage';
import Layout from 'src/components/Layout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path=":newsId" element={<NewsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
