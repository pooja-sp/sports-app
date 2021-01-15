<template>
  <div id="app">
    <h1>Club</h1>
    
    <h2>Members</h2>
    <div class="sort">
    <!-- <button class="" @click="sortByName">Sort by Name</button> -->
    </div>
    <MembersItem 
      v-for="member in membersData" 
      :key="member.id" 
      :member="member"
    />

  </div>
</template>

<script>
// Components
import MembersItem from '@/components/MembersItem.vue'
// Assets
import { mapActions, mapGetters } from "vuex";


export default {

  name: 'Home',

  components: {
    MembersItem,
  },

  data() {
    return {
    
    };
  },
  created() {
    this.getMembersList()
  },
  methods: {
    ...mapActions({ getMembersList: "getMembersList" }),
    sortByName() {
      // this.pplData;

      this.pplData.forEach((item) => {
        // console.log(item.firstName + ' == item') //value
        // console.log(index) //index
        let sortbla = Object.keys(item).sort((a,b) => (a.firstName > b.firstName) ? 1 : -1 )
        
        // list.sort((a, b) => (a.color > b.color) ? 1 : -1)
        console.log('sort - ' + sortbla.firstName)
        
      }) 

      // let dataFirstName = this.pplData.firstName
      // console.log('dataFirstName --- ' + dataFirstName )

      // let sortbla = this.pplData.firstName.sort((a,b) => a-b)
      // console.log(sortbla)

      // for(var i=0; i<= this.pplData.length; i++){
      // }
    }
  },
  computed: {
    ...mapGetters({ membersData: "membersList" }),
    pplData() {
      return this.membersData;
    }
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

.sort{
  display: flex;
}
</style>
