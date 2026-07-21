import { useEffect, useMemo, useState } from "react";

type targetType = { name: string; value: string };
type FormType = Record<string, string | null>;

export const useForm = <
  T extends Record<string, string>,
  V extends Record<string, [(val: string) => boolean, string]> = Record<
    string,
    [(val: string) => boolean, string]
  >
>(
  formFields: T = {} as T,
  formValidator: V = {} as V
) => {
  const [initialDataForm, setDataForm] = useState<T>(formFields);
  const [formValid, setFormValid] = useState<FormType>({});

  useEffect(() => {
    createValidator();
  }, [initialDataForm]);

  const onChangeField = ({ target }: { target: targetType }) => {
    const { name, value } = target;
    setDataForm({ ...initialDataForm, [name]: value });
  };

  const resetForm = () => {
    setDataForm(formFields);
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
  } as {
    initialDataForm: T;
    formValid: FormType;
    resetForm: () => void;
    onChangeField: ({ target }: { target: targetType }) => void;
    isFormValid: boolean;
  } & T & { [K in keyof V as `${Extract<K, string>}Valid`]: string | null };
};

