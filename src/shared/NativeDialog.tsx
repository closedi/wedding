import { useRef, useEffect } from 'react';

export default function NativeDialog({ isOpen, onClose, title, children }) {
	const dialogRef = useRef(null);

	// Синхронизация React-состояния с нативным API диалога
	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (isOpen && !dialog.open) {
			dialog.showModal(); // Открывает как модалку (с backdrop)
		} else if (!isOpen && dialog.open) {
			dialog.close();     // Закрывает
		}
	}, [isOpen]);

	return (
		<dialog ref={dialogRef} onClose={onClose}>
			<div className="dialog-body">{children}</div>
			<div className="dialog-footer">
				<button className="close-btn" onClick={onClose}>Закрыть</button>
			</div>
		</dialog>
	);
}