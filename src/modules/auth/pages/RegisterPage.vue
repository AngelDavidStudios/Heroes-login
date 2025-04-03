<script setup lang="ts">

import { SignUp } from '@clerk/vue'

</script>

<template>
  <SignUp fallback-redirect-url="/" sign-in-url="/auth/login" />
</template>

<style scoped>

</style>
