<template> 
    <div>

  </div>
</template>
<script>

export default {
    components : {
    },
    data () {
    return {
        id : this.$route.params.id
    }
  },
  created(){
      console.log("Este é o id: ", this.id);      
  }
}
</script>

<style>

</style>
