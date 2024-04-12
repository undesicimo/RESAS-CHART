import { trimSlash } from '@/common/urlUtils';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const prefCode = searchParams.get('prefCode');
	if (!prefCode) {
		new Response('prefCode is required', { status: 400 });
	}

	const res = await fetch(
		`${trimSlash(
			process.env.RESAS_BASE_URL
		)}/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
		{
			headers: {
				'X-API-KEY': process.env.RESAS_API_KEY,
			},
		}
	);

	if (!res.ok) {
		return new Response(`Failed to get population data: ${res.body}`, {
			status: res.status,
			statusText: res.statusText,
		});
	}

	const { result } = await res.json();
	return Response.json({ result });
}
