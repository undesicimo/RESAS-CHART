'use client';

import Charts from '@/components/Chart';
import PrefectureFilter from '@/components/Prefecturefilter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: Infinity,
		},
	},
});

export default function Home() {
	const [selectedPrefectures, setSelectedPrefectures] = useState<Array<number>>(
		[]
	);

	return (
		<QueryClientProvider client={queryClient}>
			<main>
				<PrefectureFilter
					setSelectedPrefectures={setSelectedPrefectures}
					selectedPrefectures={selectedPrefectures}
				/>
				<Charts selectedPrefectures={selectedPrefectures} />
			</main>
		</QueryClientProvider>
	);
}
