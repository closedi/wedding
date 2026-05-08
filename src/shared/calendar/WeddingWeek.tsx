import React, {CSSProperties, useMemo} from 'react';
import './WeddingWeek.css';

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const WeddingWeek = ({
	                     weddingDate,       // ISO строка или Date, например: "2026-08-24"
	                     accentColor,       // цвет заголовков
	                     highlightColor    // цвет дня свадьбы
                     }: any) => {
	const week = useMemo(() => {
		const target = new Date(weddingDate);
		if (isNaN(target.getTime())) return [];

		// Находим понедельник этой недели
		const monday = new Date(target);
		const jsDay = monday.getDay(); // 0=Вс, 1=Пн ... 6=Сб
		const diff = jsDay === 0 ? -6 : 1 - jsDay;
		monday.setDate(target.getDate() + diff);

		const days = [];
		for (let i = 0; i < 7; i++) {
			const d = new Date(monday);
			d.setDate(monday.getDate() + i);
			days.push(d);
		}
		return days;
	}, [weddingDate]);

	const cssVars: Record<string, CSSProperties> = {
		'--wedding-accent': accentColor || '#c9a87c',
		'--wedding-highlight': highlightColor || '#e8b4b8',
	};

	const isWedding = (date: any) => {
		const target = new Date(weddingDate);
		return date.toDateString() === target.toDateString();
	};

	return (
		<div className="wedding-week" style={cssVars}>
			<h2>15 августа 2026</h2>
			<div className="calendar-grid week-grid">
				{WEEKDAYS.map((day) => (
					<div key={day} className="day-header">{day}</div>
				))}
				{week.map((date, idx) => {
					const isWeddingDay = isWedding(date);
					const monthShort = date.toLocaleString('ru-RU', { month: 'short' });

					return (
						<div
							key={idx}
							className={`day ${isWeddingDay ? 'wedding-day' : ''}`}
						>
							<span className="day-number">{date.getDate()}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default React.memo(WeddingWeek);