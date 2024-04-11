import { useChart } from './hooks/useChart';
import { ResponsiveLine, Serie } from '@nivo/line';
import './index.css';

interface ChartsProps {
	selectedPrefectures: Array<number>;
}

export default function Charts({ selectedPrefectures }: ChartsProps) {
	const { data, pending, error } = useChart({ selectedPrefectures });

	if (pending) {
		return (
			<section className='Chart'>
				<figure className='Chart-wrapper'>
					<p className='Skeleton-text'>{'データ取得中...'}</p>
				</figure>
			</section>
		);
	}

	if (error) {
		window.alert(error.error?.message);
		return null;
	}

	return (
		<section className='Chart'>
			<figure className='Chart-wrapper'>
				<span className='Chart-YAxisLabel'>{'人口数'}</span>
				<div className='LineChart-wrapper'>
					<LineChart data={data as readonly Serie[]} />
				</div>
				<span className='Chart-XAxisLabel'>{'年度'}</span>
			</figure>
		</section>
	);
}

const LineChart = ({ data }: { data: readonly Serie[] }) => (
	<ResponsiveLine
		data={data}
		colors={{ datum: 'color' }}
		margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
		xScale={{ type: 'point' }}
		yScale={{
			type: 'linear',
			min: 'auto',
			max: 'auto',
		}}
		yFormat={v => {
			return `${v.toLocaleString()}人`;
		}}
		xFormat={v => {
			return `${v}年`;
		}}
		axisBottom={{
			legendOffset: 40,
			legendPosition: 'end',
		}}
		axisLeft={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legendOffset: -40,
			legendPosition: 'end',
			truncateTickAt: 0,
		}}
		enablePoints={false}
		enableGridX={false}
		enableGridY={false}
		enableCrosshair={false}
		useMesh={true}
		legends={[
			{
				anchor: 'bottom-right',
				direction: 'column',
				justify: false,
				translateX: 100,
				translateY: 0,
				itemsSpacing: 0,
				itemDirection: 'left-to-right',
				itemWidth: 80,
				itemHeight: 20,
				itemOpacity: 0.75,
				symbolSize: 12,
				symbolShape: 'square',
				symbolBorderColor: 'rgba(0, 0, 0, .5)',
				effects: [
					{
						on: 'hover',
						style: {
							itemBackground: 'rgba(0, 0, 0, .03)',
							itemOpacity: 1,
						},
					},
				],
			},
		]}
	/>
);
