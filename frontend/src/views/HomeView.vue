<template>
  <main>
    <TableData :headers="headersTable" :rows="knightsData" />
</main>
</template>

<script >
import TableData from "../components/TableData.vue";
import knightService from "../services/knight.js";

export default {
  components: {
    TableData
  },
  data() {
    return {
      knightsData: [],
      headersTable: [
        {
          label: "Nome",
          key: "name",
        },
        {
          label: "Idade",
          key: "age",
        },
        {
          label: "Armas",
          key: "weaponsEquipped",
        },
        {
          label: "Atributo",
          key: "keyAttribute",
        },
        {
          label: "Exp",
          key: "experience",
        },
      ]
    }
  },
  methods: {
    async getAllKnights() {
      const { data } = await knightService.findAll()
      this.knightsData = data.map(elm => {
        elm.weaponsEquipped = elm.weapons.reduce((acc, cur) => cur.equipped ? acc + 1 : acc, 0)
        return elm
      })
    }
  },
  mounted() {
    this.getAllKnights()
  }
}
</script>

