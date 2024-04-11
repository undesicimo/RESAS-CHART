import { usePrefectureOptions } from '@/components/Prefecturefilter/hooks/usePrefectureOptions';
import { getPopulationComposition } from '@/services/population/getPopulationComposition';
import { useQueries } from '@tanstack/react-query';

type Params = {
	selectedPrefectures: Array<number>;
};

export function useChart({ selectedPrefectures }: Params) {
	const { data: prefectureOptions } = usePrefectureOptions();

	const results = useQueries({
		queries: selectedPrefectures.map(prefCode => {
			return {
				queryKey: [prefCode],
				queryFn: async () => {
					const res = await getPopulationComposition({ prefCode });
					const prefectureOption = prefectureOptions?.find(
						pref => pref.prefecture.prefCode === prefCode
					);
					const totalPopulation = res.result.data.find(
						f => f.label === '総人口'
					);

					return {
						id: prefectureOption?.prefecture.prefName,
						color: prefectureOption?.colorStroke,
						data: totalPopulation?.data.map(d => ({
							x: d.year,
							y: d.value,
						})),
					};
				},
			};
		}),
		combine: results => {
			return {
				data: results.map(result => result.data),
				pending: results.some(result => result.isPending),
				error: results.find(result => result.isError),
			};
		},
	});

	return results;
}
