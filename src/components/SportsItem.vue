<template>
  <div class="sport-item">
    <div class="sport-section">
      <img src="@/assets/img/sport-icon.png" />
    <div class="sport-name">
      {{ sport.name }} <span class="sport-admin"> Admin  - {{ sport.admin }} </span>
    </div>
    </div>
    
    <div class="mayor" v-for="member in members" :key="member.id">
      {{ players(member, sport.id) }}
    </div>
  </div>
</template>

<script>
export default {

  name: 'SportsItem',

  props: {
    sport: {
      type: Object,
      required: true,
    },
    members: {
      type: Object,
      required: true,
    }
  },

  computed: {
  },

  methods: {
    players(member, sportId) {
      for (var i = 0; i < member.sport.length; i++) {
        if (member.sport[i] === sportId) {
          return member.firstName
        }
      }
    }
  }

};
</script>

<style>
.sport-item {
  margin-top: 10px;
  background: lightblue;
  padding: 5px;
}

.sport-section{
  display: flex;
  justify-content: center;
}

.sport-section img {
  padding-right: 20px;
  width: 20px;
  height: 20px;
}

.sport-name {
  font-weight: bold;
}

.sport-admin {
  padding-left: 40px;
}
</style>
