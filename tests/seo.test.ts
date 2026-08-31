import test from 'node:test'
import assert from 'node:assert/strict'
import { resolveRouteMetadata } from '../src/lib/seo.ts'

test('keeps public routes crawlable while release indexing is gated', () => {
  const metadata = resolveRouteMetadata('/recettes', undefined, false)
  assert.equal(metadata.title, 'Recettes — Oria Nutrition')
  assert.equal(metadata.robots, 'noindex,follow')
})

test('accepts content-derived metadata for detail routes', () => {
  const metadata = resolveRouteMetadata(
    '/recettes/bowl-quinoa-courge-pois-chiches',
    { title: 'Bowl quinoa, courge & pois chiches — Oria Nutrition', description: 'Une recette pensée pour un poste.' },
    false,
  )
  assert.equal(metadata.title, 'Bowl quinoa, courge & pois chiches — Oria Nutrition')
  assert.match(metadata.description, /poste/)
  assert.equal(metadata.robots, 'noindex,follow')
})

test('keeps the client space and unknown routes out of indexing and crawling', () => {
  assert.equal(resolveRouteMetadata('/espace-client', undefined, true).robots, 'noindex,nofollow')
  assert.equal(resolveRouteMetadata('/inconnue', undefined, true).title, 'Page introuvable — Oria Nutrition')
  assert.equal(resolveRouteMetadata('/inconnue', undefined, true).robots, 'noindex,nofollow')
})
