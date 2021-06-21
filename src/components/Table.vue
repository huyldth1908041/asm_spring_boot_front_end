<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="column in columns">{{column.label}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data">
        <td v-for="column in columns">
          {{item[column.field]}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    columns: Array,
    data: Array
  },
}
</script>

<style scoped>

</style>