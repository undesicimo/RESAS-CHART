import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const prefCode = searchParams.get('prefCode');
	const res = await fetch(
		`${process.env.RESAS_BASE_URL}/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
		{
			headers: {
				'X-API-KEY': process.env.RESAS_API_KEY,
			},
		}
	);
	const { result } = await res.json();

	return Response.json({ result });
}
