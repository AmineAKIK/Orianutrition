import test from 'node:test'
import assert from 'node:assert/strict'
import { publicBasePath, publicOrigin, publicSiteUrl } from '../src/config/release.ts'

test('keeps the public release identity internally consistent', () => {
  assert.ok(publicBasePath.startsWith('/'))
  assert.ok(publicBasePath.endsWith('/'))
  assert.equal(publicBasePath, publicBasePath.toLowerCase())
  assert.equal(publicSiteUrl, `${publicOrigin}${publicBasePath}`)
})
