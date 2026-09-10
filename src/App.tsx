import ChangelogPage from '@components/pages/ChangelogPage'
import HomePage from '@components/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() 
{
	return (
		<BrowserRouter basename="/ascribe-website/">
			<Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="/changelog" element={<ChangelogPage />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
