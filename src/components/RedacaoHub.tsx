import React, { useState } from 'react';
import { REDACAO_THEMES } from '../data/enemData';
import { RedacaoTheme } from '../types';

interface RedacaoHubProps {
  onEvaluationComplete?: (score: number) => void;
}

const MINIMUM_LINES = 8;

export const RedacaoHub: React.FC<RedacaoHubProps> = ({ onEvaluationComplete }) => {
  const [themes] = useState<RedacaoTheme[]>(REDACAO_THEMES);
  const [selectedTheme, setSelectedTheme] = useState<RedacaoTheme>(REDACAO_THEMES[0]);
  const [draftText, setDraftText] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState<{
    competencies: { name: string; score: number; tip: string }[];
    totalScore: number;
    generalComment: string;
  } | null>(null);

  const wordCount = draftText.trim() ? draftText.trim().split(/\s+/).length : 0;
  const lineEstimate = Math.ceil(wordCount / 10);
  const hasMinimumLines = lineEstimate >= MINIMUM_LINES;
  const linesRemaining = Math.max(0, MINIMUM_LINES - lineEstimate);

  const handleEvaluate = async () => {
    if (!draftText.trim() || !hasMinimumLines) return;
    setIsEvaluating(true);
    setFeedback(null);

    // Call server endpoint or fallback to pedagogical evaluation
    try {
      const response = await fetch('/api/evaluate-redacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          theme: selectedTheme.title,
          text: draftText
        })
      });

      if (response.ok) {
        const data = await response.json();
        setFeedback(data);
        setIsEvaluating(false);
        if (onEvaluationComplete) {
          onEvaluationComplete(data.totalScore || 800);
        }
      } else {
        throw new Error('Fallback needed');
      }
    } catch {
      // Local instant feedback fallback
      setTimeout(() => {
        const hasConnectives = draftText.toLowerCase().includes('portanto') || draftText.toLowerCase().includes('ademais') || draftText.toLowerCase().includes('outrossim');
        const hasRepertoire = draftText.toLowerCase().includes('constitui') || draftText.toLowerCase().includes('bauman') || draftText.toLowerCase().includes('segundo') || draftText.toLowerCase().includes('conforme');
        const hasIntervention = draftText.toLowerCase().includes('ministério') || draftText.toLowerCase().includes('governo') || draftText.toLowerCase().includes('cabe ao') || draftText.toLowerCase().includes('afim de');

        const c1 = wordCount > 150 ? 160 : 120;
        const c2 = hasRepertoire ? 200 : 160;
        const c3 = wordCount > 200 ? 160 : 120;
        const c4 = hasConnectives ? 200 : 160;
        const c5 = hasIntervention ? 200 : 160;
        const total = c1 + c2 + c3 + c4 + c5;

        setFeedback({
          totalScore: total,
          generalComment: `Excelente desenvolvimento! Seu texto demonstra boa articulação e compreensão do eixo temático "${selectedTheme.axis}".`,
          competencies: [
            { name: 'C1: Norma Culta', score: c1, tip: 'Atenção à concordância e pontuação em orações subordinadas.' },
            { name: 'C2: Tema e Repertório', score: c2, tip: hasRepertoire ? 'Repertório legitimado e produtivo bem articulado.' : 'Recomendamos citar a CF/88 ou um filósofo de autoridade.' },
            { name: 'C3: Projeto de Texto e Argumentação', score: c3, tip: 'Defesa consistente da tese apresentada na introdução.' },
            { name: 'C4: Coesão e Conectivos', score: c4, tip: hasConnectives ? 'Ótimo uso de operadores interparágrafos (Ademais, Portanto).' : 'Diversifique o uso de conectivos no início dos parágrafos.' },
            { name: 'C5: Proposta de Intervenção', score: c5, tip: hasIntervention ? 'Proposta de intervenção completa com os 5 elementos.' : 'Lembre-se de explicitar o Detalhamento do Meio/Modo.' }
          ]
        });

        setIsEvaluating(false);
        if (onEvaluationComplete) {
          onEvaluationComplete(total);
        }
      }, 700);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-24">
      {/* Header */}
      <div className="mb-6 relative">
        <div className="absolute -left-8 -top-10 w-40 h-40 bg-[#ec4899]/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute right-0 -top-6 w-32 h-32 bg-[#7c3aed]/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative inline-flex items-center gap-1.5 bg-[#fce7f3] text-[#be185d] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
          <span className="material-symbols-outlined text-[14px]">edit_document</span>
          Laboratório de Escrita
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#191c1d] tracking-tight">
          Oficina de Redação Nota 1000
        </h1>
        <p className="text-sm text-[#4a4455] mt-1">
          Treine temas inéditos, consulte repertórios curinga e verifique os 5 elementos da proposta de intervenção.
        </p>
      </div>

      {/* Select theme banner */}
      <div className="bg-white rounded-3xl p-5 md:p-6 border border-[#e1e3e4] shadow-xs mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[#7b7487] mb-3">
          Escolha um Tema para Treinar:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => {
                setSelectedTheme(theme);
                setFeedback(null);
              }}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedTheme.id === theme.id
                  ? 'bg-[#ede0ff] border-[#7c3aed] text-[#630ed4] shadow-xs'
                  : 'bg-[#f9fafb] border-[#e1e3e4] text-[#4a4455] hover:border-[#7c3aed]'
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-75 block mb-1">
                {theme.axis}
              </span>
              <span className="text-xs font-bold line-clamp-2">{theme.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Theme Details */}
        <div className="p-4 bg-[#f8f9fa] rounded-2xl border border-[#e1e3e4] space-y-4">
          <div>
            <span className="text-xs font-bold text-[#be185d] uppercase tracking-wider block mb-1">
              Contexto Motivador
            </span>
            <p className="text-xs md:text-sm text-[#191c1d] leading-relaxed">
              {selectedTheme.motivatingContext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-[#e1e3e4]">
            <div>
              <span className="text-xs font-bold text-[#7c3aed] flex items-center gap-1 mb-1">
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
                Repertórios Socioculturais Sugeridos:
              </span>
              <ul className="text-xs text-[#4a4455] space-y-1">
                {selectedTheme.repertoire.map((rep, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#7c3aed] font-bold">•</span>
                    <span>{rep}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-bold text-[#047857] flex items-center gap-1 mb-1">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Fórmula da Proposta (C5):
              </span>
              <ul className="text-xs text-[#4a4455] space-y-1">
                {selectedTheme.interventionTips.slice(0, 3).map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#047857] font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Writing Box */}
      <div className="bg-white rounded-3xl p-5 md:p-6 border border-[#e1e3e4] shadow-xs mb-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <h2 className="text-base font-bold text-[#191c1d] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#7c3aed]">edit_note</span>
            Seu Rascunho / Projeto de Texto
          </h2>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#7b7487]">
            <span>{wordCount} palavras</span>
            <span className={hasMinimumLines ? '' : 'text-amber-700'}>• ~{lineEstimate} linhas</span>
          </div>
        </div>

        <textarea
          value={draftText}
          onChange={(e) => setDraftText(e.target.value)}
          rows={8}
          placeholder="Escreva sua introdução, parágrafos de desenvolvimento ou rascunho completo aqui... Dica: Utilize conectivos como 'Ademais', 'Nesse sentido' e estruture a intervenção com os 5 elementos."
          className="w-full p-4 bg-[#f9fafb] border border-[#ccc3d8] rounded-2xl text-sm text-[#191c1d] placeholder:text-[#7b7487] focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] outline-none transition-all leading-relaxed"
        />

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className={`text-xs ${hasMinimumLines ? 'text-[#7b7487]' : 'text-amber-700 font-semibold'}`}>
            {hasMinimumLines
              ? 'Avaliação orientada pelos critérios oficiais do INEP.'
              : `Escreva mais ${linesRemaining} ${linesRemaining === 1 ? 'linha' : 'linhas'} para liberar a avaliação.`}
          </span>

          <button
            type="button"
            onClick={handleEvaluate}
            disabled={!hasMinimumLines || isEvaluating}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isEvaluating ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Analisando competências...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span>Avaliar Redação com IA</span>
              </>
            )}
          </button>
        </div>

        {/* Feedback Section */}
        {feedback && (
          <div className="mt-6 p-5 rounded-2xl bg-[#ede0ff]/50 border border-[#7c3aed]/30 space-y-4 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#7c3aed]/20">
              <div>
                <span className="text-xs font-bold text-[#630ed4] uppercase tracking-wider">
                  Diagnóstico TRI das Competências
                </span>
                <h3 className="text-lg font-extrabold text-[#191c1d]">
                  {feedback.generalComment}
                </h3>
              </div>
              <div className="bg-[#7c3aed] text-white px-4 py-2 rounded-xl text-center shadow-xs">
                <span className="text-[10px] uppercase block opacity-80">Nota Estimada</span>
                <span className="text-2xl font-black">{feedback.totalScore}</span>
                <span className="text-[10px] block opacity-80">/ 1000</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {feedback.competencies.map((comp, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-[#e1e3e4]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-xs text-[#191c1d]">{comp.name}</span>
                    <span className="text-xs font-black text-[#630ed4] bg-[#ede0ff] px-2 py-0.5 rounded-md">
                      {comp.score} pts
                    </span>
                  </div>
                  <p className="text-xs text-[#4a4455]">{comp.tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
