/* eslint-disable max-len */
"use strict";

const app = Vue.createApp({});

app.component("body-component", {
  template: `
    <div style="text-align:center">
        <h1 style="color:white">earth's things</h1>
        <h2 style="color:white"> a place where i do not care about styling</h2>
        <div>about yours truly</div>
        <!--These are heavily divided because style points-->
        <div>hi everybody, i'm earth and i've coded some projects of my own and also</div>
        <div>have hosted some community things (like the save archive). </div>
        <div>I also created ADAB, a superfluous but useful bot for use on the AD discord</div>
        <div>i made bar notation and blind notation for antimatter dimensions</div>
        <br>
        <div>i've also worked a bit on antimatter dimensions!</div><br>
        <div>generally i've worked on adding modals to the game while also doing some issue cleanup throughout the development process of the last few updates to the game; the bulk of my work happened during the Reality update.</div><br>
        <div> i am a tester for both the web and mobile versions of the game
        <div style="color:white">you can join my discord </div>
        <a href="https://discord.gg/NbnRGsB" target="_blank">here</a><br>
        <a href="https://github.com/earthernsence/ADAnswers-Bot/" target="_blank">ADAnswersBot</a><br>
        <a href="https://earthernsence.github.io/rot13/" target="_blank">ROT13 encoder/decoder</a><br>
        <a href="https://earthernsence.github.io/accent-copier/" target="_blank">Accent copier for lazy bums</a><br>
        <a href="https://earthernsence.github.io/earths-resource-pack/" target="_blank">Earth's Minecraft resource pack</a><br>
        <a href="https://earthernsence.github.io/rainbow-draw/" target="_blank">Rainbow Drawing Canvas</a><br>
        <div>It has a (hopefully) comprehensive README that you can use to customize it.</div>
    </div>
  `
});

app.mount("#vue");
