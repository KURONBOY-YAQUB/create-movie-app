export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Create By Kuronboy Yakubov
          <a className="grey-text text-lighten-4 right" href="#!">
            Movie
          </a>
        </div>
      </div>
    </footer>
  );
}
