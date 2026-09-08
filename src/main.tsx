import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import ThemeSettingsProvider from '@components/providers/ThemeSettingsProvider'
import { I18nFileProvider } from '@fisharmy100/react-auto-i18n'
import translations from './assets/translations/translations.json?url';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CssBaseline />
		<I18nFileProvider path={translations} defaultLang='eng_Latn' >
			<ThemeSettingsProvider>
				<App />
			</ThemeSettingsProvider>
		</I18nFileProvider>
	</StrictMode>,
)
