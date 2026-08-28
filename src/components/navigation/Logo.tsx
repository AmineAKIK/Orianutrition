import { Link } from 'react-router-dom'
import { brand } from '../../config/site'
export function Logo(){return <Link to="/" className="inline-flex items-center gap-3" aria-label={`${brand.name} — accueil`}><span className="grid size-9 place-items-center border border-forest text-forest font-serif text-xl">O</span><span><span className="block font-serif text-xl leading-none text-forest-dark">Oria</span><span className="block mt-1 text-[9px] tracking-[.2em] uppercase text-muted">Nutrition</span></span></Link>}
