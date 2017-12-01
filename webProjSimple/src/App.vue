<template>
  <div id="app2">
    <h1>{{ totalPrice }}</h1>
    <!-- <router-view>标记路由页面替换位置-->
    <router-view></router-view>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app2',
    methods: {
      onClickListener: function () {
      }
    },
    computed: {
      totalPrice()
  {
    return this.$store.getters.getTotal
  }
  },
  data()
  {
    return {
      msg: 'App',
    }
  }
  }
</script>

<style>
</style>
