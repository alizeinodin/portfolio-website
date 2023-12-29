<script lang="ts">
import {Validator} from 'simple-vue3-validator'
export default {
  data() {
    return {
      name: "",
      mail: "",
      content: "",
      errors:{
        name: false,
        mail: false,
      },
    }
  },
  validators: {
    mail(value:String) {
      return Validator.value(value).required().email();
    },
    name(value:String) {
      return Validator.value(value).required();
    }
  },
  methods: {
    submit() {
      if(this.emailValidation() && this.nameValidation())
      {
        alert('پیام با موفقیت ارسال شد.')
      }
      
    },
    emailValidation() {
      if (this.emailV(this.mail)._messages.length === 0) {
        this.errors.mail = false;
        return true;
      } else {
        this.errors.mail = true;
        return false;
      }
    },
    nameValidation() {
      if (this.nameV(this.name)._messages.length === 0) {
        this.errors.name = false;
        return true;
      } else {
        this.errors.name = true;
        return false;
      }
    },
    emailV(value:String) {
      return Validator.value(value).required().email();
    },
    nameV(value:String) {
      return Validator.value(value).required();
    }
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
      <form class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div class="mb-4 flex flex-col gap-6">
          <div class="relative h-11 w-full min-w-[200px]">
            <input
                type="text"
                v-model="name"
                @change="nameValidation()"
                class="peer h-full w-full rounded-md border border-blue-gray-200 bg-gray-50 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
            />
            <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              نام و نام خانوادگی
            </label>
            <p class="text-xs mt-1 mr-2 text-pink-500" :class="errors.name ? 'block' : 'hidden'">لطفا
              نام و نام خانوادگی خود را وارد کنید.</p>
          </div>
          <div class="relative h-11 w-full min-w-[200px]">
            <input
                type="email"
                v-model="mail"
                @change="emailValidation()"
                class="peer h-full w-full rounded-md border border-blue-gray-200  bg-gray-50 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
            />
            <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              ایمیل
            </label>
            <p class="text-xs mt-1 mr-2 text-pink-500" :class="errors.mail ? 'block' : 'hidden'">ایمیل
              وارد شده معتبر نیست!</p>
          </div>
          <div class="relative h-48 w-full min-w-[200px]">
          <textarea
              class="peer h-full w-full rounded-md border border-blue-gray-200  bg-gray-50 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeHolder=" "
          />
            <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              توضیحات
            </label>
          </div>
        </div>
        <div class="inline-flex items-center">
          <label
              class="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
              for="checkbox"
              data-ripple-dark="true"
          >

          <span
              class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
            >
              <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          </label>
          <label
              class="mt-px cursor-pointer select-none font-light text-gray-700"
              for="checkbox"
          >
          </label>
        </div>
        <button
            class="mt-2 block w-full select-none rounded-lg bg-indigo-900 py-3 px-6 text-center align-middle text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            @click="submit()"
            data-ripple-light="true"
        >
          ارسال فرم تماس
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>