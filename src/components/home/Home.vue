<template>
  <div class="space">
        <h2>Busque por Vagas</h2>
        <input type="search" @input="filtro = $event.target.value" class="form-control" />
        <hr />
        <table class="table table-striped">
            <tbody>
                <tr v-for="vaga in filterVagas">
                    <td>
                        <h3 class="salary">R$ {{vaga.salary}} </h3>
                        <h3>{{vaga.title}}</h3>
                        <p>{{vaga.description}} </p>
                        <router-link :to="{name:'information', params:{ id : vaga.id }}"><button type="button" class="btn btn-info btn-redirect">+ Informações</button> </router-link>
                    </td>
                </tr>
            </tbody> 
        </table>
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
            return this.vagas.filter(vaga => exp.test(vaga.title));
        } else {
            return this.vagas;
        }
    }
  },
  methods: {      
    },
    created () { 
        $.get('http://localhost:3000/')
        .then(JSON.parse)
      .then(
          data => this.vagas = data.map(x => new Vaga(x.ID, x.title, x.company, x.salary, x.description, x.categoria_id))
          , console.log
      );
    }
}

</script>
<style scoped>
.space {
    margin: 0 auto;
    width:80%;
    margin-top:80px;
}
.arrow{
  position:right;  
}
.btn-redirect{
    display:inline-block;
    float: right;
    position: relative;
    border:0;   
}

.salary{
    float:right;
    margin-right: 10px;
}

</style>