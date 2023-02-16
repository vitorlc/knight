<template>
  <section class="mbe40">
    <table>
      <tr>
        <th v-for="header in props.headers">
          {{ header.label }}
        </th>
      </tr>
      <tr v-for="row in rows">
        <td v-for="header in props.headers">
          {{ row[header.key] == null ? '-' : row[header.key] }}
        </td>
      </tr>
    </table>
</section>
</template>

<script setup>

const props = defineProps(['rows', 'headers'])

</script>

<style>
table {
  width: 100%;
}

th {
  height: 70px;
  font-weight: bold;
}

table,
th,
td {
  text-align: center;
}
</style>