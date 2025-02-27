import { useState } from "react";

type targetType = { name: string; value: string };

export const useForm = (formFields = {}) => {
  const [initialDataForm, setDataForm] = useState(formFields);

  const onChangeField = ({ target }: { target: targetType }) => {
    const { name, value } = target;
    setDataForm({ initialDataForm, [name]: value });
  };

  const resetForm = () => {
    setDataForm(initialDataForm);
  };

  return { initialDataForm, ...initialDataForm, resetForm, onChangeField };
};
