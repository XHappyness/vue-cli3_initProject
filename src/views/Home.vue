<template>
  <div class="home">
    <div class="name">
      home
    </div>
    <el-button @click="test">test</el-button>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>

<style lang="postcss" scoped>
.home {
  margin-top: 100px;
  & .name {
    color: red;
  }
}
</style>

