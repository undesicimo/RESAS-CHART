import { trimSlash } from '@/common/urlUtils';

type PopulationCompositionData = Array<{
	year: number;
	value: number;
}>;

type PopulationComposition = {
	boundaryYear: number;
	data: Array<{
		label: string;
		data: PopulationCompositionData;
	}>;
};

type PopulationCompositionResponse = {
	message: string | null;
	result: PopulationComposition;
};

type Params = {
	prefCode: number;
};
export async function getPopulationComposition({
	prefCode,
}: Params): Promise<PopulationCompositionResponse> {
	const res = await fetch(
		`${trimSlash(
			process.env.NEXT_PUBLIC_APP_BASE_URL
		)}/api/population?prefCode=${prefCode}`
	);

	if (!res.ok) {
		throw new Error('データの取得が失敗しました、再度お試し下さい');
	}

	return res.json();
}
