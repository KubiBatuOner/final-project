import styled from "styled-components";
import { useForm } from "react-hook-form";

const StyledFooterOuterContainer = styled.div`
  background-color: #019ec9;
  width: 50%;
  box-sizing: border-box;
  padding: 14vh 0;
  display: flex;
  align-items: start;
  margin-top: 1rem;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2vh;
    margin-top: 1rem;
  }
`;
const StyledFooterInnerContainer = styled.div`
  width: 20%;
  /* margin: 0 0 0 10%; */
  display: flex;
  flex-direction: column;
  row-gap: 8vh;
  @media (max-width: 1000px) {
    width: 60%;
    align-items: center;
    margin: 0;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  object-fit: cover;
  row-gap: 2vh;
  margin-right: 15%;
  font-family: "Inter", sans-serif;
  @media (max-width: 1000px) {
    margin: 0;
    row-gap: 4vh;
  }
  @media (max-width: 450px) {
    width: 70%;
  }
`;
const StyledFormTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;
const StyledLabel = styled.label`
  text-align: center;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;
const StyledInput = styled.input`
  margin-top: 5px;
  border: 1px solid #019ec9;
  border-radius: 6px;
  padding: 1vh 0;
  color: #6b7280;
  font-size: 0.85rem;
  width: 50%;
  height: 50%;
  margin-left: 25%;
`;
const StyledTextArea = styled.textarea`
  border: 1px solid #019ec9;
  border-radius: 6px;
  padding: 1vh 0;
  color: #6b7280;
  text-align: center;
  width: 80%;
  height: 100%;
  margin-left: 10%;
`;
const StyledButton = styled.button`
  border: 1px solid #019ec9;
  width: 50%;
  margin: 0 auto;
  border-radius: 6px;
  padding: 1vh 0;
  font-weight: 500;
  &:hover {
    background-color: #019ec9;
    color: white;
  }
  background-color: ${(props) => (props.disabled ? "#CFD2CF" : "white")};
  color: ${(props) => (props.disabled ? "white" : "#3730A3")};
  border: ${(props) =>
    props.disabled ? "1px solid white" : "1px solid #3730A3"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

function Form() {
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

  return (
    <div className="flex justify-center">
      <StyledFooterOuterContainer>
        <StyledFooterInnerContainer></StyledFooterInnerContainer>
        <StyledForm
          onSubmit={handleSubmit(onSubmit)}
          href="Mail adresi gelebilir" //TODO
        >
          <StyledFormTitle>Bize Ulaşın</StyledFormTitle>
          <StyledLabel htmlFor="name">
            İsim Soyisim
            <StyledInput
              type="text"
              name="isim  "
              id="isim"
              {...register("name", {
                required: "Lütfen adınızı belirtiniz",
                maxLength: {
                  value: 25,
                  message: "En fazla 25 karakter girilebilir",
                },
              })}
            />
          </StyledLabel>
          {errors.name && (
            <p className="formErrorMessage text-red-600 text-center">
              {errors.name.message}
            </p>
          )}
          <StyledLabel htmlFor="sehir">
            Bulunduğunuz Şehir
            <StyledInput
              type="tel"
              name="sehir"
              id="sehir"
              {...register("sehir", {
                required: "Lütfen bulunduğunuz şehri belirtiniz",
                minLength: {
                  value: 3,
                  message: "Lütfen geçerli şehir giriniz",
                },
              })}
            />
          </StyledLabel>
          {errors.sehir && (
            <p className="formErrorMessage text-red-600 text-center">
              {errors.sehir.message}
            </p>
          )}
          {/*  <StyledLabel htmlFor="telefon">
          Telefon Numaranız
          <StyledInput
            type="tel"
            name="telefon"
            id="telefon"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            {...register("telefon", {
              required: "Lütfen geçerli telefon numaranızı yazınız",
              maxLength: {
                value: 11,
                message: "Lütfen geçerli telefon numarası giriniz",
              },
            })}
          />
        </StyledLabel>
        {errors.telefon && (
          <p className="formErrorMessage text-red-600 text-center">
            {errors.telefon.message}
          </p>
        )} */}
          <StyledLabel htmlFor="message">
            Özel Not Alanı
            <StyledTextArea
              name="message"
              id="message"
              placeholder="Danışmana iletilmesini istediğiniz özel notunuzu yazabilirsiniz"
              {...register("message", {
                maxLength: {
                  value: 200,
                  message: "En fazla 200 karaktere kadar yazılabilir",
                },
              })}
            />
          </StyledLabel>
          {errors.message && (
            <p className="formErrorMessage text-red-600 text-center">
              {errors.message.message}
            </p>
          )}
          <StyledButton type="submit" disabled={!isValid}>
            Gönder
          </StyledButton>
        </StyledForm>
      </StyledFooterOuterContainer>
    </div>
  );
}
export default Form;
