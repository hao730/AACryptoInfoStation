import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '../router/index';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    amount: 0,
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
    counterAddAmount:(state) => state.counter + Number(state.amount),
  },
  actions: {
    increment() {
      this.counter++;
      console.log("increment.count:",this.counter);
    },
    multiply(){
      this.counter = this.counter * this.counter;
      console.log("multiply.count:",this.counter);
    },
    /*$reset(){
      this.counter = 0;
      console.log("reset.count:",this.counter);

    }*/
  },
})