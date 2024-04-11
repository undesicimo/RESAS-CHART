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

	if (!res.ok) {
		throw new Error('データの取得が失敗しました、再度お試し下さい');
	}

	return res.json();
}
