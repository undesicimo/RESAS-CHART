export type Prefectures = Array<{
	prefCode: number;
	prefName: string;
}>;

type PrefectureResponse = {
	message: string | null;
	result: Prefectures;
};

export async function getPrefectures(): Promise<PrefectureResponse> {
	const res = await fetch(`${process.env.APP_BASE_URL}/api/prefectures`);
	return res.json();
}
