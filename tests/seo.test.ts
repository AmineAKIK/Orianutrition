import test from 'node:test'
import assert from 'node:assert/strict'
import { resolveRouteMetadata } from '../src/lib/seo.ts'

test('resolves stable metadata for a public route while release indexing is gated', () => {
  const metadata = resolveRouteMetadata('/recettes', undefined, false)
  assert.equal(metadata.title, 'Recettes — Oria Nutrition')
  assert.equal(metadata.robots, 'noindex,nofollow')
})

test('accepts content-derived metadata for detail routes', () => {
  const metadata = resolveRouteMetadata(
    '/recettes/bowl-quinoa-courge-pois-chiches',
    { title: 'Bowl quinoa, courge & pois chiches — Oria Nutrition', description: 'Une recette pensée pour un poste.' },
    false,
  )
  assert.equal(metadata.title, 'Bowl quinoa, courge & pois chiches — Oria Nutrition')
  assert.match(metadata.description, /poste/)
})

test('keeps the client space and unknown routes out of indexing', () => {
  assert.equal(resolveRouteMetadata('/espace-client', undefined, true).robots, 'noindex,nofollow')
  assert.equal(resolveRouteMetadata('/inconnue', undefined, true).title, 'Page introuvable — Oria Nutrition')
  assert.equal(resolveRouteMetadata('/inconnue', undefined, true).robots, 'noindex,nofollow')
})
