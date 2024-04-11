import { getPrefectures } from '@/services/prefectures/getPrefectures';
import { useQuery } from '@tanstack/react-query';

const PREFECTURE_FETCH_KEY = 'PREFECTURE_FETCH_KEY';
export function usePrefectureOptions() {
	const results = useQuery({
		queryFn: async () => {
			const res = await getPrefectures();
			return res.result.map(prefecture => ({
				prefecture: {
					prefCode: prefecture.prefCode,
					prefName: prefecture.prefName,
				},
				colorStroke: getLineStrokeColor(),
			}));
		},
		queryKey: [PREFECTURE_FETCH_KEY],
	});

	return results;
}

const getLineStrokeColor = () => {
	return `hsl(${Math.floor(Math.random() * 360)}, 100%, 40%)`;
};
