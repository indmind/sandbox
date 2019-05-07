<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This lab is used for experimenting and pouring my useless idea
    </p>
    <h3>This website created using</h3>
    <ul>
      <li>
        <a href="https://github.com/vuejs/vue" target="_blank" rel="noopener"
          >vue</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
          target="_blank"
          rel="noopener"
          >pwa</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a
          href="https://www.instagram.com/dvync_/"
          target="_blank"
          rel="noopener"
          >My Instagram</a
        >
      </li>
      <li>
        <a href="https://twitter.com/dvync_" target="_blank" rel="noopener"
          >My Twitter</a
        >
      </li>
      <li>
        <a href="https://github.com/indmind" target="_blank" rel="noopener"
          >My GitHub</a
        >
      </li>
      <li>
        <a href="https://www.indmind.ga/" target="_blank" rel="noopener"
          >My Website</a
        >
      </li>
      <li>
        <a href="https://www.indmind.ga/blog" target="_blank" rel="noopener"
          >My Blog</a
        >
      </li>
    </ul>
    <h3>My projects with my friends</h3>
    <ul>
      <li>
        <a href="https://www.dvync.site/dasi" target="_blank" rel="noopener"
          >Dasi</a
        >
      </li>
      <li>
        <a
          href="https://www.indmind.ga/jawaskrip/"
          target="_blank"
          rel="noopener"
          >Jawaskrip</a
        >
      </li>
      <li>
        <a
          href="https://github.com/indmind/AutoTypeRacer"
          target="_blank"
          rel="noopener"
          >Auto Type Racer</a
        >
      </li>
      <li>
        <a href="https://github.com/indmind/bagi" target="_blank" rel="noopener"
          >Bagi</a
        >
      </li>
      <li>
        <a
          href="https://github.com/indmind/dotfiles"
          target="_blank"
          rel="noopener"
          >My (old) Dotfiles</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0984e3;
}
</style>
