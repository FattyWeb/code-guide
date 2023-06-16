<script setup>
import {useSiteData} from "@vuepress/client";
const site = useSiteData();
</script>

<template>
  <div class="wrapper greenBg">
    <section>
      <h1 class="title">{{ site.title }}</h1>
      <p class="text-content">{{ site.description }} </p>
      <p class="text-content">通过分析github代码库总结出来的工程师代码书写习惯：<a href="http://sideeffect.kr/popularconvention#javascript" target="_blank">GO!!!</a></p>
      <a href="#toc"><button class="start-button">开 始 <span class="arrow">›</span></button></a>
      <a target="_blank" href="https://github.com/FattyWeb/CodeGuide">
        <span class="icon icon-github-circled"></span>
      </a>
      <a target="_blank" href="https://weibo.com/u/7068377737">
        <span class="icon icon-weibo"></span>
      </a>
    </section>
    <div class="stage">
      <div class="blob lg floating">
        <div class="dot"></div>
      </div>
      <div class="blob md movingTop">
        <div class="dot"></div>
      </div>
      <div class="blob md movingLeft">
        <div class="dot wobble"></div>
      </div>
      <div class="blob sm movingLeft">
        <div class="dot wobble"></div>
      </div>
      <div class="blob sm movingLeft">
        <div class="dot wobble"></div>
      </div>
      <div class="blob xsm movingLeft">
        <div class="dot wobble"></div>
      </div>
      <div class="blob sm movingTop">
        <div class="dot wobble"></div>
      </div>
      <div class="blob xsm movingTop">
        <div class="dot wobble"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: $cyan;
  height: 100vh;
}
section {
  margin: 0 5% 0 auto;
  width: 50%;
  padding: 15vw 0 10vw 0;
  height: auto;
}
.stage {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  mix-blend-mode: lighten;
  filter: contrast(100);
  overflow: hidden;
}

.title {
  font-weight: 900;
  font-size: 4vw;
  color: $black;
  margin: 0;
}

.text-content {
  margin: 2.1vw 0 2.625vw 0;
  color: $black-l;
  line-height: 1.6;
}

.start-button {
  border: 2px solid $cyan;
  background-color: #FFFFFF;
  color: $cyan;
  cursor: pointer;
  font-weight: 300;
  font-size: 1.3vw;
  box-shadow: none;
  padding: 0.525vw 1.05vw;
  transition: 0.3s ease-out;
  .arrow {
    display: inline-block;
    transition: 0.3s linear;
  }

  &:hover {
    color: #FFFFFF;
    box-shadow: inset 100px 0 0 0 $cyan;

    .arrow {
      transform: translateX(5px);
    }
  }
}

/* BLOBS */
.dot {
  border-radius: 50%;
  display: block;
  position: absolute;
  background: black;
  filter: blur(10px);
}
.blob {
  display: block;
  position: relative;
}
.blob.floating .dot:after {
  content: "";
  display: block;
  border-radius: 50%;
  position: relative;
  width: 50%;
  height: 50%;
  top: 40%;
  left: 40%;
}
.blob.lg .dot {
  width: 55vw;
  height: 50vw;
}
.blob.md .dot {
  width: 20vw;
  height: 15vw;
}
.blob.sm .dot {
  width: 4.75vw;
  height: 5.5vw;
}
.blob.xsm .dot {
  width: 2.3vw;
  height: 2.75vw;
}

/* BLOB POSITIONS */
.blob:nth-child(1) {
  top: -30%;
  left: -25%;
}
.blob:nth-child(2) {
  left: -8%;
}.blob:nth-child(3) {
   top: -5%;
 }
.blob:nth-child(4) {
  top: 35%;
}
.blob:nth-child(5) {
  top: 50%;
}
.blob:nth-child(6) {
  top: 25%;
}
.blob:nth-child(7) {
  left: 12%;
}
.blob:nth-child(8) {
  left: 29%;
}

/* ANIMATIONS */
@keyframes moveRTL{
  0% {
    left: 110%;
  }
  100% {
    left: -50%;
  }
}

@keyframes moveBTT {
  0% {
    top: 110%;
  }
  100% {
    top: -10%;
  }
}

@keyframes floating {
  0% {
    transform: scale(1) rotate(0deg) skew(0deg,5deg);
  }
  100% {
    transform: scale(1.005) rotate(5deg) skew(0deg,0deg);
  }
}

@keyframes wobble {
  0% {
    transform: rotate(65deg) skew(0deg,0deg);
  }
  100% {
    transform: rotate(-35deg) skew(5deg,0deg);
  }
}

.wobble,
.floating,
.movingTop,
.movingLeft {
  animation-iteration-count: infinite;
}

.movingTop,
.movingLeft {
  animation-timing-function: linear;
  animation-direction: normal;
}

.wobble,
.floating {
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}

/* BLOBS WOBBLING :) */
.wobble {
  animation-name: wobble;
}
.md .wobble {
  animation-duration: 8s;
}
.sm .wobble {
  animation-duration: 3.5s;
}
.xsm .wobble {
  animation-duration: 3s;
}

/* BLOBS FLOATING */
.floating {
  animation-name: floating;
}
.lg.floating {
  animation-duration: 10s;
}

/* BLOBS MOVING LEFT */
.movingLeft {
  animation-name: moveRTL;
}
.md.movingLeft {
  animation-duration: 32s;
}
.sm.movingLeft {
  animation-duration: 28s;
}
.xsm.movingLeft {
  animation-duration: 23s;
}

/* BLOBS MOVING TOP */
.movingTop {
  animation-name: moveBTT;
}
.md.movingTop {
  animation-duration: 18s;
}
.sm.movingTop {
  animation-duration: 13s;
}
.xsm.movingTop {
  animation-duration: 11s;
}

/* DELAYS */
.blob:nth-child(2) {
  animation-delay: 7s;
}
.blob:nth-child(4) .wobble {
  animation-delay: 2s;
}
.blob:nth-child(5) {
  animation-delay: 5s;
}
.blob:nth-child(7) {
  animation-delay: 5s;
}

/* HIDDEN ELEMENTS */
.wrapper.hidden {
  position: absolute;
top: 0;
left: 0;
right: 0;
  background: #FFFFFF;
  mix-blend-mode: darken;
}
.wrapper.hidden .stage {
  background: #000000;
}
.wrapper.hidden .dot,
.wrapper.hidden .floating .dot:after {
  background: #FFFFFF;
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

.icon{
  font-size: 1.5em;
  color: $cyan;
  vertical-align: middle;
}

[class^="icon-"]:before,
[class*="icon-"]:before {
  display: inline-block;

  margin-left: 0.5em;
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
