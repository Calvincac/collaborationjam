
<template>
  <div class="space">
        <h2>Busque por Vagas</h2>
        <input type="search" @input="filtro = $event.target.value" class="form-control" />
        <hr />
        <ul>
            <li v-for="vaga in filterVagas">
                <h3>{{vaga.vaga.title}}</h3>              
            </li>
        </ul>

  </div>
</template>

<script>
import Vaga from '../vaga/Vaga.js';

export default {
    components: {
    },
    data() {
      return {
        vagas : [
          {
             vaga : new Vaga('Software Developer', 'Thoughtworks', '8000', 'Develop cool stuff')
          },
          {
              vaga : new Vaga('QA Engineer', 'Thoughtworks', '7000', 'Test cool stuff')
          }         
        ],  

        filtro : ''                  
      }
  },
  computed : {
    filterVagas() {
      
        if (this.filtro) {    
            let exp = new RegExp(this.filtro.trim(), 'i');
            return this.vagas.filter(vaga => exp.test(vaga.vaga.title));
        } else {
            return this.vagas;
        }
    }
  },
  methods: {
      
    },
    created () {
      
    }
}
</script>
<style scoped>
.space {
    margin-top:80px;
}

</style>