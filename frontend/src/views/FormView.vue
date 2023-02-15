<script setup>
import { Input, InputAddonItem } from "agnostic-vue";
import IconStar from "../components/icons/IconStar.vue";
import 'agnostic-vue/dist/common.min.css'
import "agnostic-vue/dist/index.css";
</script>

<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <Input v-model="knight.name" label="Nome" type="text" placeholder="Nome do Cavaleiro" /><br>
      <Input v-model="knight.nickname" label="Nickname" type="email" placeholder="Nick do Cavaleiro" /><br>
      <Input v-model="knight.birthday" label="Data Nascimento" type="date" /><br>
      <h3>Atributos</h3><br>
      <section class="flex flex-row flex-wrap">
        <div class="mis6">
          <Input v-model="attributes.strength" is-inline size="small" has-right-addon label="Força" min="0"
            type="number">
          <template #addonRight>
            <InputAddonItem addon-right>
              <a @click="selectkeyAttribute('strength')">
                {{ knight.keyAttribute == "strength" ? "🌟" : "⭐" }}
              </a>
            </InputAddonItem>
          </template>
          </Input><br>
        </div>
        <div class="mis6">
          <Input v-model="attributes.dexterity" is-inline size="small" has-right-addon label="Destreza" min="0"
            type="number">
          <template #addonRight>
            <InputAddonItem addon-right>
              <a @click="selectkeyAttribute('dexterity')">
                {{ knight.keyAttribute == "dexterity" ? "🌟" : "⭐" }}
              </a>
            </InputAddonItem>
          </template>
          </Input><br>
        </div>
        <div class="mis6">
          <Input v-model="attributes.constitution" is-inline size="small" has-right-addon label="Constituição" min="0"
            type="number">
          <template #addonRight>
            <InputAddonItem addon-right>
              <a @click="selectkeyAttribute('constitution')">
                {{ knight.keyAttribute == "constitution" ? "🌟" : "⭐" }}
              </a>
            </InputAddonItem>
          </template>
          </Input><br>
        </div>
        <div class="mis6">
          <Input v-model="attributes.intelligence" is-inline size="small" has-right-addon label="Inteligência" min="0"
            type="number">
          <template #addonRight>
            <InputAddonItem addon-right>
              <a @click="selectkeyAttribute('intelligence')">
                {{ knight.keyAttribute == "intelligence" ? "🌟" : "⭐" }}
              </a>
            </InputAddonItem>
          </template>
          </Input><br>
        </div>
        <div class="mis6">
          <Input v-model="attributes.wisdom" is-inline size="small" has-right-addon label="Sabedoria" min="0"
            type="number">
          <template #addonRight>
            <InputAddonItem addon-right>
              <a @click="selectkeyAttribute('wisdom')">
                {{ knight.keyAttribute == "wisdom" ? "🌟" : "⭐" }}
              </a>
            </InputAddonItem>
          </template>
          </Input><br>
        </div>
        <div class="mis6">
          <Input v-model="attributes.charisma" is-inline size="small" has-right-addon label="Carisma" min="0"
            type="number">
          <template #addonRight>
            <InputAddonItem addon-right>
              <a @click="selectkeyAttribute('charisma')">
                {{ knight.keyAttribute == "charisma" ? "🌟" : "⭐" }}
              </a>
            </InputAddonItem>
          </template>
          </Input><br>
        </div>
      </section>
      <Input class="submit" type="submit" value="Cadastrar Cavaleiro" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      knight: {
        name: '',
        nickname: '',
        birthday: '',
        weapons: [],
        keyAttribute: ''
      },
      attributes: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
    };
  },
  methods: {
    submitForm: function () {
      this.$router.push({ name: 'home' })
    },
    selectkeyAttribute: function (attribute) {
      console.log('🚀 ~ attribute', attribute)
      this.knight.keyAttribute = attribute
    }
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .form {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
