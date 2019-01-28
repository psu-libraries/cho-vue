<template>
  <ul>
    <li v-for="(member) in item.members" :key="member.id">
      <a :href="itemUrl(member.id.id)"> {{ member.title[0] }} </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    itemUrl: function(id) {
      return '/#/item/' + id
    }
  }
}
</script>

<style scoped>
</style>
