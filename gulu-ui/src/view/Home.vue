<template>
    <div>
        <Topnav />
        <div class="banner">
            <h1>轱辘ui</h1>
            <h2>一个简易的ui库</h2>
        </div>
        <p>
            <a href="">Github</a>
            <a href="">开始</a>
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
.topnav{}
</style>