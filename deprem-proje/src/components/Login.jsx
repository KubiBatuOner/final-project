import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const handleLogin = (data) =>
    axios
      .post("http://localhost:9000/api/auth/login", data)
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem("panel", res.data.token);
          setTimeout(() => {
            history.push("/panel");
          }, 2500);
        }
      })
      .catch((err) => console.log(err.response.data));

  const handleClearForm = () => {
    reset();
  };
  return (
    <div>
      <div className="bg-slate-800 text-white p-8 mt-8 rounded-md shadow-md w-1/2 mx-auto xs:w-2/3">
        <h2 className="font-bold text-4xl">Giriş Yap</h2>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="loginForm flex flex-col mt-4"
        >
          <div className="loginFormContainer">
            <label htmlFor="email" className="flex">
              E-posta
            </label>
            <input
              className="rounded-md w-full p-2 text-black"
              type="email"
              {...register("email", { required: "Bir e-posta girmelisiniz" })}
            />
            {errors.email && (
              <span className="text-red-600 font-semibold">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="loginFormContainer mt-4">
            <label className="flex">Şifre</label>
            <input
              type="password"
              className="rounded-md w-full p-2 text-black"
              {...register("password", {
                required: "Şifre gereklidir",
              })}
            />
            {errors.password && (
              <span className="text-red-600 font-semibold">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex">
            <button
              className="mt-4 mr-2 border-2 w-1/2 cursor-pointer border-green-500 rounded-md hover:bg-green-500 hover:text-white p-2"
              disabled={!isValid}
              type="submit"
            >
              <p className="font-bold">Giriş Yap</p>
            </button>
            <button
              onClick={handleClearForm}
              className="font-bold mt-4 ml-2 w-1/2 border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white p-2 text-center"
            >
              <p>Temizle</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
