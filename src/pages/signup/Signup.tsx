import { FieldError, useForm, RegisterOptions } from "react-hook-form";

import { Input } from "@/ui/input/Input";
import { blankValues } from "@/common/form-validate";
import { Loading } from "@/ui/loading/Loading";

const FORM_RULES: Record<string, RegisterOptions> = {
  NAME: {
    required: {
      value: true,
      message: "Name is required",
    },
    validate: (inputValue) => blankValues("Name", inputValue),
  },
  EMAIL: {
    required: {
      value: true,
      message: "Email is required",
    },
    validate: (inputValue) => blankValues("Email", inputValue),
  },
  PASSWORD: {
    required: {
      value: true,
      message: "Password is required",
    },
    minLength: {
      value: 5,
      message: "Your password can not be less then 5",
    },
    validate: (inputValue) => blankValues("Password", inputValue),
  },
};

const handleOnSubmit = (data: any) => {
  console.log(data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("logged");
    }, 5000);
  });
};

function Signup({ onSubmit = handleOnSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div className="container-app">
      <h1 className="main-title">Lets Register your account</h1>
      <p className="sub-title">
        Hello user i wish that, you have a greatful journey
      </p>
      <form
        data-testid="signup-form"
        onSubmit={handleSubmit(async (e) => {
          try {
            await onSubmit(e);
            reset();
          } catch (e) {
            console.log("error");
          }
        })}
      >
        <Input
          register={register}
          id="name"
          placeholder="type your name"
          rules={FORM_RULES.NAME}
          errorMessage={{ ...(errors["name"] as FieldError) }}
        ></Input>
        <Input
          register={register}
          id="email"
          type="email"
          placeholder="type your email"
          rules={FORM_RULES.EMAIL}
          errorMessage={{ ...(errors["email"] as FieldError) }}
        ></Input>
        <Input
          register={register}
          id="password"
          type="password"
          placeholder="type your password"
          rules={FORM_RULES.PASSWORD}
          errorMessage={{ ...(errors["password"] as FieldError) }}
        ></Input>

        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting && <Loading />}
          Create account
        </button>
      </form>
    </div>
  );
}

export { Signup };
