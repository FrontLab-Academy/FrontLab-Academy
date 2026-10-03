import assert from 'node:assert/strict'
import test from 'node:test'

import { roadmap } from '../src/data/roteiro.js'
import { tracks } from '../src/data/trilhas.js'

const tracksBySlug = new Map(tracks.map((track) => [track.slug, track]))

test('referências do roadmap apontam para módulos existentes', async (t) => {
  for (const [index, step] of roadmap.entries()) {
    await t.test(`etapa ${index + 1}: ${step.title}`, () => {
      const track = tracksBySlug.get(step.trail)

      assert.ok(track, `trilha inexistente: ${step.trail}`)
      assert.ok(Number.isInteger(step.mod), `índice de módulo não inteiro: ${step.mod}`)
      assert.ok(step.mod >= 0 && step.mod < track.modules.length,
        `módulo ${step.mod} fora da faixa da trilha ${step.trail} (0-${track.modules.length - 1})`)
    })
  }
})
