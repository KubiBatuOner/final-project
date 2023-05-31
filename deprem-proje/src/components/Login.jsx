import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const handleLogin = (data) =>
    axiosWithAuth()
      .post("/api/auth/login", data)
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem("token", res.data.token);
          setTimeout(() => {
            history.push("/panel");
          }, 500);
        }
      })
      .catch((err) => console.log(err.response.data));

  return (
    <div>
      <div className="border-black p-8 mt-8 border rounded-md shadow-md w-1/2 mx-auto xs:w-2/3">
        <h2 className="font-bold text-4xl ">Giriş Yap</h2>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="loginForm flex flex-col mt-4"
        >
          <div className="loginFormContainer">
            <label
              htmlFor="name"
              className="flex text-2xl font-medium mb-2 text-black"
            >
              Kullanıcı Adı:
            </label>
            <input
              className="rounded-md border border-slate-600 w-full p-2"
              type="name"
              {...register("name", {
                required: "Bir kullanıcı adı girmelisiniz",
              })}
            />
            {errors.name && (
              <span className="text-black font-semibold">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="loginFormContainer mt-4">
            <label className="flex text-2xl font-medium mb-2 text-black">
              Şifre:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="rounded-md border border-slate-600 w-full p-2 text-black"
                {...register("password", {
                  required: "Şifre gereklidir",
                })}
              />
              <button
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-0 bottom-0 flex items-center justify-center px-3"
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="text-black"
                />
              </button>
            </div>
            {errors.password && (
              <span className="text-black font-semibold">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="mt-4 mr-2 border w-1/2 cursor-pointer border-black rounded-md hover:bg-[#019ec9] hover:text-white p-2"
              disabled={!isValid}
              type="submit"
            >
              <p className="font-bold text-xl">Giriş Yap</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
