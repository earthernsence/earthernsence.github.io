"use strict";

const app3 = Vue.createApp({});

const entries = [{ title: "pain", number: 3, date: "24 Feb 2021", time: "07:06 CST (UTC-6)", content: "Hello everyone! This will be my third entry I am publishing, but this time not a lot of changes have been made. I've run across a good lot of errors that I can't quite seem to figure out how to resolve. I'm not entirely worried about this, though, as it's currently quite early in the morning, and I'll have plenty of time to work on it in the evening. Have a good one!", picture: "" },
{ title: "it begins", number: 2, date: "23 Feb 2021", time: "06:54 CST (UTC-6)", content: "Good morning/day/evening/night, wherever you are, there's a new earth's dev diary entry. I have started work on Cutlery Incremental, but I'm mostly doing it in my spare time due to heavy procrastination and doing other things that don't require nearly as much thinking. I do promise, however, to try to add some content per day, push a small update, and then update this dev diary in the morning. As for right now, though, I have pushed v0.1.0, which was mostly just code cleanup to fix my sanity. Any code that I touch should look nice, at least somewhat, thanks to ESLint. v0.1.0 did add the three basic tier 1 cutlery items, but there is currently no content that is within those layers. Have a good rest of your morning/day/evening/night everybody!", picture: "https://i.imgur.com/YycUfxL.png" }, 
{ title: "information, part one", number: 1, date: "22 Feb 2021", time: "06:58 CST (UTC-6)", content: "Hello world! I have successfully refactored my entire website into Vue, including this page! The solutions for them are a bit hacky, but that's alright -- because it works. I've recently taken a poll in my Discord server concerning Cutlery Incremental, concerning how people want the game to be written: either using The Modding Tree or doing the entire thing seperately, which includes doing UI, writing backend, etc. By the time I got to this sentence writing, the poll has closed. It ended in a 3-7 split, 3 in favour of not doing TMT, and 7 in favour. Hence, it appears Cutlery Incremental will be written using The Modding Tree as a framework. This site will show the journey!", picture: "https://i.imgur.com/p6HV0X0.png" }];

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
        <div v-for="entry of entries"><h3>{{ entry.title }}</h3> <br> dev diary {{ entry.number }}, published {{ entry.date }} at {{ entry.time }}. <br> content: {{ entry.content }} <br> <div v-if="entry.picture !== ''"><img :src=entry.picture></div></div>
      </div>
    </div>
  `
});

app3.mount("#vue3");

