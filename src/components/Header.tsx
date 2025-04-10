import Navbar from './Navbar';
import SocialMedia from './SocialMedia';

function Header() {
  return (
    <header className="header">
      <a href="/" className="header-brand">Galleria</a>
      <Navbar />
      <SocialMedia />
    </header>
  );
}

export default Header;