import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Zoom } from "react-toastify";
import sol_kız from "../images/sol_kız.svg";
import sag_erkek from "../images/sag_erkek.svg";
import DestekSol from "../images/logoAll.svg";

export default function Destek() {
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
  return (
    <div className="flex">
      <div className="flex text-center h-full w-full rounded-[40px] gap-8">
        <div className="flex-1 flex flex-col gap-5 md:flex-col rounded-lg">
          <h2 className="flex justify-start mb-6 font-roboto font-bold text-[#030E5E] text-4xl leading-14 mr-6">
            Psikolojik Destek Almak İçin Başvurun
          </h2>
          <form
            className="flex flex-col w-full h-full object-cover gap-4 mr-8 font-inter text-[#000C5C] "
            onSubmit={handleSubmit(onSubmit)}
            href="Mail adresi gelebilir"
          >
            <label className="items-start flex flex-col gap-1 font-medium">
              İsim*
              <input
                type="text"
                name="name"
                id="isim"
                className="text-center mt-5px border rounded-xl py-1vh px-0 text-gray-500 text-lg w-72 h-10 ml-25%"
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
            <label className="items-start text-center flex flex-col gap-1 font-medium">
              Soyisim*
              <input
                type="text"
                name="name"
                id="isim"
                className="text-center mt-5px border rounded-xl py-1vh px-0 text-gray-500 text-lg w-72 h-10 ml-25%"
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
            <label className="items-start text-center gap-1 flex flex-col font-medium">
              İletişim Numaranız*
              <input
                type="tel"
                name="telefon"
                id="telefon"
                className="text-center mt-5px border rounded-xl py-1vh px-0 text-gray-500 text-lg w-72 h-10 ml-25%"
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
            {errors.name && (
              <p className="formErrorMessage text-red-600 text-center">
                {errors.name.message}
              </p>
            )}
            <label className="items-start text-center gap-1 flex flex-col font-medium">
              Yaşadığınız İl*
              <input
                type="text"
                name="sehir"
                id="sehir"
                className=" text-center mt-5px border rounded-xl py-1vh px-0 text-gray-500 text-lg w-72 h-10 ml-25%"
                {...register("sehir", {
                  required: "Lütfen bulunduğunuz şehri belirtiniz",
                  minLength: {
                    value: 3,
                    message: "Lütfen geçerli şehir giriniz",
                  },
                })}
              />
            </label>
            <label className=" items-start text-center gap-1 flex flex-col font-medium">
              Destek Alacak Kişi
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  name="destekkisi"
                  id="kendim"
                  value="kendim"
                  className="border border-[#F8CB4E] rounded-md py-1vh px-0 text-gray-500 text-lg w-7 h-7 mr-2"
                />
                <label htmlFor="kendim" className="text-gray-700+">
                  Kendim
                </label>
                <input
                  type="checkbox"
                  name="destekkisi"
                  id="yakinim"
                  value="yakinim"
                  className="border border-[#F8CB4E] rounded-md py-1vh px-0 text-gray-500 text-lg w-7 h-7 ml-2"
                />
                <label htmlFor="yakinim" className="text-gray-700 ml-2">
                  Yakınım
                </label>
              </div>
            </label>
            {errors.sehir && (
              <p className="formErrorMessage text-red-600 text-center">
                {errors.sehir.message}
              </p>
            )}
            {errors.telefon && (
              <p className="formErrorMessage text-red-600 text-center">
                {errors.telefon.message}
              </p>
            )}
            <label className="items-start text-center gap-2 flex flex-col font-medium">
              Yakınlık Dereceniz
              <textarea
                name="message"
                id="message"
                className="text-center mt-5px border rounded-xl py-1vh px-0 text-gray-500 text-lg w-72 h-10 ml-25%"
                {...register("message", {
                  required: "Lütfen mesaj alanını boş bırakmayınız",
                  maxLength: {
                    value: 200,
                    message: "En fazla 200 karaktere kadar yazılabilir",
                  },
                })}
              ></textarea>
            </label>
            <label className="items-start text-center gap-2 flex flex-col font-medium">
              Başvuru nedeninizi kısaca anlatır mısınız? *
              <textarea
                name="message"
                id="message"
                className="text-center mt-5px border rounded-xl py-1vh px-0 text-gray-500 text-lg w-72 h-10 ml-25%"
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
              className="border mb-14  items-start rounded-10 border-slate-300 mt-5 rounded-2xl w-56 h-14 font-roboto mx-auto py-1  font-bold bg-[#F8CB4E] "
            >
              Başvurumu Gönder
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-between flex-1 ">
          <div className="flex  mr-8">
            <img src={DestekSol} className="w-[15vw] " />
          </div>
          <div className="flex mr-8">
            <img src={sol_kız} className="w-[10vw] " />
          </div>
          <div className="flex mr-8">
            <img src={sag_erkek} className="w-[10vw] " />
          </div>
        </div>
      </div>
    </div>
  );
}
