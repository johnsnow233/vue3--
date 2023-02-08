<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <div class="menu">
      <div>菜单1</div>
      <div>菜单2</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.topnav {
  color: blue;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
  }
}
</style>
