import { Description as DescriptionIcon } from "@mui/icons-material";

function Header() {
  return (
    <header>
      <div className="header-content">
        <DescriptionIcon fontSize="large" />
        <h1>CV Builder</h1>
      </div>
    </header>
  );
}

export default Header;
