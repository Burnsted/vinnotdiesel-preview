export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>VinNotDiesel</strong> — Used EV work trucks. Battery first.
        </div>
        <div className="footer-meta">
          <span>Preview · Demo inventory · Not real listings · No payments</span>
          <a className="footer-credits" href={`${import.meta.env.BASE_URL}CREDITS.md`}>
            Photo credits
          </a>
        </div>
      </div>
    </footer>
  )
}
