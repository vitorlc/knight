<template>
    <section class="mbe40">
        <Table :rows="rows" :headers="headers" :isHoverable="true" caption="My caption test" />
    </section>
</template>

<script setup>
// Components CSS
import "agnostic-vue/dist/index.css";
import { Table } from "agnostic-vue";

const createRow = (name, nickname, age, weaponsEquipped, keyAttribute, expirence) => ({
    name, nickname, age, weaponsEquipped, keyAttribute, expirence
});

const rows = [
];

const headers = [
    {
        label: "Nome",
        key: "name",
        width: "20%",
        sortable: true,
    },
    {
        label: "Idade",
        key: "age",
        sortable: true,
        width: "20%",
    },
    {
        label: "Armas",
        key: "weaponsEquipped",
        width: "20%",
        sortable: true,
    },
    {
        label: "Attributo",
        key: "keyAttribute",
        sortable: true,
        width: "20%",
    },
    {
        label: "Exp",
        key: "expirence",
        sortable: true,
        width: "20%",
    },

];
</script>