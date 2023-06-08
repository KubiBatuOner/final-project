import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Zoom } from "react-toastify";
import volunteer from "../images/volunteer.svg";
import DestekSol from "../images/logoAll.svg";
import { useState } from "react";

export default function Gonullu() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
      <div className="flex text-center rounded-[40px] gap-8 mt-10">
        <div className="flex-2 flex flex-col gap-5 md:flex-col rounded-lg">
          <h2 className="flex justify-start mb-6 font-roboto font-extrabold text-[#030E5E] text-[64px] text-start leading-[75px] mr-10">
            Sahada Destek Vermek İçin Gönüllü Ol
          </h2>
          <form
            className="flex flex-col flex-2 object-cover gap-6 mr-8 mb-10 pl-10 font-inter text-[#000C5C] "
            onSubmit={handleSubmit(onSubmit)}
            href="Mail adresi gelebilir"
          >
            <label className="items-start flex flex-col gap-1 font-medium">
              Adınız *
              <input
                type="text"
                name="name"
                id="isim"
                className="mt-[5px] border rounded-xl pl-2 text-gray-500 text-lg w-72 h-10 ml-25%"
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
              <p className="formErrorMessage text-red-600 text-start">
                {errors.name.message}
              </p>
            )}
            <label className="items-start text-center flex flex-col gap-1 font-medium">
              Soyadınız *
              <input
                type="text"
                name="surname"
                id="soyisim"
                className="mt-[5px] border rounded-xl pl-2 text-gray-500 text-lg w-72 h-10 ml-25%"
                {...register("surname", {
                  required: "Lütfen soyadınızı belirtiniz",
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
            {errors.surname && (
              <p className="formErrorMessage text-red-600 text-start">
                {errors.surname.message}
              </p>
            )}
            <label className="items-start text-center gap-1 flex flex-col font-medium">
              İletişim Numaranız *
              <input
                type="tel"
                name="telefon"
                id="telefon"
                className="mt-[5px] border rounded-xl pl-2 text-gray-500 text-lg w-72 h-10 ml-25%"
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
              <p className="formErrorMessage text-red-600 text-start">
                {errors.telefon.message}
              </p>
            )}
            <label className="items-start gap-1 flex flex-col font font-medium">
              Sahada Çalışmak İstediğiniz İl *
              <select
                name="sehir"
                id="sehir"
                className="mt-[5px] rounded-md text-gray-500 text-lg w-72 h-10 ml-25%"
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
              <p className="formErrorMessage text-red-600 text-start">
                {errors.sehir.message}
              </p>
            )}
            <label className="items-start gap-1 flex flex-col font-medium">
              Sahada çalışmak istediğiniz tarih başlangıcı *
              <input
                type="date"
                name="bdate"
                id="bdate"
                className="mt-[5px] rounded-md pl-2 text-gray-500 text-lg w-72 h-10 ml-25%"
              />
            </label>
            <label className="items-start gap-1 flex flex-col font-medium">
              Sahada çalışmak istediğiniz tarih bitişi *
              <input
                type="date"
                name="fdate"
                id="fdate"
                className="mt-[5px] rounded-md pl-2 text-gray-500 text-lg w-72 h-10 ml-25%"
              />
            </label>
            {errors.message1 && (
              <p className="formErrorMessage text-red-600 text-start">
                {errors.message1.message}
              </p>
            )}
            <label className="items-start text-start gap-2 flex flex-col font-medium mr-32">
              Sahada gönüllü çalışma motivasyonunuzu kısaca anlatır mısınız? *
              <textarea
                name="message"
                id="message"
                className="mt-[5px] items-center border rounded-xl pl-2 text-gray-500 text-lg w-72 h-10 ml-25%"
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
              <p className="formErrorMessage text-red-600 text-start">
                {errors.message.message}
              </p>
            )}
            <div className="items-start text-center gap-2 flex font-medium">
              <label className="flex gap-3" htmlFor="onayKutusu">
                <input
                  type="checkbox"
                  id="onayKutusu"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <div className="flex">
                  <a
                    href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6698&MevzuatTur=1&MevzuatTertip=5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-700"
                  >
                    KVKK metnini&nbsp;
                  </a>
                  <p>okudum onaylıyorum. *</p>
                </div>
              </label>
            </div>
            <div className="flex justify-start items-start">
              <button
                type="submit"
                onClick={handleSend}
                disabled={!isValid}
                className="mb-14 rounded-10 border-slate-300 mt-5 rounded-2xl px-8 py-4 font-extrabold bg-[#F8CB4E] "
              >
                BAŞVURUMU GÖNDER
              </button>
            </div>
            <p className=" flex justify-start items-start">* Zorunlu bilgi</p>
          </form>
        </div>
        <div className="flex flex-col gap-8 flex-1 ">
          <div className="flex justify-center mr-8">
            <img src={DestekSol} className="w-[10vw] " />
          </div>
          <div className="flex justify-center mr-8">
            <img src={volunteer} className="w-[15vw] " />
          </div>
        </div>
      </div>
    </div>
  );
}
