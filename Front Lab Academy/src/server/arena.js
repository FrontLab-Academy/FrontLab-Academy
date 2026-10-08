const challenges = [
  { id: 'semantic-card', title: 'Card semântico', points: 100 },
  { id: 'responsive-grid', title: 'Grid responsivo', points: 150 }
]
const attempts = []

export function listArenaChallenges() {
  return challenges.map((challenge) => ({ ...challenge }))
}

export function submitArenaAttempt({ userId, challengeId, passed }) {
  if (!userId) return { status: 401, body: { error: 'authentication_required' } }
  const challenge = challenges.find((item) => item.id === challengeId)
  if (!challenge || typeof passed !== 'boolean') return { status: 400, body: { error: 'invalid_attempt' } }
  const attempt = {
    id: `attempt-${attempts.length + 1}`,
    userId,
    challengeId,
    status: passed ? 'passed' : 'failed',
    score: passed ? challenge.points : 0
  }
  attempts.push(attempt)
  return { status: 201, body: attempt }
}

export function getArenaRanking() {
  const totals = new Map()
  attempts.filter((attempt) => attempt.status === 'passed').forEach((attempt) => {
    totals.set(attempt.userId, (totals.get(attempt.userId) || 0) + attempt.score)
  })
  return [...totals].map(([userId, points]) => ({ userId, points })).sort((a, b) => b.points - a.points)
}
