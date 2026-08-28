export interface SleepDuration {
  hours: number
  minutes: number
}

export interface SleepGapResult {
  targetMinutes: number
  observedMinutes: number
  differenceMinutes: number
  status: 'below' | 'aligned' | 'above'
}

export function durationToMinutes({ hours, minutes }: SleepDuration): number {
  if (!Number.isInteger(hours) || !Number.isInteger(minutes) || hours < 0 || minutes < 0 || minutes > 59) {
    throw new RangeError('Invalid sleep duration')
  }
  return hours * 60 + minutes
}

export function calculateSleepGap(target: SleepDuration, observed: SleepDuration): SleepGapResult {
  const targetMinutes = durationToMinutes(target)
  const observedMinutes = durationToMinutes(observed)
  const differenceMinutes = observedMinutes - targetMinutes
  return {
    targetMinutes,
    observedMinutes,
    differenceMinutes,
    status: differenceMinutes < 0 ? 'below' : differenceMinutes > 0 ? 'above' : 'aligned',
  }
}

export function formatDuration(totalMinutes: number): string {
  const absolute = Math.abs(totalMinutes)
  const hours = Math.floor(absolute / 60)
  const minutes = absolute % 60
  if (hours === 0) return `${minutes} min`
  if (minutes === 0) return `${hours} h`
  return `${hours} h ${String(minutes).padStart(2, '0')}`
}
