import * as yup from 'yup';

export const PizzaValidationSchema = yup.object().shape({
  sabor: yup.string().required("O sabor é obrigatório").max(255, "O sabor deve conter no máximo 255 caracteres"),
  preco: yup.number().required("O preço é obrigatório").positive("O preço deve ser um valor positivo"),
  descricao: yup.string().max(4000, "A descrição deve conter no máximo 4000 caracteres"),
});
