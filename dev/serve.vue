<script>
import Vue from 'vue';
import VueCheckboxMb from '@/vue-checkbox-mb.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueCheckboxMb
  }
});
</script>

<template>
  <div id="app">
    <vue-checkbox-mb />
  </div>
</template>
