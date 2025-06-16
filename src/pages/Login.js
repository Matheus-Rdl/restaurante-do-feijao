import { Link } from "react-router-dom";
import TextFieldLogin from "../components/TextFieldLogin";
import '../css/Login.css'

const Login = () => {
  return (
    <div className="div-login">
      <div>
        <p className="title-login">Restaurante do Feijão</p>
      </div>
      <div>
        <TextFieldLogin label="Usuário:" />
        <TextFieldLogin label="Senha:" />
      </div>
      <Link to={"/products"}>
      <button className="btn-login">Teste</button>
      </Link>
    </div>
  );
};

export default Login;
