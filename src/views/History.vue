<template>
  <div class="history">
    <h1>Load History</h1>
    <table>
      <tr>
        <th>Index</th>
        <th>Start Time</th>
        <th>Status</th>
        <th>Load Time(ms)</th>
      </tr>
      <tr v-for="(history, index) in loadHistory" :key="index">
        <td>{{index + 1}}</td>
        <td>{{history.startTime}}</td>
        <td>{{history.status}}</td>
        <td>{{history.loadTime}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'History',
  data() {
    return {
      loadHistory: this.$bus.loadHistory
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.history {
  text-align: center;
}
table {
  width: 100%;
  border-collapse: collapse;
}
td {
  border: 1px solid #333;
  height: 30px;
}
</style>
