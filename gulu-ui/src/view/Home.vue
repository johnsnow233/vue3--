<template>
    <div>
        <Topnav />
        <div class="banner">
            <h1>轱辘ui</h1>
            <h2>一个简易的ui库</h2>
            <a href="">Github</a>
            <router-link to='/doc'>开始</router-link>
        </div>
        <p>
            
        </p>
    </div>
</template>

<script lang="ts">
    import Topnav from '../components/Topnav.vue'
    export default{
        components:{Topnav}
    }

    
</script>

<style lang="scss" scoped>
.banner {
  color: red;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >.actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: 4px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>