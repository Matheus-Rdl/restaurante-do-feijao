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
      <Link to={"/orders"}>
      <button className="btn-login">Entrar</button>
      </Link>
    </div>
  );
};

export default Login;
