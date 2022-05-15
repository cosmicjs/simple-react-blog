export default () => {
  return (
    <footer className="footer">
      <div style={{ marginTop: 20 }}>
        <a href="https://cosmicjs.com" target="_blank" style={{ textDecoration: 'none' }}>
          <img style={{ float:'left', marginRight: 15, position: 'relative' }} src="https://cosmicjs.com/images/logo.svg" width="28" height="28" />
          <span className="powered-by" style={{ position: 'relative', top: 4, color: '#333' }}>Proudly powered by Cosmic</span>
        </a>
      </div>
      <div className="copyright">
        &copy;&nbsp;&nbsp;{ new Date().getFullYear() } Cosmic
      </div>
    </footer>
  )
}