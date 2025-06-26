import "./Header.css";

const Header = () => {
  const date = new Date();
  const formattedDate = formatDate(date);

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="header">
      <p>Restaurante do feijão | {formattedDate} | Cedeck Sylvain</p>
    </div>
  );
};

export default Header;
