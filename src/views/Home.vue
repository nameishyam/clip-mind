<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goToLogin = () => {
  router.push("/login");
};

const goToSignup = () => {
  router.push("/signup");
};
</script>

<template>
  <div class="d-flex flex-column align-center justify-center h-100 pa-6">
    <h1 class="text-h4 font-weight-bold mb-2">Welcome</h1>

    <p class="text-body-2 text-medium-emphasis mb-8">
      Get started with your
    </p>

    <div class="d-flex flex-column ga-3 w-100">
      <v-btn color="primary" block size="large" @click="goToLogin">
        Login
      </v-btn>

      <v-btn
        variant="outlined"
        color="primary"
        block
        size="large"
        @click="goToSignup"
      >
        Sign Up
      </v-btn>
    </div>
  </div>
</template>
