<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const {t,locale} = useI18n();
const store = useCounterStore();
//可直接使用store或使用以下拆解使用
const {count ,doubleCount} = storeToRefs(store);
const {increment,multiply} = store;


</script>

<template>
  <div class="about">
    {{ count }}
    {{ doubleCount }}
    <el-button type="primary" @click="increment()">{{t('addCount')}}</el-button>
    <el-button type="primary" @click="multiply()">{{t('multiplyCount')}}</el-button>

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
