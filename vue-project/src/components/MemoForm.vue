<script></script>

<template>
  <!-- <div><input type="text"></div> -->
  <div><textarea v-model="content"></textarea></div>
  <div class="center">
    <button @click="save()">保存</button>
  </div>
  <div>
    <span>{{ memos }}</span>
  </div>
</template>

<style scoped>
div {
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
}
textarea {
  width: 50%;
  height: 10em;
}
button {
  width: 5em;
  margin: 3px;
}
/* .center {
  text-align: center;
} */
</style>
