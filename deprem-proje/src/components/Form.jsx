import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import logo from "../images/logo.svg";
import { toast } from "react-toastify";
import { Zoom } from "react-toastify";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const history = useHistory();

  function handleSend() {
    toast(
      "Sizinle en kısa sürede iletişim kuracağız, Anasayfaya yönlendiriliyorsunuz",
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Zoom,
      }
    );
    setTimeout(() => history.push("/"), 5000);
  }

  function handleBack() {
    history.goBack();
  }
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="flex justify-center bg-ozi rounded-2xl w-1/2 box-border p-14vh 0 items-start mt-1rem">
        <div className="w-5/6 flex flex-col gap-8vh">
          <form
            className="flex flex-col w-full h-full object-cover gap-4 mr-8 font-inter text-[#000C5C] items-center"
            onSubmit={handleSubmit(onSubmit)}
            href="Mail adresi gelebilir"
          >
            <img src={logo} className="w-[20vw]" alt="Logo" />
            <h2 className="text-3xl mt-12 mb-6 text-center gap-4 font-semibold mb-3rem">
              Bize Ulaşın
            </h2>
            <label className="text-center flex flex-col gap-1 font-medium">
              İsim Soyisim
              <input
                type="text"
                name="name"
                id="isim"
                className="text-center mt-5px border border-[#F8CB4E] rounded-md py-1vh px-0 text-gray-500 text-lg w-50% h-50% ml-25%"
                {...register("name", {
                  required: "Lütfen adınızı belirtiniz",
                  minLength: {
                    value: 3,
                    message: "En az 3 karakter içermelidir",
                  },
                  maxLength: {
                    value: 25,
                    message: "En fazla 25 karakter girilebilir",
                  },
                })}
              />
            </label>
            {errors.name && (
              <p className="formErrorMessage text-red-600 text-center">
                {errors.name.message}
              </p>
            )}
            <label className="text-center gap-1 flex flex-col font-medium">
              Bulunduğunuz Şehir
              <input
                type="text"
                name="sehir"
                id="sehir"
                className=" text-center border border-[#F8CB4E]  rounded-md py-1vh px-0 text-gray-500 text-lg w-50% h-50% ml-25%"
                {...register("sehir", {
                  required: "Lütfen bulunduğunuz şehri belirtiniz",
                  minLength: {
                    value: 3,
                    message: "Lütfen geçerli şehir giriniz",
                  },
                })}
              />
            </label>
            {errors.sehir && (
              <p className="formErrorMessage text-red-600 text-center">
                {errors.sehir.message}
              </p>
            )}
            <label className="text-center gap-1 flex flex-col font-medium">
              Telefon Numaranız
              <input
                type="tel"
                name="telefon"
                id="telefon"
                placeholder="05xxxxxxxxx"
                className="border border-[#F8CB4E] rounded-md py-1vh px-0 text-gray-500 text-center w-50% h-50% ml-25%"
                {...register("telefon", {
                  required: "Lütfen geçerli telefon numaranızı yazınız",
                  maxLength: {
                    value: 11,
                    message: "Lütfen geçerli telefon numarası giriniz",
                  },
                  minLength: {
                    value: 11,
                    message: "Lütfen geçerli telefon numarası giriniz",
                  },
                })}
              />
            </label>
            {errors.telefon && (
              <p className="formErrorMessage text-red-600 text-center">
                {errors.telefon.message}
              </p>
            )}
            <label className="text-center gap-2 flex flex-col font-medium">
              Hangi Konuda Destek Almak İstersiniz?
              <textarea
                name="message"
                id="message"
                placeholder="Danışmana iletilmesini istediğiniz özel notunuzu yazabilirsiniz"
                className="placeholder:text-sm  border border-[#F8CB4E]  rounded-md py-1vh px-0 text-gray-500 text-center w-full h-full ml-10% mt-5px font-medium"
                {...register("message", {
                  required: "Lütfen mesaj alanını boş bırakmayınız",
                  maxLength: {
                    value: 200,
                    message: "En fazla 200 karaktere kadar yazılabilir",
                  },
                })}
              ></textarea>
            </label>
            {errors.message && (
              <p className="formErrorMessage text-red-600 text-center">
                {errors.message.message}
              </p>
            )}
            <button
              type="submit"
              onClick={handleSend}
              disabled={!isValid}
              className={`${
                !isValid
                  ? "bg-white text-[#000C5C]"
                  : "bg-[#F8CB4E]  text-[#000C5C] hover:text-white "
              } border border-slate-300 mt-5 rounded-2xl w-24 mx-auto py-1 font-medium `}
            >
              Gönder
            </button>
            <button
              onClick={handleBack}
              className=" bg-[#F8CB4E] border text-[#000C5C] border-slate-300 mt-5 mb-5 rounded-2xl w-24 mx-auto py-1 font-medium hover:border-[#F8CB4E]  hover:text-white"
            >
              Geri Dön
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
