const progressByUser = new Map()

export function progressApi({ method, userId, moduleId, body }) {
  if (!userId) return { status: 401, body: { error: 'authentication_required' } }
  const progress = progressByUser.get(userId) || new Map()

  if (method === 'GET') return { status: 200, body: Object.fromEntries(progress) }
  if (!moduleId) return { status: 400, body: { error: 'module_id_required' } }

  if (method === 'DELETE') {
    progress.delete(moduleId)
    progressByUser.set(userId, progress)
    return { status: 204 }
  }

  if (method === 'PUT' && ['idle', 'started', 'completed'].includes(body?.state)) {
    const record = { state: body.state, updatedAt: new Date().toISOString() }
    progress.set(moduleId, record)
    progressByUser.set(userId, progress)
    return { status: 200, body: record }
  }

  return { status: 400, body: { error: 'invalid_progress' } }
}
