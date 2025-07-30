<script setup></script>

<template>
  <div class="relative p-6 bg-gray-900 z-1 dark:bg-gray-800 sm:p-0">
    <div
      class="relative flex flex-col justify-center w-full h-screen dark:bg-gray-800 sm:p-0 lg:flex-row"
    >
      <!-- form -->
      <div class="flex flex-col flex-1 w-full lg:w-1/2">
        <div
          class="flex flex-col justify-center flex-1 w-full max-w-md mx-auto"
        >
          <div class="p-8 rounded-xl bg-white dark:bg-gray-900">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
