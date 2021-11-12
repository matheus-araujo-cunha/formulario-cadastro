import {
  Forms,
  RegisterInput,
  Input,
  MessageError,
  Button,
  SectionInput,
} from "./styles";

import { toast } from "react-hot-toast";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

const Form = ({ setIsLogged, setUser }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^[a-zA-Z]/, "Insira apenas letras"),
    email: yup.string().required("Email Obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo de 8 caracteres")
      .matches(
        /(?=.*[}{,.^?@~=+\-_\/*\-+.\|])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/,
        "Sua senha requer letras, números e um caractere especial"
      ),

    confirm_password: yup
      .string()
      .required("Confirmação obrigatória")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsLogged(true);
    setUser(data);
    toast.success("Cadastrou com sucesso!");
    history.push(`/user/${data.name}`);
  };

  return (
    <Forms onSubmit={handleSubmit(onSubmit)}>
      <SectionInput>
        <RegisterInput>
          <Input type="text" placeholder="Nome" {...register("name")} />
          {errors.name && <MessageError>{errors.name.message}</MessageError>}
        </RegisterInput>

        <RegisterInput>
          <Input type="text" placeholder="Email" {...register("email")} />
          {errors.email && <MessageError>{errors.email.message}</MessageError>}
        </RegisterInput>

        <RegisterInput>
          <Input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password && (
            <MessageError>{errors.password.message}</MessageError>
          )}
        </RegisterInput>

        <RegisterInput>
          <Input
            type="password"
            placeholder="Confirmar Senha"
            {...register("confirm_password")}
          />
          {errors.confirm_password && (
            <MessageError>{errors.confirm_password.message}</MessageError>
          )}
        </RegisterInput>
      </SectionInput>
      <Button>Cadastrar</Button>
    </Forms>
  );
};

export default Form;
