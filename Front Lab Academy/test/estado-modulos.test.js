import assert from 'node:assert/strict'
import test from 'node:test'

import {
  calculateProgressSummary,
  getModuleHash,
  getModuleIndexFromHash,
  resolveModuleProgressState,
  setModuleCompletion
} from '../src/features/estado-modulos.js'

test('resolve e limita o módulo indicado pelo hash', () => {
  assert.equal(getModuleIndexFromHash('#mod-3', 10), 3)
  assert.equal(getModuleIndexFromHash('#mod-99', 10), 9)
  assert.equal(getModuleIndexFromHash('#invalido', 10), 0)
  assert.equal(getModuleHash(-2, 10), '#mod-0')
  assert.equal(getModuleHash(12, 10), '#mod-9')
})

test('marca e desmarca conclusão sem alterar os outros módulos', () => {
  const initial = { modules: { 0: { completedAt: 'anterior' } } }
  const completed = setModuleCompletion(initial, 1, true, 'agora')

  assert.equal(completed.modules[0].completedAt, 'anterior')
  assert.equal(completed.modules[1].completedAt, 'agora')
  assert.equal(setModuleCompletion(completed, 1, false).modules[1].completedAt, null)
})

test('recalcula totais, andamento e percentual', () => {
  assert.deepEqual(calculateProgressSummary(['completed', 'started', 'idle', 'completed']), {
    total: 4,
    completed: 2,
    started: 1,
    percent: 50
  })
  assert.deepEqual(calculateProgressSummary([]), { total: 0, completed: 0, started: 0, percent: 0 })
})

test('deriva os três estados de progresso', () => {
  assert.equal(resolveModuleProgressState(null, null), 'idle')
  assert.equal(resolveModuleProgressState(null, { html: '<main></main>' }), 'started')
  assert.equal(resolveModuleProgressState('agora', { html: '' }), 'completed')
})
