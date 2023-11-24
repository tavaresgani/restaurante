import * as yup from 'yup';

export const PedidoValidationSchema = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório").max(255, "O nome deve conter no máximo 255 caracteres"),
  telefone: yup.string().required("O telefone é obrigatório").max(20, "O telefone deve conter no máximo 20 caracteres"),
  endereco: yup.string().required("O endereço é obrigatório").max(500, "O endereço deve conter no máximo 500 caracteres"),
  status: yup.string().max(50, "O status deve conter no máximo 50 caracteres"),
});
