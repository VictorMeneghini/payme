import { Input } from "@/ui/input/Input";

function Signup() {
  return (
    <div className=" max-w-2xl container mx-auto p-5 mx-auto xl:px-0">
      <h1 className="block text-4xl font-bold leading-tight tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
        Lets Register your account
      </h1>
      <p className="block py-2 text-xl leading-tight text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
        Hello user i wish that, you have a greatful journey
      </p>
      <Input placeholder="type your name" errorMessage="invalid name"></Input>
      <Input placeholder="type your email" type="email"></Input>
      <Input placeholder="type your password" type="password"></Input>
      <Input placeholder="confirm password" type="password"></Input>
      <button
        type="submit"
        className="flex justify-center w-full px-3 py-4 text-white bg-gray-800 rounded-md focus:bg-gray-900 hover:bg-gray-900 focus:outline-none"
      >
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Create account
      </button>
    </div>
  );
}

export { Signup };
