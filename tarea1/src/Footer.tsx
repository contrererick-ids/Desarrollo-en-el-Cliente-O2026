function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} Erick Contreras. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;