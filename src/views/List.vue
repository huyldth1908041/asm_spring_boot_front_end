<template>
  <div class="container">
    <h3 class="text-center">List Students</h3>
    <Table :columns="columns" :data='products'></Table>
  </div>
</template>

<script>
import Table from "../components/Table";

export default {
  name: "List",
  components: {Table},
  data() {
    return {
      columns: [
        {
          label: "Id",
          field: "id"
        },
        {
          label: "name",
          field: "name"
        },
        {
          label: "price",
          field: "price"
        }
      ],
      products: []
    }
  },

  mounted() {
    // call api
    fetch("http://localhost:8080/api/products", {
      method: "GET",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer 7e93da19-97e9-4e79-804a-021557301341"
      }
    }
).then(res => {
  if (res.ok) {
    res.json().then(jsonData => {
      this.products = jsonData
    })
  }
}).catch(err => {
  console.log(err)
})
}
}
</script>

<style scoped>

</style>