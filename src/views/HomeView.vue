<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useI18n } from 'vue-i18n';
const {t,locale} = useI18n();
const user = t('title');
</script>

<template>
  <main>
    <TheWelcome />
    {{ $t('title') }}
  </main>
</template>
