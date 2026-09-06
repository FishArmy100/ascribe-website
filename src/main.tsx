import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import ThemeSettingsProvider from '@components/providers/ThemeSettingsProvider'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CssBaseline />
		<ThemeSettingsProvider>
			<App />
		</ThemeSettingsProvider>
	</StrictMode>,
)
