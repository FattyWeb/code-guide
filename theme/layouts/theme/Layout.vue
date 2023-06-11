<script>
import {defineComponent} from 'vue'
import Header from "../normal/Header.vue";
import Directory from "../../views/Directory.vue";
import Header2 from "../normal/Header2.vue";

export default defineComponent({
  name: "Layout",
  components: {Header2, Directory, Header}
})
</script>

<template>
<!--  <Header/>-->
  <Header2/>
  <Directory/>
  <Content />
</template>

<style scoped>

</style>
