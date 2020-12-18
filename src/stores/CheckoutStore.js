import { makeObservable, observable, action } from "mobx";

class CheckoutStore {
  constructor() {
    makeObservable(this, {
      form: observable,
      validateField: action,
      validateChecked: action,
      handleBlocks: action,
      handleSelect: action,
      submitForm: action,
    });
  }

  form = {
    blocks: [
      {
        id: 0,
        title: "Данные получателя",
        hidden: false,
        fields: [
          {
            type: "text",
            name: "LastName",
            text: "Фамилия",
            value: "",
            error: {
              message: "",
              status: false,
            },
          },
          {
            type: "text",
            name: "FirstName",
            text: "Имя",
            value: "",
            error: {
              message: "",
              status: false,
            },
          },
          {
            type: "text",
            name: "MiddleName",
            text: "Отчество",
            value: "",
            error: {
              message: "",
              status: false,
            },
          },
          {
            type: "phone",
            name: "Phone",
            text: "Телефон",
            value: "",
            error: {
              message: "",
              status: false,
            },
          },
          {
            type: "email",
            name: "Email",
            text: "E-Mail",
            value: "",
            error: {
              message: "",
              status: false,
            },
          },
          {
            type: "checkbox",
            name: "Terms",
            text:
              "Я принимаю условия пользовательского соглашения и согласен(-на) на обработку персональных данных",
            value: "",
            error: {
              message: "",
              status: false,
            },
          },
        ],
      },
      {
        id: 1,
        title: "Способ доставки",
        hidden: false,
        fields: [
          {
            type: "radio",
            name: "DeliveryMethod",
            text: "Самовывоз",
            value: 2,
            error: {
              message: "",
              status: false,
            },
          },
          {
            type: "radio",
            name: "DeliveryMethod",
            text: "Доставка курьером",
            value: 3,
            error: {
              message: "",
              status: false,
            },
          },
        ],
      },
      {
        id: 2,
        title: "Адрес доставки",
        hidden: true,
        fields: [
          {
            attr: "address",
            type: "text",
            name: "Address",
            text: "Введите адрес доставки",
            value: "",
            error: {
              message: "",
              status: false,
            },
          },
        ],
      },
      {
        id: 3,
        title: "Адрес магазина",
        hidden: true,
        fields: [
          {
            type: "select",
            name: "StoreAddress",
            text: "Выберите адрес магазина",
            opened: false,
            options: [
              "ул. Усачева, 1, Москва, 119048",
              "наб. реки Смоленки, 2, Санкт-Петербург, 199178",
              "ул. Новорядская, 124, Волгоград, Волгоградская обл., 400081",
            ],
            value: "",
            error: {
              message: "",
              status: false,
            },
          },
        ],
      },
    ],
  };

  validateField = (field, value) => {
    let validate = false;
    let pattern = /^([а-яА-ЯёЁ]+\s?)+/;
    let message = "Пожалуйста, заполните поле.";

    if (value.length) {
      switch (field.type) {
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

    field.value = value;

    if (pattern.test(value)) {
      field.error.status = false;
      field.error.message = "";

      validate = !validate;
    } else {
      field.error.status = true;
      field.error.message = message;
    }

    return validate;
  };

  validateChecked = (field) => {
    let validate = false;

    if (field.type === "radio") {
      if (field.error.status) {
        field.error.status = false;
      }
      // if (field.error.status) {
      //   const block = this.form.blocks.find((block, _) =>
      //     block.fields.find((item, _) => item.name === field.name)
      //   );
      //
      //   block.fields.forEach((item, _) => {
      //     item.error.status = false;
      //   });
      // } else {
      //   field.error.status = true;
      // }
    } else {
      field.error.status = !field.error.status;

      validate = !validate;
    }

    return validate;
  };

  handleBlocks = (id) => {
    this.form.blocks.forEach((block, _) => (block.hidden = false));
    this.form.blocks[id].hidden = true;
  };

  handleSelect = (field, value = "") => {
    field.opened = !field.opened;

    if (value.length) {
      field.text = value;
      field.value = value;
      field.error.status = false;
    }
  };

  submitForm = (event) => {
    event.preventDefault();

    const activeBlocks = this.form.blocks.filter((block, _) => !block.hidden);

    activeBlocks.forEach((block, _) =>
      block.fields.forEach((field, _) => {
        if (field.type === "checkbox" || field.type === "radio") {
          if (this.validateChecked(field)) {
          }
        } else {
          if (this.validateField(field, field.value)) {
          }
        }
      })
    );
  };
}

export default new CheckoutStore();
