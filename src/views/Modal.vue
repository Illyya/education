<template>
  <div class="modal">
    <span @click="closedModal" class="modal__span">&#10006;</span>
    <div class="modal__img">
      <img src="@/assets/success_img.png" alt="modal" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closedModal() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.modal {
  position: relative
  ;
  &__span {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transition: .2s ease-in;

    &:hover {
      transform: rotate(90deg);
    }
  }

  &__img {
  border: 5px solid #2e2e2e;
  }
}
</style>
