import Head from 'next/head';
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }) => (
	<html
		lang="en"
	>
		<Head>
			<meta
				charset="UTF-8"
			/>
			<meta
				httpEquiv="X-UA-Compatible"
				content="IE=edge"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
				rel="stylesheet"
			/>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap"
				rel="stylesheet"
			/>
			<title>Kanban</title>
		</Head>
		<body>
			<Component
				{...pageProps}
			/>
		</body>
	</html>
);

export default MyApp;
