import { Link } from 'react-router-dom'
import type { Article } from '../../data/articles'
export function ArticleCard({article}:{article:Article}){return <Link to={`/conseils/${article.slug}`} className="block border border-sage bg-paper p-6 hover:bg-sage-light"><p className="eyebrow">{article.category}</p><h3 className="mt-4 text-2xl">{article.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{article.excerpt}</p></Link>}
