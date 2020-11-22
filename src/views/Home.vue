<template>
  <div class="home">
    <h1>Github API List</h1>
    <div class="item" v-for="api in githubApi" :key="api.name">
      <h2>{{api.name}}</h2>
      <h3>{{api.value}}</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'Home',
  data() {
    return {
      timer: null,
      githubApi: []
    }
  },
  created() {
    if (this.timer) {
      return
    }
    this.timer = setInterval(() => {
      this.getGithubApiData()
    }, 5000)
  },
  methods: {
    getGithubApiData() {
      let startTime = new Date()
      let history = {
        startTime: moment().format('MMMM Do YYYY, h:mm:ss a')
      }
      this.githubApi = []

      axios.get('https://api.github.com')
        .then((res) => {
          this.githubApi = this.handleGithubApiData(res.data)
          history.status = 'success'
        })
        .catch(() => {
          history.status = 'fail'
        })
        .finally(() => {
          history.loadTime = new Date().getTime() - startTime.getTime();
          this.$bus.loadHistory.push(history)
        })
    },
    handleGithubApiData(data) {
      let result = []
      for (let item in data) {
        result.push({
          name: item,
          value: data[item]
        })
      }
      return result
    },
  }
}
</script>

<style scoped>
.item {
  text-align: left;
}
h1 {
  font-size: 20px;
}
h2 {
  font-size: 18px;
}
h3 {
  font-size: 16px;
  color: #ccc;
}
</style>
