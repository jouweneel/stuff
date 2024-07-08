import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import App from './App.tsx';
import { ThemeProvider } from './providers/theme.tsx';

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme='dark' storageKey='stuff-theme'>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
