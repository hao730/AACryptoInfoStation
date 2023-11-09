<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const {t,locale} = useI18n();
const store = useCounterStore();
const {count ,doubleCount} = storeToRefs(store);
const {increment} = store;

</script>

<template>
  <div class="about">
    {{ count }}
    {{ doubleCount }}
    <el-button type="primary" @click="increment()">{{$t('addCount')}}</el-button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
