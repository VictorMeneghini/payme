import { FieldError, useForm } from "react-hook-form";

import { Input } from "@/ui/input/Input";
import { Loading } from "@/ui/loading/Loading";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data, "signup");

  console.log(errors, "errors");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" max-w-2xl container mx-auto p-5 mx-auto xl:px-0"
    >
      <h1 className="block text-4xl font-bold leading-tight tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
        Lets Register your account
      </h1>
      <p className="block py-2 text-xl leading-tight text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
        Hello user i wish that, you have a greatful journey
      </p>
      <Input
        register={register}
        id="name"
        placeholder="type your name"
        rules={{
          required: {
            value: true,
            message: "Name is required",
          },
        }}
        errorMessage={{ ...(errors["name"] as FieldError) }}
      ></Input>
      <Input
        register={register}
        id="email"
        type="email"
        placeholder="type your email"
        rules={{
          required: {
            value: true,
            message: "Email is required",
          },
        }}
        errorMessage={{ ...(errors["email"] as FieldError) }}
      ></Input>
      <Input
        register={register}
        id="password"
        type="password"
        placeholder="type your password"
        rules={{
          minLength: {
            value: 5,
            message: "Your password need to be bigger than 5",
          },
        }}
        errorMessage={{ ...(errors["password"] as FieldError) }}
      ></Input>

      <button type="submit" className="btn">
        <Loading />
        Create account
      </button>
    </form>
  );
}

export { Signup };
