import { useState } from 'react';

export const useSignUp = () => {
  const [inputs, setInputs] = useState({
    inputId: '',
    inputPw: '',
    inputCorrectPw: '',
    inputName: '',
    inputEmail: '',
    inputContact: '',
    inputAddress: '',
  });

  // const {
  //   inputId,
  //   inputPw,
  //   inputCorrectPw,
  //   inputName,
  //   inputEmail,
  //   inputContact,
  //   inputAddress,
  // } = inputs;

  const onChangeEvents = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [isInputs, setIsInputs] = useState({
    isInputIdGuide: false,
    isInputPwGuide: false,
    isCorrectPwGuide: false,
    isIdValid2: false,
    isPassedId: false,
  });

  // const {
  //   isInputIdGuide,
  //   isInputPwGuide,
  //   isCorrectPwGuide,
  //   isIdValid2, // 추후 삭제 고민
  //   isPassedId, // 추후 삭제 고민
  // } = isInputs;

  const isCorrectInput = () => {
    setIsInputs({
      ...isInputs,
      false: true,
    });
  };

  return { inputs, onChangeEvents, isInputs, isCorrectInput };
};
