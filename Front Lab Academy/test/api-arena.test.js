import assert from 'node:assert/strict'
import test from 'node:test'
import { getArenaRanking, listArenaChallenges, submitArenaAttempt } from '../src/server/arena.js'

test('lista desafios, registra tentativa e atualiza ranking', () => {
  assert.ok(listArenaChallenges().length >= 2)
  assert.equal(submitArenaAttempt({ challengeId: 'semantic-card', passed: true }).status, 401)
  assert.equal(submitArenaAttempt({ userId: 'u1', challengeId: 'semantic-card', passed: true }).status, 201)
  assert.equal(getArenaRanking()[0].points, 100)
})
