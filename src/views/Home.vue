<template>
  <form action="#" class="form">
    <h2 class="form__title-2">
      Форма подачи заявки в отдел сервиса и качества
    </h2>

    <div class="form__shape-border">
      <div class="form__branch">
        <h3 class="form__title-3">
          Ваш филиал <span class="form__necessarily">*</span>
        </h3>
        <select
          v-model="selectedSite"
          :disabled="isSelectDisabled"
          name="branch"
          id="branch"
          required
          :class="{ 'is-disabled': isSelectDisabled }"
          class="form__select"
        >
          <option disabled value="" class="form__option">Выберите город</option>
          <option
            v-for="citie in listOfCities"
            :key="citie.id"
            :value="citie.title"
            class="form__option"
          >
            {{ citie.title }}
          </option>
        </select>
      </div>

      <div class="form__online">
        <input
          v-model="online"
          type="checkbox"
          name="online"
          id="online"
          class="form__input form__input_online"
        />
        <label for="online" class="form__label form__label_online"
          >Онлайн</label
        >
      </div>

      <div class="form__topic-of-appeal">
        <h3 class="form__title-3">
          Тема обращения <span class="form__necessarily">*</span>
        </h3>
        <div class="form__inp-and-lab">
          <input
            v-model="topicOfAppeal"
            type="radio"
            name="topic-of-appeal"
            id="not-happy"
            value="not-happy"
            required
            class="form__input form__input_not-happy"
          />
          <label for="not-happy" class="form__label form__label_not-happy"
            >Недоволен качеством услуг</label
          >
        </div>
        <div class="form__inp-and-lab">
          <input
            v-model="topicOfAppeal"
            type="radio"
            name="topic-of-appeal"
            id="termination-of-an-agreement"
            value="termination-of-an-agreement"
            class="form__input form__input_termination-of-an-agreement"
          />
          <label
            for="termination-of-an-agreement"
            class="form__label form__label_termination-of-an-agreement"
            >Расторжение договора</label
          >
        </div>
        <div class="form__inp-and-lab">
          <input
            v-model="topicOfAppeal"
            type="radio"
            name="topic-of-appeal"
            id="no-letter"
            value="no-letter"
            class="form__input form__input_no-letter"
          />
          <label for="no-letter" class="form__label form__label_no-letter"
            >Не приходит письмо активации на почту</label
          >
        </div>
        <div class="form__inp-and-lab">
          <input
            v-model="topicOfAppeal"
            type="radio"
            name="topic-of-appeal"
            id="personal-account-does-not-work"
            value="personal-account-does-not-work"
            class="form__input form__input_personal-account-does-not-work"
          />
          <label
            for="personal-account-does-not-work"
            class="form__label form__label_personal-account-does-not-work"
            >Не работает личный кабинет</label
          >
        </div>
        <input
          v-model="other"
          type="text"
          placeholder="Другое"
          class="form__input form__input_other"
        />
      </div>

      <div class="form__description-of-the-problem">
        <h3 class="form__title-3">
          Описание проблемы <span class="form__necessarily">*</span>
        </h3>
        <textarea
          v-model="descriptionOfTheProblem"
          name="description-of-the-problem"
          id="description-of-the-problem"
          placeholder="Введите текст"
          required
          class="form__textarea"
        ></textarea>
      </div>

      <div class="form__loading-documents">
        <h3 class="form__title-3">Загрузка документов</h3>
        <p class="form__text">
          Приложите пожалуйста полноэкранный скриншот.<br />Это поможет быстрее
          решить проблему
        </p>
        <div class="form__inp-and-lab">
          <input
            type="file"
            name="upload-file"
            id="upload-file"
            class="form__input form__input_upload-file"
          />
          <!-- <label
            for="upload-file"
            class="form__label form__label_upload-file"
          ></label> -->
        </div>
      </div>

      <button
        @click.prevent="serverRequest"
        :disabled="isButtonDisabled"
        :class="{ 'is-disabled': isButtonDisabled }"
        class="form__button"
      >
        Отправить
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      listOfCities: [],
      selectedSite: "",
      isSelectDisabled: false,
      online: "",
      topicOfAppeal: "",
      other: "",
      descriptionOfTheProblem: "",
      isButtonDisabled: true,
    };
  },
  watch: {
    topicOfAppeal() {
      this.other = "";
    },
    online() {
      this.isSelectDisabled = !this.isSelectDisabled;
      console.log(this.selectedSite);
    },
  },
  methods: {
    serverRequest() {
      const url = "https://60254fac36244d001797bfe8.mockapi.io/api/v1/send-form";
      fetch(url, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          data.success == true
            ? this.$router.push("/modal")
            : alert("Ошибка отправки заявки");
        });
    },
  },
  updated() {
    if (
      (this.selectedSite || this.online) &&
      (this.topicOfAppeal || this.other) &&
      this.descriptionOfTheProblem
    ) {
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }

    this.other.length > 0 ? (this.topicOfAppeal = "") : null;
  },
  mounted() {
    const url = "https://60254fac36244d001797bfe8.mockapi.io/api/v1/city";

    fetch(url)
      .then((response) => response.json())
      .then((data) => (this.listOfCities = data));
  },
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}

$color-1: #ececec;

.form {
  width: 800px;
  &__title-2 {
  }

  &__shape-border {
    padding: 30px;
    color: rgb(102, 102, 102);
    border: 2px solid $color-1;
  }

  &__branch {
    margin-bottom: 15px;
  }

  &__title-3 {
    margin: 0 0 10px 0;
  }

  &__necessarily {
    color: red;
  }

  &__select {
    padding: 5px;
    width: 300px;
    border-color: $color-1;
  }

  &__option {
  }

  &__online {
    margin-bottom: 30px;
  }

  &__input {
    &_online {
    }

    &_not-happy {
    }

    &_termination-of-an-agreement {
    }

    &_no-letter {
    }

    &_personal-account-does-not-work {
    }

    &_other {
      padding: 10px;
      width: 300px;
      border: 1px solid $color-1;
    }

    &_upload-file {
    }
  }

  &__label {
    cursor: pointer;

    &_online {
    }

    &_not-happy {
    }

    &_termination-of-an-agreement {
    }

    &_no-letter {
    }

    &_personal-account-does-not-work {
    }

    &_upload-file {
    }
  }

  &__topic-of-appeal {
    margin-bottom: 30px;

    .form__inp-and-lab {
      margin-bottom: 15px;
    }
  }

  &__inp-and-lab {
  }

  &__description-of-the-problem {
    margin-bottom: 30px;
  }

  &__textarea {
    padding: 10px;
    width: 100%;
    height: 150px;
    border: 1px solid $color-1;
  }

  &__loading-documents {
    margin-bottom: 30px;
  }

  &__text {
    color: rgb(172, 172, 172);
  }

  &__button {
    padding: 10px 20px;
    border: 0;
    text-transform: uppercase;
    color: white;
    background-color: #fd7878;
    cursor: pointer;
  }
}

.is-disabled {
  background-color: #e0e0e0;
}
</style>