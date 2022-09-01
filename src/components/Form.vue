<template>
  <!--
    This example requires updating your template:
    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="flex flex-col  md:flex-row min-h-full items-center justify-around py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full  max-w-full md:max-w-[60%] space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Пополни баланс Steam</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
        
          {{ ' ' }}
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Как это работает?</a>
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Введите логи steam</label>
            <input id="login" name="login"  required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Введите логин steam" />
          </div>
          <div>
            <label for="number" class="sr-only">Сумма</label>
            <input 
            v-model="userAmount"
          
            id="SUM" name="SUM" type="number" autocomplete="SUM" required="" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Введите сумму" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Я подтверждаю, что указал логин Steam, а не никнейм</label>
          </div>

          
        </div>

        <div>
          <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              
            </span>
            Пополнить
          </button>
        </div>
      </form>
    </div>

    <div class="flex min-h-full flex-col items-center justify-around py-12 px-4 sm:px-6 lg:px-8">
        <div class="flex">
          <div class="flex gap-5">
              <div class="flex ">
                <span>Вы заплатите: </span>
              </div>
              
              <div class="flex">{{ userAmount }}</div>
          </div>
        </div>

        <div class="flex gap-5">
          <div class="flex">
            <span>Комиссия:</span>
          </div>
          <div class="flex">{{ getComission ? getComission : '' }}</div>
        </div>

        <div class="flex gap-5">
          <div class="flex">
            <span>Получите на Steam:</span>
          </div>
          <div class="flex">{{ getUserResultAmount ? getUserResultAmount : '' }}</div>
        </div>
    </div>

      </div>
  
</template>

<script setup>
import { ref, computed, reactive } from "@vue/reactivity";
  
  const comission = 25
  const userAmount = ref()
  const getComission  = computed(() => {
    let sum = userAmount.value / 100 * comission
    return sum
  })  
  const getUserResultAmount  = computed(() => {
    let resultAmount = userAmount.value - getComission.value
    return resultAmount 
  })
</script>