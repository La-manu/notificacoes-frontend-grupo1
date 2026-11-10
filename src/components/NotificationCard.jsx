function NotificationCard({ canal, hora, titulo, texto, lida }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
      <div className="flex gap-2 text-xs font-mono text-gray-500 mb-2">
        <span className="bg-[color-mix(in_srgb,var(--color-marca-5)_20%,transparent)] text-blue-900 px-2 py-0.5 rounded font-semibold">
          {canal}
        </span>

        <span>{hora}</span>
        {!lida && <span>não lida</span>}
      </div>
      <h2 className="font-semibold text-base mb-1 text-gray-900">{titulo}</h2>
      <p className="text-gray-600 text-sm">{texto}</p>
    </div>
  );
}

export default NotificationCard;
