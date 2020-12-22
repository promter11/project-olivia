import { makeObservable, observable, action } from "mobx";

import CartStore from "./CartStore";

class CheckoutStore {
  constructor() {
    makeObservable(this, {
      form: observable,
      modalHiddenStatus: observable,
      validateField: action,
      validateChecked: action,
      handleBlocks: action,
      handleSelect: action,
      submitForm: action,
      clearForm: action,
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
            valid: false,
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
            valid: false,
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
            valid: false,
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
            valid: false,
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
            valid: false,
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
            valid: false,
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
            value: "",
            toggleBlock: 2,
            error: {
              message: "",
              status: false,
            },
            valid: false,
          },
          {
            type: "radio",
            name: "DeliveryMethod",
            text: "Доставка курьером",
            value: "",
            toggleBlock: 3,
            error: {
              message: "",
              status: false,
            },
            valid: false,
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
            valid: false,
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
            valid: false,
          },
        ],
      },
    ],
  };
  modalHiddenStatus = true;

  validateField = (field, value) => {
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
      field.valid = true;
    } else {
      field.error.status = true;
      field.error.message = message;
      field.valid = false;
    }
  };

  validateChecked = (field, event) => {
    if (field.type === "radio") {
      const block = this.form.blocks.find((block, _) =>
        block.fields.find((item, _) => item.name === field.name)
      );

      if (!event) {
        const valid = block.fields.some((field, _) => field.valid);

        if (!valid) {
          block.fields.forEach((item, _) => {
            item.error.status = true;
          });
        }
      } else {
        block.fields.forEach((item, _) => {
          item.error.status = false;
          item.valid = true;
        });
      }
    } else {
      if (!event) {
        if (!field.valid) {
          field.error.status = !field.valid;
        }
      } else {
        field.error.status = !field.error.status;
        field.valid = !field.valid;
      }
    }
  };

  handleBlocks = (id) => {
    this.form.blocks.forEach((block, _) => (block.hidden = false));
    this.form.blocks[id].hidden = true;
  };

  handleSelect = (field, value = "") => {
    field.opened = !field.opened;
    field.error.status = !field.error.status;

    if (value.length) {
      field.text = value;
      field.value = value;
      field.error.status = false;
      field.valid = true;
    }
  };

  submitForm = (event) => {
    event.preventDefault();

    let validationPassed = true;

    this.form.blocks
      .filter((block, _) => !block.hidden)
      .forEach((block, _) => {
        block.fields.forEach((field, _) => {
          switch (field.type) {
            case "text":
            case "phone":
            case "email":
              this.validateField(field, field.value);

              break;
            case "checkbox":
            case "radio":
              this.validateChecked(field);

              break;
            default:
              break;
          }

          if (!field.valid) {
            validationPassed = false;
          }
        });
      });

    if (validationPassed) {
      this.modalHiddenStatus = !this.modalHiddenStatus;
    }
  };

  clearForm = () => {
    this.modalHiddenStatus = !this.modalHiddenStatus;

    this.form.blocks.forEach((block, _) => {
      if (block.id === 2 || block.id === 3) {
        block.hidden = true;
      }

      block.fields.forEach((field, _) => {
        field.value = "";
        field.error = {
          status: false,
          message: "",
        };
        field.valid = false;

        if (field.type === "select") {
          field.text = "Выберите адрес магазина";
          field.opened = false;
        }
      });
    });

    CartStore.items = [];
  };
}

export default new CheckoutStore();
