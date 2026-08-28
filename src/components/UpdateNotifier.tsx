import React, { useEffect, useRef, useState } from 'react';

// Detects when a newer build has been deployed by periodically re-fetching
// index.html and comparing its hashed script bundle to the one currently running.
// Works because Vite gives every build a new content hash (e.g. /assets/index-XXXX.js) —
// no service worker or extra build step needed.

const CHECK_INTERVAL_MS = 60_000;

function extractBundleSrc(html: string): string | null {
  const match = html.match(/<script[^>]*type="module"[^>]*src="([^"]+)"/i);
  return match ? match[1] : null;
}

export const UpdateNotifier: React.FC = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const currentBundleRef = useRef<string | null>(null);

  useEffect(() => {
    currentBundleRef.current = extractBundleSrc(document.documentElement.outerHTML);

    const checkForUpdate = async () => {
      if (!currentBundleRef.current || document.visibilityState !== 'visible') return;
      try {
        const res = await fetch('/', { cache: 'no-store' });
        const html = await res.text();
        const latestBundle = extractBundleSrc(html);
        if (latestBundle && latestBundle !== currentBundleRef.current) {
          setUpdateAvailable(true);
        }
      } catch {
        // Network hiccup — just try again next cycle.
      }
    };

    const interval = setInterval(checkForUpdate, CHECK_INTERVAL_MS);
    document.addEventListener('visibilitychange', checkForUpdate);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', checkForUpdate);
    };
  }, []);

  if (!updateAvailable || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-white rounded-2xl shadow-2xl border border-[#e1e3e4] p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7c3aed] via-[#c026d3] to-amber-400 text-white flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-[#191c1d]">Nova versão disponível</p>
          <p className="text-xs text-[#7b7487]">Atualize para ver as últimas melhorias.</p>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Fechar aviso de atualização"
          className="text-[#7b7487] hover:text-[#191c1d] p-1 rounded-full hover:bg-[#f3f4f5] transition-colors cursor-pointer shrink-0"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-md transition-all cursor-pointer shrink-0 active:scale-95"
        >
          Atualizar
        </button>
      </div>
    </div>
  );
};
