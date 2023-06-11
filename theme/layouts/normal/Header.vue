<script setup>
import {defineComponent} from 'vue'
import {useSiteData} from "@vuepress/client";
const site = useSiteData();
debugger
</script>

<template>
  <header class="masthead">
    <div class="container">
      <span class="icon">&#9997;</span>
      <h1>{{ site.title }}</h1>
      <p class="lead">{{ site.description }}</p>
      <p class="lead">通过分析github代码库总结出来的工程师代码书写习惯：<a href="http://sideeffect.kr/popularconvention#javascript" target="_blank">GO!!!</a></p>

      <p class="masthead-links">
        <a target="_blank" href="https://github.com/FattyWeb/CodeGuide">
          <span class="icon icon-github-circled"></span>
        </a>
        <a target="_blank" href="https://weibo.com/u/7068377737">
          <span class="icon icon-weibo"></span>
        </a>
      </p>
    </div>
  </header>
</template>

<style scoped lang="scss">
.masthead {
  padding: 3rem 1rem;

  text-align: center;

  color: rgba(255,255,255,.5);
  background-color: #2a3440;
}
.masthead h1 {
  margin-bottom: .25rem;

  color: #fff;
}
.masthead .icon {
  display: inline-block;

  margin: 0 .5rem;

  font-size: 3rem;
}
.masthead-links {
  font-size: 2rem;
}
.masthead-links a {
  text-decoration: none;

  color: rgba(255,255,255,.5);

  transition: all .15s linear;
}

.masthead-links a:hover {
  color: #fff;
}

@media (min-width: 38em) {
  .masthead {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

@font-face {
  font-family: "fontello";
  font-weight: normal;
  font-style: normal;

  src: url("../../fonts/fontello.eot");
  src: url("../../fonts/fontello.eot#iefix") format("embedded-opentype"),
  url("../../fonts/fontello.woff") format("woff"),
  url("../../fonts/fontello.ttf") format("truetype"),
  url("../../fonts/fontello.svg") format("svg");
}

[class^="icon-"]:before,
[class*="icon-"]:before {
  display: inline-block;

  margin-right: .2em;
  width: 1em;

  font-family: "fontello";
  font-weight: normal;
  font-style: normal;
  font-variant: normal;
  text-align: center;
  text-decoration: inherit;
  text-transform: none;

  speak: none;
}

.icon-github-circled:before {
  content: "\e800";
}
.icon-weibo:before {
  content: "\e801";
}
</style>
