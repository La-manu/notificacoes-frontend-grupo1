function NotificationCard({ canal, hora, titulo, texto, lida }) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
            <div className="flex gap-2 text-xs font-mono text-gray-500 mb-2">
                <span className="bg-teal-50 text-marca px-2 py-0.5 rounded">
                    {canal}
                </span>
                <span>{hora}</span>
                {!lida && <span>não lida</span>}
            </div>
            <h3 className="font-semibold text-base mb-1">{titulo}</h3>
            <p className="text-gray-600 text-sm">{texto}</p>
        </div>
    );
}
export default NotificationCard;