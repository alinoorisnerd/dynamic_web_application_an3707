import {lazy, Suspense} from 'react'

const PAGES = {
  '/': lazy(() => import('./pages/HomePage')),
  '/midterm': lazy(() => import('./pages/MidtermPage')),
  '/week01': lazy(() => import('./pages/Week01Page')),
  '/week02': lazy(() => import('./pages/Week02Page')),
  '/week02-2': lazy(() => import('./pages/Week02Part2Page')),
  '/week03': lazy(() => import('./pages/Week03Page')),
  '/week04': lazy(() => import('./pages/Week04Page')),
  '/week05': lazy(() => import('./pages/Week05Page')),
  '/week05/image-search': lazy(() => import('./pages/Week05ImageSearchPage')),
  '/week05/memory-game': lazy(() => import('./pages/Week05MemoryGamePage')),
  '/week06': lazy(() => import('./pages/Week06Page')),
  '/week07': lazy(() => import('./pages/Week07Page')),
}

const findPage = (pathname) => {
  const match = Object.keys(PAGES)
    .filter((path) => pathname === path || pathname.startsWith(`${path}/`))
    .sort((a, b) => b.length - a.length)[0]

  return PAGES[match] ?? PAGES['/']
}

const Page = findPage(window.location.pathname)

const App = () => {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

export default App
