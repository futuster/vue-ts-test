<template>
  <div id="app">
    <div class="container">

      <div id="nav">
        <router-link to="/">Главная</router-link>
        |
        <router-link :to="Math.random().toString(36).substring(2)">404</router-link>
      </div>

      <router-view/>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

.router-link-exact-active {
  cursor: text;
  color: #212529;
  text-decoration: none;
}

.container {
  margin: 0 auto;
  width: 80%;
}
</style>
