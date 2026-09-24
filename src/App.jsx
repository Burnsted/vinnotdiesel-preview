import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Browse from './pages/Browse'
import Listing from './pages/Listing'

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/listing/:id" element={<Listing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
