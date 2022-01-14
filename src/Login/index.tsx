import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../Providers/Auth";
import { Button, Form, Title } from "./styles";
const Login = () => {
  const { signIn } = useAuth();
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SubData>({
    resolver: yupResolver(schema),
  });

  interface SubData {
    email: string;
    password: string;
  }

  const submission = (data: SubData) => {
    signIn(data);
  };

  return (
    <Form onSubmit={handleSubmit(submission)}>
      <Title>Faça seu Login</Title>
      <input placeholder="Digite seu email" {...register("email")} />
      <span>{errors.email?.message}</span>
      <input
        type="password"
        placeholder="Digite sua senha"
        {...register("password")}
      />
      <span>{errors.password?.message}</span>

      <Button type="submit">Enviar</Button>
    </Form>
  );
};
export default Login;
