import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { SkipLink } from './SkipLink'
import { RouteFocus } from '../navigation/RouteFocus'

export function Layout(){return <><SkipLink/><RouteFocus/><Header/><main id="main-content" tabIndex={-1} className="outline-none"><Outlet/></main><Footer/></>}
