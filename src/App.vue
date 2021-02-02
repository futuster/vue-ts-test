<template>
  <div id="app">
    <div class="container">

      <div id="nav">
        <router-link to="/">Главная</router-link>
        |
        <router-link :to="`/${Math.random().toString(36).substring(2)}`">404</router-link>
      </div>

      <router-view/>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
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

.btn {
  text-decoration: none;
  color: #EEE;
  background: #007be0;
  display: inline-block;
  font-size: 16px;
  padding: .4rem .5rem;
  border-radius: 3px;
  outline: none;
  border: 1px solid #666;
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.btn:hover {
  background: #3aa2ff;
  color: #FFF;
  box-shadow: 0 0 3px #48ceff;
}

h1, h2, h3, h4 {
  font-weight: 300;
}

a:color {
  color: #007be0;
}
a:hover {
  color: #CC0000;
}
body, * {
  box-sizing: border-box;
}
</style>
