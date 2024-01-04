<!-- <script setup>
import { VueMathjax } from 'vue-mathjax'
import { ref } from 'vue'

const formula = ref('$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$');
</script>

<template>
  <div>
  <textarea v-model="formula" cols="30" rows="10"></textarea>
    <VueMathjax :formula="formula"></VueMathjax>
  </div>
</template> -->

<template>
  <div>
    <textarea v-model="formula" />
    <vue-mathjax :formula="formula" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$'
    }
  }
};
</script>