import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Listing from './pages/Listing'
import Model from './pages/Model'
import FleetIntake from './pages/FleetIntake'
import PackageResults from './pages/PackageResults'
import PackageUnit from './pages/PackageUnit'
import Checkout from './pages/Checkout'

export default function App() {
  const location = useLocation()
  const path = location.pathname
  const darkChrome = path === '/' || path === ''

  return (
    <div className={`app-shell ${darkChrome ? 'chrome-dark' : ''}`}>
      {!darkChrome && <Header />}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intake" element={<FleetIntake />} />
          <Route path="/package/:packageId" element={<PackageResults />} />
          <Route path="/package/:packageId/unit/:unitId" element={<PackageUnit />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Browse />} />
          <Route path="/model/:slug" element={<Model />} />
          <Route path="/listing/:id" element={<Listing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
