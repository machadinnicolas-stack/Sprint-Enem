import React, { useState } from 'react';
import { REDACAO_THEMES } from '../data/enemData';
import { RedacaoTheme } from '../types';
import { supabase } from '../services/supabase';

interface RedacaoHubProps {
  onEvaluationComplete?: (score: number) => void;
}

const MINIMUM_LINES = 8;

const GENERIC_ERROR =
  'A correção por IA está indisponível no momento. Seu texto não foi perdido — tente novamente em alguns minutos.';

// A grade is only ever shown when it came from the grader. The checklist variant
// carries no score on purpose: a keyword scan cannot tell whether an essay is
// good, and showing a number next to it would read as a grade.
type EvaluationResult =
  | {
      kind: 'ai';
      totalScore: number;
      generalComment: string;
      competencies: { name: string; score: number; tip: string }[];
    }
  | { kind: 'checklist'; items: { name: string; ok: boolean; tip: string }[] };

export const RedacaoHub: React.FC<RedacaoHubProps> = ({ onEvaluationComplete }) => {
  const [themes] = useState<RedacaoTheme[]>(REDACAO_THEMES);
  const [selectedTheme, setSelectedTheme] = useState<RedacaoTheme>(REDACAO_THEMES[0]);
  const [draftText, setDraftText] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const wordCount = draftText.trim() ? draftText.trim().split(/\s+/).length : 0;
  const lineEstimate = Math.ceil(wordCount / 10);
  const hasMinimumLines = lineEstimate >= MINIMUM_LINES;
  const linesRemaining = Math.max(0, MINIMUM_LINES - lineEstimate);

  const handleEvaluate = async () => {
    if (!draftText.trim() || !hasMinimumLines) return;
    setIsEvaluating(true);
    setResult(null);
    setError(null);

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const accessToken = sessionData.session?.access_token;

      const response = await fetch('/api/evaluate-redacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
        },
        body: JSON.stringify({
          theme: selectedTheme.title,
          text: draftText
        })
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setError(data?.error ?? GENERIC_ERROR);
        return;
      }

      if (data?.aiEvaluated) {
        setResult({
          kind: 'ai',
          totalScore: data.totalScore,
          generalComment: data.generalComment,
          competencies: data.competencies ?? []
        });
        onEvaluationComplete?.(data.totalScore);
        return;
      }

      setResult({ kind: 'checklist', items: data?.checklist ?? [] });
    } catch {
      setError(GENERIC_ERROR);
    } finally {
      setIsEvaluating(false);
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
                setResult(null);
                setError(null);
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

        {/* Grading unavailable — no score is invented to fill the gap. */}
        {error && (
          <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 animate-in fade-in duration-300">
            <span className="material-symbols-outlined text-amber-700 text-[20px]">cloud_off</span>
            <div>
              <h3 className="text-sm font-bold text-amber-900">Não foi possível corrigir agora</h3>
              <p className="text-xs text-amber-800 mt-0.5">{error}</p>
              <button
                type="button"
                onClick={handleEvaluate}
                disabled={isEvaluating}
                className="mt-2.5 px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs transition-all cursor-pointer disabled:opacity-50"
              >
                Tentar novamente
              </button>
            </div>
          </div>
        )}

        {/* Real AI grading — the only path that shows a score. */}
        {result?.kind === 'ai' && (
          <div className="mt-6 p-5 rounded-2xl bg-[#ede0ff]/50 border border-[#7c3aed]/30 space-y-4 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#7c3aed]/20">
              <div>
                <span className="text-xs font-bold text-[#630ed4] uppercase tracking-wider">
                  Diagnóstico por Competências (INEP)
                </span>
                <h3 className="text-lg font-extrabold text-[#191c1d]">
                  {result.generalComment}
                </h3>
              </div>
              <div className="bg-[#7c3aed] text-white px-4 py-2 rounded-xl text-center shadow-xs shrink-0">
                <span className="text-[10px] uppercase block opacity-80">Nota Estimada</span>
                <span className="text-2xl font-black">{result.totalScore}</span>
                <span className="text-[10px] block opacity-80">/ 1000</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {result.competencies.map((comp, idx) => (
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

            <p className="text-[11px] text-[#7b7487]">
              Estimativa gerada por IA com base nos critérios do INEP. A nota oficial do ENEM é atribuída por
              avaliadores humanos e pode divergir.
            </p>
          </div>
        )}

        {/* Daily AI quota spent — structural checklist only, deliberately no score. */}
        {result?.kind === 'checklist' && (
          <div className="mt-6 p-5 rounded-2xl bg-[#f8f9fa] border border-[#e1e3e4] space-y-4 animate-in fade-in duration-300">
            <div className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
              Você já usou suas correções por IA de hoje. Abaixo está uma verificação estrutural automática do seu
              texto — ela não atribui nota. Volte amanhã para uma nova correção por IA.
            </div>

            <div>
              <span className="text-xs font-bold text-[#4a4455] uppercase tracking-wider">
                Verificação estrutural
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                {result.items.map((item, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-[#e1e3e4]">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span
                        className={`material-symbols-outlined text-[16px] ${
                          item.ok ? 'text-[#047857]' : 'text-amber-700'
                        }`}
                      >
                        {item.ok ? 'check_circle' : 'error'}
                      </span>
                      <span className="font-bold text-xs text-[#191c1d]">{item.name}</span>
                    </div>
                    <p className="text-xs text-[#4a4455]">{item.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
