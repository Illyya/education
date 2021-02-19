<template>
  <div class="modal">
    <div class="modal__img">
      <span @click="closedModal" class="modal__span">&#10006;</span>
      <p class="modal__text">Заявка отправлена.</p>
      <img src="@/assets/success_img.png" alt="modal" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closedModal() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.modal {
  display: flex;
  align-items: center;
  text-align: center;

  &__text {
    font-weight: 700;
  }

  &__span {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
      transform: rotate(90deg);
    }
  }

  &__img {
    padding: 40px;
    position: relative;
    border: 5px solid #2e2e2e;
  }
}
</style>
