export interface ClientDashboardData {
  firstName: string
  program: string
  nextAppointment: { label: string; date: string; time: string; mode: string }
  weeklyFocus: { label: string; value: string; progress: number }[]
  goals: string[]
  documents: { label: string; type: string }[]
  note: string
}

export const clientDashboard: ClientDashboardData = {
  firstName: 'Camille',
  program: 'Suivi rythme & énergie',
  nextAppointment: { label: 'Point de suivi', date: 'Mardi 8 septembre', time: '18 h 30', mode: 'Visio' },
  weeklyFocus: [
    { label: 'Préparation', value: 'Deux bases de repas prêtes avant la séquence de nuit', progress: 72 },
    { label: 'Récupération', value: 'Routine de retour tenue sur 4 postes sur 5', progress: 80 },
    { label: 'Énergie', value: 'Creux de milieu de poste moins marqué', progress: 68 },
  ],
  goals: [
    'Préparer deux bases de repas avant la prochaine séquence de nuit',
    'Garder la même courte routine de retour pendant cinq postes',
    'Tester une seule option de collation et noter le niveau de faim avant/après',
  ],
  documents: [
    { label: 'Repères — semaine de nuit', type: 'PDF' },
    { label: 'Journal d’observation simplifié', type: 'PDF' },
    { label: 'Checklist retour de poste', type: 'PDF' },
    { label: 'Idées de repas transportables', type: 'PDF' },
  ],
  note: 'Cette semaine, garde surtout les deux repères qui restent faciles à tenir quand le planning bouge. Le reste pourra être ajusté au prochain point.',
}
