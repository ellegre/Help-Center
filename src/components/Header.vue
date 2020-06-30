<template>
  <div class="header">
    <div class="header__container">
      <div class="logo">
        <a title="Home" class="logo__link" href="/hc/en-us">
          <img src="https://theme.zdassets.com/theme_assets/1281227/0d0443ea19a6be3a1ef685d871bfb9b67a0ee540.png" width="50" height="50">
        </a>
        <p class="logo__name">Help Center</p>
      </div>
      <div class="auth">
        <button class="auth__button" type="submit">Submit a request</button>
        <button class="auth__button" type="text">Sign in</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
.header {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: $base-green;
    color: $white;
    &__container {
        padding: 20px 30px;
        display: flex;
        justify-content: space-between;
    }
}

.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
      &__link {
        margin-right: 10px;
      }
}

.auth {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &__button {
    font-size: 12px;
    text-transform: uppercase;
    color: $white;
    background-color: transparent;
    border: none;
    padding: 18px 20px;
    letter-spacing: 2px;
    font-family: "Biotif", Arial, Helvetica, sans-serif;
    font-weight: lighter;
    box-sizing: border-box;
    cursor: pointer;
        &:hover,
        &:focus {
          color: $bright-green;
        }
  }
}
</style>
