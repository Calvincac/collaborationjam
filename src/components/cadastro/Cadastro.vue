
<template>
  <div class="center-div">
         <div class="panel panel-info">
              <div class="panel-heading">
                         <div class="panel-title">Cadastre uma vaga</div>
              </div>
              <div class="panel-body" >
                      <form @submit.prevent = "grava ()">
                          <div class="form-group row">
                            <label for="suscard" class="col-md-3 control-label">Título da vaga</label>
                            <div class="col-md-9">
                                <input v-model="vaga.title" name="titulo" v-validate data-vv-rules="required" class="form-control" type="text" id="titulo" placeholder="Titulo da vaga" />
                                <span v-show="errors.has('titulo')">{{ errors.first('titulo') }}</span>
                            </div>            
                          </div>

                          <div class="form-group row"> 
                            <label for="suscard" class="col-md-3 control-label">Empresa</label>       
                            <div class="col-md-9">
                                <input v-model="vaga.company" name="empresa" v-validate data-vv-rules="required" class="form-control" type="text" id="empresa" placeholder="Empresa" />
                                <span v-show="errors.has('empresa')">{{ errors.first('empresa') }}</span>
                            </div>            
                          </div>

                          <div class="form-group row">  
                            <label for="suscard" class="col-md-3 control-label">Salário</label>      
                            <div class="col-md-9">
                                <input v-model="vaga.salary" class="form-control" type="text" id="salario" placeholder="Salário" />
                            </div>            
                          </div>

                          <div class="form-group row">
                            <label for="suscard" class="col-md-3 control-label">Título da vaga</label>        
                            <div class="col-md-9">
                                <input v-model="vaga.description" class="form-control" type="text" id="descricao" placeholder="Descrição da vaga"/>
                            </div>            
                          </div>

                          <div class="form-group row">            
                            <button class="btn btn-primary btn-save" type="submit">Salvar</button>
                            <router-link :to="{name: 'home'}"><button class="btn btn-default btn-back" type="submit">Voltar</button></router-link>        
                          </div>
                      </form>
                  </div>
           </div>       

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
//<button class="btn btn-primary btn-save"  @click="addOffer">Adicionar +</button>
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
  width:80%;
  margin-top:80px;    
}

.cadastro-title{
  text-align:left;;
}

.btn-save{
  float:right; 
  margin-right:15px; 
}

.btn-back{
  float:right;
  margin-right:5px;
}

</style>