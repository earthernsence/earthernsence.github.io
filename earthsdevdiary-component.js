"use strict";

const app3 = Vue.createApp({});

const entries = [{ number: 1, date: "22 Feb 2021", time: "06:58 CST (UTC-6)", content: "Hello world! I have successfully refactored my entire website into Vue, including this page! The solutions for them are a bit hacky, but that's alright -- because it works. I've recently taken a poll in my Discord server concerning Cutlery Incremental, concerning how people want the game to be written: either using The Modding Tree or doing the entire thing seperately, which includes doing UI, writing backend, etc. By the time I got to this sentence writing, the poll has closed. It ended in a 3-7 split, 3 in favour of not doing TMT, and 7 in favour. Hence, it appears Cutlery Incremental will be written using The Modding Tree as a framework. This site will show the journey!", picture: "https://i.imgur.com/p6HV0X0.png"}];

app3.component("earthsdevdiary-component", {
  created() {
    this.forceUpdate();
  },
  data() {
    return {
      entries: Array,
    };
  },
  methods: {
    forceUpdate() {
      this.entries = entries;
    }
  },
  template: `
    <div style="text-align:center">
      <a href="index.html"><b>&lt;&lt; back to main website &lt;&lt;</b></a><br>
      <h1 style="color:white">earth's dev diary</h1>
      <h2 style="color:white">&#128578; pain &#128578;</h2>
      <h3 style="color:white">current project: cutlery incremental, among other things</h3>
      <div v-if="entries.length">
        <div v-for="entry of entries">dev diary {{ entry.number }}, published {{ entry.date }} at {{ entry.time }}. <br> content: {{ entry.content }} <br> <div v-if="entry.picture !== ''"><img :src=entry.picture></div></div>
      </div>
    </div>
  `
});

app3.mount("#vue3");

