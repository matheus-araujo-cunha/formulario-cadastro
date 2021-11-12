import { Redirect, useParams } from "react-router-dom";
import { DivUser, ButtonUser } from "./styles";
import { toast } from "react-hot-toast";

const User = ({ user: { name, email }, isLogged, setIsLogged, setUser }) => {
  const params = useParams();
  console.log(params);

  if (!isLogged) {
    return <Redirect to="/" />;
  }

  const logout = () => {
    setIsLogged(false);
    setUser({});
    toast.success("Deslogou com sucesso!");
  };

  return (
    <DivUser>
      <h2>Seja bem vindo {name}</h2>
      <p>{email}</p>

      <ButtonUser onClick={() => logout()}>Deslogar</ButtonUser>
    </DivUser>
  );
};

export default User;
