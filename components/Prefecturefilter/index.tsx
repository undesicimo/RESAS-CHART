import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { usePrefectureOptions } from './hooks/usePrefectureOptions';
import './index.css';

interface PrefectureFilter {
	setSelectedPrefectures: Dispatch<SetStateAction<number[]>>;
	selectedPrefectures: number[];
}

export default function PrefectureFilter({
	setSelectedPrefectures,
	selectedPrefectures,
}: PrefectureFilter) {
	const { data } = usePrefectureOptions();
	const onCheckChaged = (
		e: ChangeEvent<HTMLInputElement>,
		prefCode: number
	) => {
		if (e.currentTarget.checked) {
			setSelectedPrefectures(curr => {
				return [...curr, prefCode];
			});
		} else {
			setSelectedPrefectures(curr => {
				return curr.filter(e => e !== prefCode);
			});
		}
	};
	const onClearButtonClicked = () => {
		setSelectedPrefectures([]);
	};

	return (
		<section className={`PrefectureFilter-wrapper`}>
			<label>{'都道府県'}</label>
			<button
				onClick={onClearButtonClicked}
				className='clearButton'>
				{'クリア'}
			</button>
			<div className={`PrefectureFilter-options-wrapper`}>
				{data?.map(d => (
					<div
						key={d.prefecture.prefCode}
						className='PrefectureFilter-options'>
						<input
							onChange={e => onCheckChaged(e, d.prefecture.prefCode)}
							type='checkbox'
							name={d.prefecture.prefName}
							value={d.prefecture.prefCode}
							checked={selectedPrefectures.includes(d.prefecture.prefCode)}
						/>
						<div className='PrefectureFilter-label-wrapper'>
							<label
								className='PrefectureFilter-options-label'
								htmlFor={d.prefecture.prefName}>
								{d.prefecture.prefName}
							</label>
							<IndicatorIcon fill={d.colorStroke} />
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function IndicatorIcon({ fill }: { fill: string }) {
	return (
		<svg
			width='10'
			height='10'>
			<path
				d='M0 0 H 10 V 10 H 0 Z'
				fill={fill}
			/>
		</svg>
	);
}
