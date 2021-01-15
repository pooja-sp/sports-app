<template>
  <div id="app">
    <h1>Sports Club</h1>

    <h2>Sports</h2>
    <SportsItem 
      v-for="sport in sportsData" 
      :key="sport.id" 
      :sport="sport"
      :members="membersData"
    />
  </div>
</template>

<script>
// Components
import SportsItem from '@/components/SportsItem.vue'
// Assets
import { mapActions, mapGetters } from "vuex";

export default {

  name: 'About',
  components: {
    SportsItem,
  },

  data() {
    return {
      
    };
  },
  created() {
    this.getSportsList()
    this.getMembersList()
  },
  methods: {
    ...mapActions({ getSportsList: "getSportsList", getMembersList: "getMembersList" }),
  },
  computed: {
    ...mapGetters({ sportsData: "sportsList", membersData: "membersList" })
  }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
