import { describe, expect, it } from 'vitest'
import { brand, demo } from './site'

describe('portfolio safety contract', () => {
  it('keeps the public project explicitly fictional', () => {
    expect(brand.name).toBe('Oria Nutrition')
    expect(brand.repositoryName).toBe('Orianutrition')
    expect(demo.isPortfolioCaseStudy).toBe(true)
  })

  it('keeps every real-data capability disabled by default', () => {
    expect(demo).toMatchObject({
      collectsPersonalData: false,
      hasRealAuthentication: false,
      hasRealBooking: false,
    })
  })
})
