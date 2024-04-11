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
		`${process.env.APP_BASE_URL}/api/population?prefCode=${prefCode}`
	);
	return res.json();
}
