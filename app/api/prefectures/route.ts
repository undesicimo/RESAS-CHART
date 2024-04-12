import { trimSlash } from '@/common/urlUtils';

export async function GET(request: Request) {
	const res = await fetch(
		`${trimSlash(process.env.RESAS_BASE_URL)}/api/v1/prefectures`,
		{
			headers: {
				'X-API-KEY': process.env.RESAS_API_KEY,
			},
		}
	);
	const { result } = await res.json();

	return Response.json({ result });
}
