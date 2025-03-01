import { useEffect, useMemo, useState } from "react";

type targetType = { name: string; value: string };
type FormType = Record<string, string | null>;

export const useForm = (
  formFields = {} as Record<string, string>,
  formValidator = {} as Record<string, [(name: string) => boolean, string]>
) => {
  const [initialDataForm, setDataForm] = useState(formFields);
  const [formValid, setFormValid] = useState({} as FormType);

  useEffect(() => {
    createValidator();
  }, [initialDataForm]);

  const onChangeField = ({ target }: { target: targetType }) => {
    const { name, value } = target;
    setDataForm({ ...initialDataForm, [name]: value });
  };

  const resetForm = () => {
    setDataForm(initialDataForm);
  };

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValid)) {
      if (formValid[formValue] != null) return false;
    }
    return true;
  }, [formValid]);

  const createValidator = () => {
    const formCheckedValues = {} as FormType;
    for (const formValue of Object.keys(formValidator)) {
      const [fn, errorMessage] = formValidator[formValue];
      formCheckedValues[`${formValue}Valid`] = fn(initialDataForm[formValue])
        ? null
        : errorMessage;
    }
    setFormValid(formCheckedValues);
  };

  return {
    initialDataForm,
    ...initialDataForm,
    formValid,
    ...formValid,
    resetForm,
    onChangeField,
    isFormValid,
  };
};
