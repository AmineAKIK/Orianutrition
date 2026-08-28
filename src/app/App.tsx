import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { HomePage } from '../pages/HomePage'
import { PlaceholderPage } from '../pages/PlaceholderPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mon-approche" element={<PlaceholderPage eyebrow="Approche" title="Une approche pensée autour du rythme réel" />} />
          <Route path="accompagnements" element={<PlaceholderPage eyebrow="Accompagnements" title="Des formats de suivi fictifs, conçus pour la démonstration" />} />
          <Route path="recettes" element={<PlaceholderPage eyebrow="Recettes" title="Une future sélection éditoriale 100 % fictive" />} />
          <Route path="conseils" element={<PlaceholderPage eyebrow="Conseils" title="Des contenus originaux en cours de préparation" />} />
          <Route path="sommeil" element={<PlaceholderPage eyebrow="Sommeil" title="Un outil de démonstration à reconstruire avec transparence" />} />
          <Route path="espace-client" element={<PlaceholderPage eyebrow="Espace client" title="Un tableau de bord fictif, sans authentification réelle" />} />
          <Route path="contact" element={<PlaceholderPage eyebrow="Contact" title="Démonstration uniquement — aucune donnée collectée" />} />
          <Route path="*" element={<PlaceholderPage eyebrow="404" title="Cette page n’existe pas" />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
