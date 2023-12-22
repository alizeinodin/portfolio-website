<script lang="ts">
export default {};
</script>

<template>
  <!-- Navbar for Large Screens -->
  <div class="bg-indigo-950 w-full bg-[url('/img/bg-footer1.png')] lg:h-96 h-100vh pb-10 mx-auto">
    <div class="flex flex-wrap container lg:justify-between  mx-auto">
      <div class="lg:mt-20 mt-10 lg:px-24 px-5">
        <div>
          <div>
            <h2 class="text-gray-50 lg:text-2xl text-base">TadGroup</h2>
            <div class="border border-gray-400 mt-2 lg:w-28 w-20"></div>
          </div>
          <div class="lg:mt-8 mt-4 text-gray-300 lg:text-md text-xs w-80 text-justify">
            <p>گروه نرم افزاری تاد | ما در سال ۸۲ شروع به فعالیت کردیم. و هم اکنون بزرگ ترین گروه نرم افزاری در ایران
              هستیم. </p>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="lg:mt-20 mt-10 lg:px-24 px-5">
        <div>
          <h2 class="text-gray-50 lg:text-2xl text-base">ارتباط با ما</h2>
          <div class="border border-gray-400 mt-2 lg:w-28 w-20"></div>
        </div>
        <div class="lg:mt-8 mt-4 lg:text-base text-xs text-gray-300 flex flex-col space-y-3">
          <div>
            <p>
              آدرس: تهران - میدان آرژانتین - کوچه نصر - پلاک ۲۱
            </p>
          </div>
          <div>
            <p>
              تلفن همراه: ۰۹۳۳۶۰۱۱۳۹۰
            </p>
          </div>
          <div>
            <p>
              تلفن: ۰۲۱۳۳۳۷۴۵۰۹۸۷
            </p>
          </div>
          <div>
            <p>
              ایمیل: info@tadgroup.ir
            </p>
          </div>
        </div>
      </div>
      <div class="lg:mt-20 mt-10 lg:px-24 px-5">
        <div>
          <h2 class="text-gray-50 lg:text-2xl text-base">اشتراک در خبرنامه</h2>
          <div class="border border-gray-400 mt-2 w-28"></div>
        </div>
        <div class="mt-8 text-gray-300 flex flex-col space-y-5">
          <div class="flex">
            <input type="text" id="news"
                   class="bg-white border border-indigo-300 text-gray-900 text-xs rounded-r-md focus:ring-blue-500 focus:border-blue-500 block w-full lg:p-2.5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="ایمیل" required>
            <button class="bg-indigo-500 text-gray-50 rounded-l-md px-3 lg:text-sm text-xs">مشترک</button>
          </div>
          <div class="w-80 text-justify lg:text-base text-xs text-gray-300">
            <p>
              با عضویت در خبرنامه ما از آخرین خبر ها - تخفیفات و محصولات ما در سریع ترین زمان مطلع شوید.
            </p>
          </div>
        </div>
      </div>

    </div>
    <div class="text-center lg:mt-16 mt-8 text-gray-50 lg:text-xs text-[8px]">
      <p>طراحی و توسعه توسط <a href="https://github.com/alizeinodin" class="text-blue-500 hover:text-blue-900">علی زین الدینی</a></p>
    </div>
  </div>
</template>

<style scoped></style>