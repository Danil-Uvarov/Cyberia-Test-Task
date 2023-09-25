<template>
  <section class="form">
    <div class="form__wrapper">
      <div class="form__left-container left">
        <img src="/image/planet.png" alt="" class="left__planet-img">
        <h5 class="left__title">Расскажите
          о вашем проекте</h5>
        <p class="left__description">Поделитесь с нами информацией, чем мы можем быть полезны: реализовать идею или
          выделить разработчиков для ИТ-команды. Чем больше вы нам расскажете — тем продуктивнее будет дальнейшее
          обсуждение.</p>
      </div>
      <form action="#" class="form__block-right" method="post">
        <input type="email" placeholder="E-mail" class="form__email">
        <input type="tel" placeholder="Телефон" class="form__phone">
        <input type="text" placeholder="Сообщение" class="form__message">
        <div class="form__block-button">
          <input type="submit" class="form__dispatch">
          <p class="form__description">Нажимая “Отправить”, Вы даете согласие на обработку персональных данных</p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.form {
  background-color: rgb(37, 38, 49);

}

.form__wrapper {
  margin: 0 auto;
  max-width: 1242px;
  padding-top: 95px;
  padding-bottom: 175px;
  display: flex;
  justify-content: space-between;
}

.form__left-container {
  max-width: 455px;
}

.left__planet-img {
  width: 100%;
  max-width: 156px;

}

.left__title {
  margin-top: 14px;
  font-size: 38px;
  font-weight: 500;
  color: #EFF3FF;
}

.left__description {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #EFF3FF;
}

.form__block-right {

  display: flex;
  flex-direction: column;
  gap: 33px;
}

.form__email {
  width: 100%;
  height: 100%;
  max-width: 596px;
  max-height: 55px;
  background: transparent;
  border: 1px solid #EEF3FF;
  border-radius: 8px;
}

.form__email::placeholder {
  padding-left: 18px;
}

.form__phone {
  color: #FFFFFF;
  width: 100%;
  height: 100%;
  max-width: 596px;
  max-height: 55px;
  background: transparent;
  border: 1px solid #EEF3FF;
  border-radius: 8px;
}

.form__phone::placeholder {
  padding-left: 18px;
}

.form__message {
  width: 100%;
  height: 100%;
  max-width: 596px;
  max-height: 92px;
  background: transparent;
  border: 1px solid #EEF3FF;
  border-radius: 8px;
}

.form__message::placeholder {
  padding-left: 18px;
}

.form__block-button {
  display: flex;
  gap: 40px;
}

.form__dispatch {
  padding: 20px 86px;
  background-color: #2D76F9;
  border: none;
  border-radius: 35px;
}

.form__description {
  max-width: 308px;
  font-size: 14px;
  font-weight: 400;
  color: #EEF3FF;
}
</style>