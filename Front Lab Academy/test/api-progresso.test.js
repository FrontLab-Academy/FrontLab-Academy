import assert from 'node:assert/strict'
import test from 'node:test'
import { progressApi } from '../src/server/progresso.js'

test('salva, consulta e remove progresso autenticado', () => {
  assert.equal(progressApi({ method: 'GET' }).status, 401)
  assert.equal(progressApi({ method: 'PUT', userId: 'u1', moduleId: 'm1', body: { state: 'started' } }).status, 200)
  assert.equal(progressApi({ method: 'GET', userId: 'u1' }).body.m1.state, 'started')
  assert.equal(progressApi({ method: 'DELETE', userId: 'u1', moduleId: 'm1' }).status, 204)
})
