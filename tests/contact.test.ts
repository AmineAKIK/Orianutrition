import test from 'node:test'
import assert from 'node:assert/strict'
import { buildContactMailto } from '../src/lib/contact.ts'

test('builds a mailto URL from trimmed contact data', () => {
  const url = buildContactMailto('bonjour@example.test', {
    firstName: '  Camille ',
    email: ' camille@example.test ',
    message: ' Bonjour Oria. ',
  })
  assert.ok(url.startsWith('mailto:bonjour@example.test?'))
  assert.ok(url.includes('Camille'))
  assert.ok(url.includes('camille%40example.test'))
  assert.ok(url.includes('Bonjour%20Oria.'))
})
