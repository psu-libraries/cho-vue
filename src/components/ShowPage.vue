<template>
  <section class="container">
    <h1><Title v-bind:item="item"></Title></h1>
    <PropertyList v-bind:item="item"></PropertyList>
    <h2>Files</h2>
    <FileList v-bind:item="item"></FileList>
  </section>
</template>


<script>
import Title from 'blacklight-vue/src/components/result/title.vue'
import PropertyList from 'blacklight-vue/src/components/result/property_list.vue'
import FileList from './result/file_list.vue'

export default {
  components: {
    Title,
    PropertyList,
    FileList
  },
  data() {
    return {
      item: {
        attributes: {},
        members: {}
      }
    }
  },
  methods: {
    load: function() {
      const endpoint = `catalog/${encodeURIComponent(this.$route.params.id)}`
      this.$http.get(endpoint).then(function(response){
          this.item = response.data.data
      }, function(error){
          // ESlint appears to complain when calling console.log
          //console.error(error.statusText);
          alert("There was an error retrieving this record:" + error.statusText)
      })
    }
  },
  watch: {
    '$route': {
      handler: 'load',
      immediate: true
    }
  }
}
</script>

<style scoped>
</style>
