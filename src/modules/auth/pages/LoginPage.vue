<script setup lang="ts">

import { SignIn } from '@clerk/vue'

</script>

<template>
  <SignIn fallback-redirect-url="/" sign-up-url="/auth/register" />
</template>

<style scoped></style>
