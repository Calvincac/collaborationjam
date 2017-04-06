
<template>
  <div class="space">
        <h2>Busque por Vagas</h2>
        <input type="search" @input="filtro = $event.target.value" class="form-control" />
        <hr />
        <ul class="list-group">
            <li v-for="vaga in filterVagas" class="list-group-item justify-content-between">
                <h3>{{vaga.title}}</h3>
                <p>{{vaga.description}} </p>
                <router-link :to="{name:'information', params:{ id : vaga.id }}"><button type="button" class="btn btn-info">+ Informações</button> </router-link>                            
            </li>
        </ul> 
  </div>
</template>

<script>
import Vaga from '../vaga/Vaga.js';
import { routes }  from '../../routes';
const $ = require('jquery')

export default {
    components: {
    },
    data() {
      return {  
        filtro : '',
        vagas : []                  
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
      $.get('http://localhost:3000/')
      //.then(res => res.json())
      .then(
          vagas => this.vagas = vagas.map(x => new Vaga(x.ID, x.title, x.company, x.salary, x.description))
          , console.log
      );       
    }
}

</script>
<style scoped>
.space {
    margin-top:80px;
}
.arrow{
  position:right;  
}

</style>