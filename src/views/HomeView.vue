<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useI18n } from 'vue-i18n';
import { useCounterStore } from '@/stores/counter';
const {t,locale} = useI18n();
const store = useCounterStore();
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
