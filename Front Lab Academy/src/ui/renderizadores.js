// Funcoes compartilhadas de renderizacao serao movidas para ca a partir do script.js.
export function renderProgressBar(percent, label = 'Progresso da trilha') {
  const value = Math.min(100, Math.max(0, Number(percent) || 0))
  return `
    <div class="progress-shell course-progress-shell" role="progressbar" aria-label="${label}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}">
      <div class="progress-fill" style="width:${value}%"></div>
    </div>
  `
}
