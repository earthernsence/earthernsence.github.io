"use strict";

const app3 = Vue.createApp({});

const entries = [{ number: 1, date: "20 Feb 2021", time: "22:30 CST (UTC-6)", content: "test" },
  { number: 2, date: "20 Feb 2021", time: "22:30 CST (UTC-6)", content: "test" },
  { number: 3, date: "20 Feb 2021", time: "22:30 CST (UTC-6)", content: "test" },
  { number: 4, date: "20 Feb 2021", time: "22:30 CST (UTC-6)", content: "test" }];

app3.component("earthsdevdiary-component", {
  created() {
    this.forceUpdate();
  },
  data() {
    return {
      entries: Array
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
        <div v-for="entry of entries">dev diary {{ entry.number }}, published {{ entry.date }} at {{ entry.time }}. <br> content: {{ entry.content }}</div>
      </div>
    </div>
  `
});

app3.mount("#vue3");

