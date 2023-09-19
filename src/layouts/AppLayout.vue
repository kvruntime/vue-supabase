<script setup></script>

<template>
  <v-app>
    <header>
      <slot name="header" />
    </header>
    
    <v-main>
      <main>
        <slot name="main" />
      </main>
    </v-main>

    <v-footer>
      <footer>
        <slot name="footer" />
      </footer>
    </v-footer>

  </v-app>
</template>

<style></style>