import { trimSlash } from '@/common/urlUtils';

export type Prefectures = Array<{
	prefCode: number;
	prefName: string;
}>;

type PrefectureResponse = {
	message: string | null;
	result: Prefectures;
};

export async function getPrefectures(): Promise<PrefectureResponse> {
	const res = await fetch(
		`${trimSlash(process.env.NEXT_PUBLIC_APP_BASE_URL)}/api/prefectures`
	);

	if (!res.ok) {
		throw new Error('データの取得が失敗しました、再度お試し下さい');
	}

	return res.json();
}
