
<template>
  <div class="space">
        <h2>Busque por Vagas</h2>
        <input type="search" @input="filtro = $event.target.value" class="form-control" />
        <hr />
        <ul class="list-group">
            <li v-for="vaga in filterVagas" class="list-group-item justify-content-between">
                <h3>{{vaga.vaga.title}}</h3>
                <p>{{vaga.vaga.description}} </p>
                <router-link :to="{name:'information', params:{ id : vaga.vaga.id }}"><button type="button" class="btn btn-info">+ Informações</button> </router-link>                            
            </li>
        </ul> 
  </div>
</template>

<script>
import Vaga from '../vaga/Vaga.js';
import { routes }  from '../../routes';

export default {
    components: {
    },
    data() {
      return {
        vagas : [
          {
             vaga : new Vaga(1,'Software Developer', 'Thoughtworks', '8000', 'Develop cool stuff')
          },
          {
              vaga : new Vaga(2,'QA Engineer', 'Thoughtworks', '7000', 'Test cool stuff')
          },
          {
              vaga : new Vaga(3,'DevOps Engineer', 'Ilegra', '7000', 'Lots of Stuff')
          },
          {
              vaga : new Vaga(4,'System Engineer', 'Thoughtworks', '7000', 'Do a lot of stuff')
          },
          {
              vaga : new Vaga(5,'QA Engineer', 'Thoughtworks', '7000', 'Test cool stuff')
          },
          {
              vaga : new Vaga(5,'QA Engineer', 'Thoughtworks', '7000', 'Test cool stuff')
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
      this.$http
      .get('v1/fotos')
      .then(res => res.json())
      .then(res=> console.log(res))
      .then(fotos => this.fotos = fotos, err => console.log(err)); 
      
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