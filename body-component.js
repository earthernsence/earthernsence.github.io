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
        <div>i made bar notation and blind notation for antimatter dimensions</div>
        <div>(you can find the code for each of those notations in the babamakecash hub). </div>
        <div>i'm a stereotypical teenage male that makes things, basically</div>
        <br>
        <div>i've also worked a bit on antimatter dimensions!</div><br>
        <img src="https://cdn.discordapp.com/attachments/351477847090659341/719776200561524796/2020-06-08_21-45-53.gif" width="495.75" height="358.5"><br><div>i separated the tabs in options and</div><br>
        <img src="https://cdn.discordapp.com/attachments/351477847090659341/759235360332316672/Corporate_Allows_No_Personality.gif" width="530" height="439.5"><br><div>created challenge modals for when you start a challenge!</div><br>
        <div style="color:white">you can join my discord </div>
        <a href="https://discord.gg/NbnRGsB" target="_blank">here</a><br>
        <a href="https://earthernsence.github.io/rot13/" target="_blank">ROT13 encoder/decoder</a><br>
        <a href="https://earthernsence.github.io/accent-copier/" target="_blank">Accent copier for lazy bums</a><br>
        <a href="earthsdevdiary.html">my development diary</a><br>
        <a href="https://earthernsence.github.io/earths-resource-pack/" target="_blank">Earth's Minecraft resource pack</a><br>
        <a href="babamakecash.html">Baba Make Cash hub</a><br>
        <a href="https://earthernsence.github.io/rainbow-draw/" target="_blank">Rainbow Drawing Canvas</a><br>
        <div>It has a (hopefully) comprehensive README that you can use to customize it.</div>
    </div>
  `
});

app.mount("#vue");
