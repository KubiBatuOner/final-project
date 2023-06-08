import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewHeader from "./newHeader";
import { useState } from "react";
import logoAll from "../images/logoAll.svg";
import volunteer from "../images/Volunteer.svg";

export default function AddVolunteer() {
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
  const [kvkkChecked, setKvkkChecked] = useState(false);
  const handleKvkkChange = (event) => {
    setKvkkChecked(event.target.checked);
  };
  function handleSend() {
    if (!kvkkChecked) {
      toast.error("KVKK metnini onaylamadan gönderim yapamazsınız.", {});
      return;
    }
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
    <div className="flex  flex-row bg-white">
      <div className="flex flex-col flex-1 ">
        <NewHeader />
      </div>
      <div className="flex flex-2 flex-col bg-hakkinda w-full">
        <h1 className="flex mt-12 justify-center items-center font-extrabold text-start text-[#030E5E] text-6xl w-[25vw] leading-[5rem]">
          Sahada Destek Vermek İçin Gönüllü Ol
        </h1>
        <div className="flex justify-center items-center mt-12">
          <div className="flex justify-center  rounded-2xl w-auto box-border p-14vh 0 items-start mt-1rem">
            <div className="w-5/6 flex flex-col gap-8vh">
              <form
                className="flex flex-col w-full h-full object-cover gap-4 mr-8 font-inter text-[#000C5C] items-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label className="text-center flex flex-col gap-1 font-medium">
                  Adınız*
                  <input
                    type="text"
                    name="name"
                    id="isim"
                    className="text-center mt-5px border border-[#F8CB4E] rounded-md py-1vh px-0 text-gray-500 text-lg w-full h-full ml-25%"
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
                <label className="text-center flex flex-col gap-1 font-medium">
                  Soyadınız*
                  <input
                    type="text"
                    name="name"
                    id="soyisim"
                    className="text-center mt-5px border border-[#F8CB4E] rounded-md py-1vh px-0 text-gray-500 text-lg w-full h-full ml-25%"
                    {...register("soyisim", {
                      required: "Lütfen soyisminizi belirtiniz",
                      minLength: {
                        value: 2,
                        message: "En az 2 karakter içermelidir",
                      },
                      maxLength: {
                        value: 15,
                        message: "En fazla 15 karakter girilebilir",
                      },
                    })}
                  />
                </label>
                {errors.soyisim && (
                  <p className="formErrorMessage text-red-600 text-center">
                    {errors.soyisim.message}
                  </p>
                )}
                <label className="text-center gap-1 flex flex-col font-medium">
                  İletişim Numaranız*
                  <input
                    type="tel"
                    name="telefon"
                    id="telefon"
                    placeholder="05xxxxxxxxx"
                    className="text-center mt-5px border border-[#F8CB4E] rounded-md py-1vh px-0 text-gray-500 text-lg w-full h-full ml-25%"
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
                <label className="text-center gap-1 flex flex-col font font-medium">
                  Sahada Çalışmak İstediğiniz İl *
                  <select
                    name="sehir"
                    id="sehir"
                    className="border text-center mt-5px  border-[#F8CB4E] rounded-md py-1vh px-0 text-gray-500 text-lg w-full h-full ml-25%"
                    {...register("sehir", {
                      required: "Lütfen bulunduğunuz şehri belirtiniz",
                    })}
                  >
                    <option value="" className="hidden-option hidden border-4">
                      Bir İl Seçiniz
                    </option>
                    <option value="Hatay">Hatay</option>
                    <option value="Gaziantep">Gaziantep</option>
                    <option value="Şanlıurfa">Şanlıurfa</option>
                    <option value="Diyarbakır">Diyarbakır</option>
                    <option value="Kilis">Kilis</option>
                    <option value="Osmaniye">Osmaniye</option>
                    <option value="Kahramanmaraş">Kahramanmaraş</option>
                    <option value="Malatya">Malatya</option>
                    <option value="Adana">Adana</option>
                    <option value="Adıyaman">Adıyaman</option>
                  </select>
                </label>
                {errors.sehir && (
                  <p className="formErrorMessage text-red-600 text-center">
                    {errors.sehir.message}
                  </p>
                )}
                <label className="text-center gap-1 flex flex-col font-medium">
                  Sahada çalışmak istediğiniz tarih başlangıcı *
                  <input
                    type="date"
                    name="bdate"
                    id="bdate"
                    className=" text-center mt-5px border border-[#F8CB4E] rounded-md py-1vh px-0 text-gray-500 text-lg w-full h-full ml-25%"
                  />
                </label>
                <label className="text-center gap-1 flex flex-col font-medium">
                  Sahada çalışmak istediğiniz tarih bitişi *
                  <input
                    type="date"
                    name="fdate"
                    id="fdate"
                    className=" text-center mt-5px border border-[#F8CB4E] rounded-md py-1vh px-0 text-gray-500 text-lg w-full h-full ml-25%"
                  />
                </label>
                <label className="text-center gap-2 flex flex-col font-medium">
                  Sahada gönüllü çalışma motivasyonunuzu kısaca anlatır mısınız?
                  *
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Danışmana iletilmesini istediğiniz özel notunuzu yazabilirsiniz"
                    className="placeholder:text-md  border border-[#F8CB4E]  rounded-md py-1vh px-0 text-gray-500 flex text-center justify-center w-full h-full ml-10% mt-5px font-medium"
                    {...register("message", {
                      required: "Lütfen bu alanı boş bırakmayınız",
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
                <div className="ml-2 flex gap-1">
                  <input
                    type="checkbox"
                    id="kvkkCheckbox"
                    checked={kvkkChecked}
                    onChange={handleKvkkChange}
                  />
                  <label className="flex" htmlFor="kvkkCheckbox">
                    <a
                      href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6698&MevzuatTur=1&MevzuatTertip=5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-700"
                    >
                      KVKK metnini&nbsp;
                    </a>
                    <p>okudum onaylıyorum. *</p>
                  </label>
                </div>
                <button
                  type="submit"
                  onClick={handleSend}
                  disabled={!isValid}
                  className={`${
                    !isValid
                      ? "bg-white text-[#000C5C]"
                      : "bg-[#F8CB4E]  text-[#000C5C] hover:text-white "
                  } w-auto border border-slate-300 mt-5 rounded-2xl  mx-auto py-1 font-semibold `}
                >
                  Başvurumu Gönder
                </button>
                <button
                  onClick={handleBack}
                  className=" flex w-auto bg-[#F8CB4E] border text-[#000C5C] border-slate-300 mt-5 mb-5 rounded-2xl  mx-auto py-1 font-semibold hover:border-[#F8CB4E]  hover:text-white"
                >
                  Geri Dön
                </button>
                <span className="flex justify-center text-center py-2 mb-6 text-slate-600">
                  * Zorunlu bilgi
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col m-12">
        <img src={logoAll} className="flex rounded w-[12vw]" alt="Logo" />
        <div>
          <img src={volunteer} className="flex rounded mt-32" alt="Logo" />
        </div>
      </div>
    </div>
  );
}
