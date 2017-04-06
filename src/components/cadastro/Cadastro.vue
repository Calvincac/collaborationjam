
<template>
  <div class="center-div">
      <h2 class="cadastro-title">Cadastro de Vagas</h2>

      <form @submit.prevent = "grava ()">
          <div class="form-group row">
            <div>
                <input v-model="vaga.title" class="form-control" type="text" id="titulo" placeholder="Titulo da vaga" />
            </div>            
          </div>

          <div class="form-group row">        
            <div >
                <input v-model="vaga.company" class="form-control" type="text" id="empresa" placeholder="Empresa" />
            </div>            
          </div>

          <div class="form-group row">        
            <div >
                <input v-model="vaga.salary" class="form-control" type="text" id="salario" placeholder="Salário" />
            </div>            
          </div>

          <div class="form-group row">        
            <div >
                <input v-model="vaga.description" class="form-control" type="text" id="descricao" placeholder="Descrição da vaga"/>
            </div>            
          </div>

          <div class="form-group row">
            <button class="btn btn-primary btn-save"  @click="addOffer">Adicionar +</button>
            <button class="btn btn-primary btn-save" type="submit">Salvar</button>
            <router-link :to="{name: 'home'}"><button class="btn btn-secondary btn-back" type="submit">Voltar</button></router-link>        
          </div>
      </form>

        <ul class="list-group">
              <li v-for="vaga in vagas" class="list-group-item justify-content-between">
                  <h3>Título da vaga: {{vaga.title}}</h3>
                  <p>Descrição da vaga: {{vaga.description}} </p>
                  <p>Salário: {{vaga.salary}}</p>                                                                                  
              </li>
        </ul>
  </div>
</template>

<script>
import Vaga from '../vaga/Vaga.js';
const $ = require('jquery')

export default {
    components: {
      
    },
    data() {
      return {
        vaga : new Vaga(),
        vagas : []            
      }
  },
 methods: {
      addOffer(){
          var value = this.vaga;
          this.vagas.push(value);
          console.log(this.vagas);
          this.vaga = new Vaga();
      },
      grava() {         
          $.ajax({
            type: "POST",
            url: "http://localhost:3000/cadastro",
            data: this.vaga,
            success: "success",
            dataType: "json"
          });
      }        
  },
  created () {
        
  }
}
</script>
<style scoped>
.center-div {
  margin: 0 auto;
  width:60%;
  margin-top:80px;    
}

.cadastro-title{
  text-align:center;
}

.btn-save{
  float:right;  
}

.btn-back{
  float:right;
  margin-right:5px;
}

</style>