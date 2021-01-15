<template>
  <div class="members-item">
    <div class="gender">
      <div v-if= "member.gender === 'male'"> Male </div>
      <div v-else> Female </div>
    </div>
    <div class="name">
      <span class="first">
        {{ member.firstName }}
      </span>
      <span class="last">
        {{ member.lastName | capitalize}}
      </span>
    </div>
    <div class="birth">
      {{ dateFormate(member.birthDate) }}
    </div>
  </div>
</template>

<script>
export default {

  name: 'MembersItem',

  props: {
    member: {
      type: Object,
      required: true,
    },
  },

  computed: {
  },

  methods: {
    dateFormate(birthDate) {
      return birthDate.toString().split("-").reverse().join("-");
    }
  },
  filters: {
    capitalize(value) {
      return value.toUpperCase();
    }
  }

};
</script>

<style>
.members-item {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  background: lightblue;
  padding: 20px;
}

.last {
  font-weight: bold;
}

</style>
