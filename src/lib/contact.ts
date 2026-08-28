export interface ContactMessage {
  firstName: string
  email: string
  message: string
}

export function buildContactMailto(recipient: string, data: ContactMessage): string {
  const subject = `Demande de contact — ${data.firstName.trim()}`
  const body = [`Prénom : ${data.firstName.trim()}`, `Email : ${data.email.trim()}`, '', data.message.trim()].join('\n')
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
