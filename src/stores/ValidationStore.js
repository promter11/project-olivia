import { makeObservable, observable, action } from "mobx";

class ValidationStore {
  constructor() {
    makeObservable(this, {
      fields: observable,
      validateFields: action,
      submitForm: action,
    });
  }

  fields = [
    {
      type: "text",
      name: "LastName",
      title: "Фамилия",
      value: "",
      error: {
        message: "",
        status: false,
      },
    },
    {
      type: "text",
      name: "FirstName",
      title: "Имя",
      value: "",
      error: {
        message: "",
        status: false,
      },
    },
    {
      type: "text",
      name: "MiddleName",
      title: "Отчество",
      value: "",
      error: {
        message: "",
        status: false,
      },
    },
    {
      type: "phone",
      name: "Phone",
      title: "Телефон",
      value: "",
      error: {
        message: "",
        status: false,
      },
    },
    {
      type: "email",
      name: "Email",
      title: "E-Mail",
      value: "",
      error: {
        message: "",
        status: false,
      },
    },
  ];

  validateFields = (index, { type }, value) => {
    let pattern = /^([а-яА-ЯёЁ]+\s?)+/;
    let message = "Пожалуйста, заполните поле.";

    if (value.length) {
      switch (type) {
        case "phone":
          pattern = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
          message =
            "Пожалуйста, проверьте корректность введенных данных. Допустимый формат: +7 (###) ###-##-##. Возможно заполнение без пробелов, скобок и тире.";

          break;
        case "email":
          pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
          message =
            "Пожалуйста, проверьте корректность введенных данных. Допустимый формат: example@mail.com";

          break;
        default:
          message = "Пожалуйста, проверьте корректность введенных данных.";

          break;
      }
    }

    this.fields[index].value = value;

    if (pattern.test(value)) {
      this.fields[index].error.status = true;
      this.fields[index].error.message = "";
    } else {
      this.fields[index].error.status = false;
      this.fields[index].error.message = message;
    }

    console.log(this.fields[index]);
  };

  submitForm = (event) => {
    event.preventDefault();

    if (this.validateFields(this.fields)) {
      console.log(1);
    }
  };
}

export default new ValidationStore();
