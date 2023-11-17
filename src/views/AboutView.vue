<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
//載入i18n
const {t,locale} = useI18n();
//載入Pinia的CounterStore
const counterStore = useCounterStore();
const {counter, amount, doubleCounter, counterAddAmount} = storeToRefs(counterStore);
const {increment, multiply } = counterStore;
//強制將state改變
const changeStore = () =>{
  counterStore.$state = { 
    counter: 666,
    amount: 999
  }
}
</script>

<template>
  <div class="about">
    counter:{{ counter }}<br/>
    doubleCounter:{{ doubleCounter }}<br/>
    counterAddAmount:{{ counterAddAmount }}<br/>
    <el-input v-model="amount" type="number" placeholder="Please input"></el-input><br/>
    <el-button type="primary" @click="increment()">{{t('addCount')}}</el-button>
    <el-button type="success" @click="multiply()">{{t('multiplyCount')}}</el-button>
    <el-button type="info" @click="changeStore()">{{t('change')}}</el-button>
    <el-button type="danger" @click="counterStore.$reset()">{{t('reset')}}</el-button>
  </div>
</template>

<style>
</style>
