<template>
    <div id="app">
      <header class="head">
        <div class="autorization">
          <router-link to="/input">LogIn</router-link>
          <p> / </p>
          <router-link to="/registr">SighUp</router-link>
        </div>
        <div>
          <router-link to="/" class="auto-shop"><h1>Auto Shop</h1></router-link>
          <ul class="navigation">
            <router-link to="/models"><li>Models</li></router-link>
            <router-link to="/brands"><li>Brands</li></router-link>
            <router-link to="/news"><li>News</li></router-link>
          </ul>
          <hr>
        </div>
      </header>

      <main>
        <router-view/>
      </main>

      <hr>
      <footer>
        <ul class="foot">
          <li>ООО "База Машин"</li>
          <li>Контактный номер телефона: 7(919)1795640</li>
          <li>Skype: sanchelo615</li>
        </ul>
      </footer>
  </div>
</template>





