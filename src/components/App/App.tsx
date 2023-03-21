import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<>main page</>} />
					<Route path=":newsAlias" element={<>any news</>} />
					<Route path="*" element={<>Page 404</>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
