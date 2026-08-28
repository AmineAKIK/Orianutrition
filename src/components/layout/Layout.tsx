import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { SkipLink } from './SkipLink'
export function Layout(){return <><SkipLink/><Header/><main id="main-content"><Outlet/></main><Footer/></>}
