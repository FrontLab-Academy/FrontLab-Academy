export function clampModuleIndex(index, moduleCount) {
  const lastIndex = Math.max(0, moduleCount - 1)
  const numericIndex = Number.isFinite(Number(index)) ? Number(index) : 0
  return Math.min(Math.max(Math.trunc(numericIndex), 0), lastIndex)
}

export function getModuleIndexFromHash(hash, moduleCount) {
  const match = String(hash).match(/^#mod-(\d+)$/)
  return clampModuleIndex(match ? Number(match[1]) : 0, moduleCount)
}

export function getModuleHash(index, moduleCount) {
  return `#mod-${clampModuleIndex(index, moduleCount)}`
}

export function setModuleCompletion(progress, index, isComplete, completedAt = new Date().toISOString()) {
  const modules = progress?.modules && typeof progress.modules === 'object' ? progress.modules : {}
  const key = String(index)
  const current = modules[key] || {}

  return {
    ...progress,
    modules: {
      ...modules,
      [key]: {
        completedAt: isComplete ? current.completedAt || completedAt : null
      }
    }
  }
}

export function calculateProgressSummary(states) {
  const total = states.length
  const completed = states.filter((state) => state === 'completed').length
  const started = states.filter((state) => state === 'started').length

  return {
    total,
    completed,
    started,
    percent: total ? Math.round((completed / total) * 100) : 0
  }
}

export function resolveModuleProgressState(completedAt, draft) {
  if (completedAt) return 'completed'
  if (draft && Object.values(draft).some((value) => String(value).trim())) return 'started'
  return 'idle'
}
