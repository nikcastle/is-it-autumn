import React from 'react';
import Wrapper from './components/Wrapper';
import DateProvider from './contexts/DateContext';

function App() {
	return (
		<DateProvider>
			<Wrapper />;
		</DateProvider>
	);
}

export default App;
