<template>
  <section class="form">
    <div class="form__wrapper">
      <div class="form__left-container left">
        <div class="left__image-wrapper">
          <img src="/image/planet.png" alt="" class="left__planet-img" />
          <h5 class="left__title">Расскажите о вашем проекте</h5>
        </div>
        <p class="left__description">
          Поделитесь с нами информацией, чем мы можем быть полезны: реализовать
          идею или выделить разработчиков для ИТ-команды. Чем больше вы нам
          расскажете — тем продуктивнее будет дальнейшее обсуждение.
        </p>
      </div>
      <form
        @submit.prevent
        class="form__block-right"
        method="post"
        enctype="multipart/form-data"
      >
        <div class="form__input-wrapper">
          <input
            v-model="form.email"
            type="email"
            class="form__input"
            placeholder=" "
            id="email"
          />
          <label for="email" class="form__label">Email</label>
        </div>

        <div class="form__input-wrapper">
          <input
            v-model="form.phone"
            type="tel"
            id="phone"
            class="form__input"
            placeholder=" "
          />
          <label for="phone" class="form__label">Телефон</label>
        </div>
        <div class="form__message-wrapper">
          <textarea
            v-model="form.message"
            type="text"
            id="message"
            placeholder=" "
            class="form__message-textarea"
          ></textarea>
          <label for="message" class="form__label">Сообщение</label>
          <div class="form__files">
            <div
              class="form__files-list"
              v-for="(file, index) in files"
              :key="index"
            >
              <div class="form__file-item">
                <span class="form__file-name">{{ file.name }}</span>
                <span class="form__file-size">({{ file.size }})</span>
                <div class="form__file-del" @click="deleteFille(index)"></div>
              </div>
            </div>
            <input
              id="file"
              type="file"
              multiple
              class="form__file-input"
              @change="pushFile"
            />
            <label for="file" class="form__label-img">
              <img src="/image/paperclip.svg" class="form__img" alt=""
            /></label>
          </div>
        </div>
        <div class="form__block-button">
          <input @click="sendFeedback" type="submit" class="form__dispatch" />
          <p class="form__description">
            Нажимая “Отправить”, Вы даете согласие на обработку персональных
            данных
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { feedbacks } from "../api/feedbacks";

const files = ref<File[]>([]);
const pushFile = (event: Event) => {
  const fileList = (event.target as HTMLInputElement).files;
  if (!fileList) {
    return;
  }
  files.value.push(...fileList);
};
const deleteFille = (index: number) => {
  files.value.splice(index, 1);
};

const form = ref({
  email: "",
  phone: "",
  message: "",
  attachment: files.value,
});
const formData = new FormData();
const sendFeedback = () => {
  formData.append("email", form.value.email);
  formData.append("phone", form.value.phone);
  formData.append("message", form.value.message);
  feedbacks(formData);
};
</script>

<style scoped>
.form {
  font-family: "Open Sans";
  padding: 95px 64px 95px 64px;
  background-color: rgb(37, 38, 49);
}

.form__wrapper {
  margin: 0 auto;
  max-width: 1242px;
  display: flex;
  justify-content: space-between;
}

.form__left-container {
  max-width: 455px;
}

.left__planet-img {
  width: 100%;
  box-sizing: border-box;
  max-width: 156px;
}

.left__title {
  font-family: "Rubik";
  margin-top: 14px;
  font-size: 38px;
  font-weight: 500;
  color: #eff3ff;
}

.left__description {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #eff3ff;
  opacity: 50%;
}

.form__block-right {
  display: flex;
  flex-direction: column;
  gap: 33px;
}

.form__input-wrapper {
  position: relative;
}
.form__input {
  color: #eff3ff;
  background: transparent;
  border: 1px solid #9aa8ba;
  border-radius: 8px;
  outline: none;
  padding: 15px 0 15px 10px;
  transition: border-color 0.2s;
  width: 100%;
}

.form__input:focus + .form__label {
  top: -10px;
}
.form__input:not(:placeholder-shown) + .form__label {
  top: -10px;
}
.form__label {
  padding: 0 10px;
  background-color: #252631;
  position: absolute;
  transition-duration: 0.8s;
  left: 10px;
  top: 17px;
  color: #eff3ff;
}

.form__message-wrapper {
  width: 100%;
  border: 1px solid #9aa8ba;
  border-radius: 8px;
  margin: 0 0 30px;
  min-height: 210px;
  position: relative;
}
.form__message-textarea {
  color: #eff3ff;
  position: relative;
  resize: none;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 0 20px 20px;
  width: 100%;
  height: 100%;
  max-height: 120px;
}
.form__message-textarea:focus + .form__label {
  top: -10px;
}
.form__message-textarea:not(:placeholder-shown) + .form__label {
  top: -10px;
}

.form__files {
  max-width: 520px;
  max-height: 76px;
  overflow: auto;
}
.form__files-list {
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 20px;
}
.form__file-item {
  background-color: #9aa8ba;
  align-items: center;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  padding: 5px 12px;
  width: 70%;
}
.form__file-name {
  color: #292b35;
}
.form__file-size {
  color: #eff3ff;
}
.form__file-del {
  cursor: pointer;
  height: 9px;
  position: relative;
  width: 9px;
}
.form__file-del::after {
  background-color: #252631;
  content: "";
  border-radius: 2px;
  display: block;
  height: 2px;
  margin-top: 4px;
  position: absolute;
  width: 10px;
  transform: rotate(-45deg);
}
.form__file-del::before {
  background-color: #252631;
  content: "";
  border-radius: 2px;
  display: block;
  height: 2px;
  margin-top: 4px;
  position: absolute;
  width: 10px;
  transform: rotate(45deg);
}
.form__file-input {
  display: none;
}
.form__label-img {
  position: absolute;
  bottom: 18px;
  right: 12px;
}
.form__img {
}

.form__block-button {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.form__dispatch {
  width: 100%;
  max-width: 247px;
  padding: 20px 86px;
  background-color: rgba(45, 118, 249);
  border: none;
  border-radius: 35px;
}
.form__dispatch:hover {
  transition: 0.5s;
  background-color: rgb(8, 83, 223);
}
.form__description {
  max-width: 308px;
  font-size: 14px;
  font-weight: 400;
  color: #eef3ff;
}
@media (max-width: 1024px) {
  .form {
    padding: 58px 182px 106px 182px;
  }
  .form__wrapper {
    flex-direction: column;
  }
  .form__left-container {
    margin-bottom: 20px;
  }
  .form__message {
    height: 92px;
  }
  .form__dispatch {
    padding: 18px 76px;
  }
}
@media (max-width: 910px) {
  .form {
    padding: 40px 24px;
  }
  .form__wrapper {
    max-width: 327px;
  }
  .left__planet-img {
    max-width: 76px;
  }
  .left__image-wrapper {
    display: flex;
    gap: 28px;
  }
  .left__title {
    font-size: 24px;
  }
  .left__description {
    display: none;
  }
  .form__left-container {
    margin-bottom: 37px;
  }
  .form__message {
    height: 139px;
  }
  .form__block-button {
    margin: 0 auto;
    flex-direction: column;
  }
  .form__description {
    padding-top: 26px;
    text-align: center;
  }
  .form__dispatch {
    margin: 0 auto;
  }
}
</style>
