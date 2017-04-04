
<template>
  <div class="center-div">
      <h2 class="cadastro-title">Cadastro de Vagas</h2>
      <div class="form-group row">
        <div>
            <input class="form-control" type="text" id="titulo" placeholder="Titulo da vaga" />
        </div>            
      </div>

      <div class="form-group row">        
        <div >
            <input class="form-control" type="text" id="empresa" placeholder="Empresa" />
        </div>            
      </div>

      <div class="form-group row">        
        <div >
            <input class="form-control" type="text" id="salario" placeholder="Salário" />
        </div>            
      </div>

      <div class="form-group row">        
        <div >
            <input class="form-control" type="text" id="descricao" placeholder="Descrição da vaga"/>
        </div>            
      </div>

      <div class="form-group row">
        <button class="btn btn-primary btn-save" type="submit">Salvar</button>
        <router-link :to="{name: 'home'}"><button class="btn btn-secondary btn-back" type="submit">Voltar</button></router-link>
        
      </div>
  </div>
</template>

<script>
import Vaga from '../vaga/Vaga.js';

export default {
    components: {
      
    },
    data() {
      return {
        vaga : []            
      }
  },
 methods: {
    
  },
  created () {
    console.log(this.vaga);
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