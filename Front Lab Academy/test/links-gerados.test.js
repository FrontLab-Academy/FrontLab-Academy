import assert from 'node:assert/strict'
import { access } from 'node:fs/promises'
import test from 'node:test'

import { practiceItems } from '../src/data/praticas.js'
import { tracks } from '../src/data/trilhas.js'

const pages = new URL('../src/pages/', import.meta.url)

test('destinos gerados pelas jornadas existem e têm origem identificável', async (t) => {
  const links = [
    ...tracks.filter((track) => track.available).map((track) => ({ origin: `trilha:${track.slug}`, target: 'modulos.html' })),
    ...Object.entries(practiceItems).flatMap(([type, items]) => items.map((item) => ({ origin: `${type}:${item.slug}`, target: 'pratica.html' })))
  ]

  assert.ok(links.length > 0)
  for (const link of links) {
    await t.test(`${link.origin} -> ${link.target}`, async () => {
      await assert.doesNotReject(access(new URL(link.target, pages)))
    })
  }
})
