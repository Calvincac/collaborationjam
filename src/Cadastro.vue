
<template>
  <div class="center-div">
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">  
        </button>
        <a class="navbar-brand" href="#"><img src="inPoint5.fw.png"></a>
        <h3 id="logo"> InPoint</h3>
        </div>
    </div>
  </nav>
  
  <h1 id="cadastrabeacon">Cadastrar Beacon</h1>
  <form @submit.prevent = "addOffer()">
    <div class="row">
        <div class="form-group col-md-6">
          <label for="id">ID</label>
          <input v-model="beacon.id" type="text" class="form-control" id="id">
        </div>
        
        <div class="form-group col-md-6">
          <label for="local">Local</label>
          <input type="text" v-model="beacon.local" class="form-control" id="local">
        </div>
        
        <div class="form-group col-md-6">
          <label for="nome">Nome</label>
          <input type="text" v-model="beacon.nome" class="form-control" id="nome">
        </div>
        <div class="form-group col-md-6">
          <label for="mensagem">Mensagem</label>
          <input type="text" v-model="beacon.mensagem" class="form-control" id="mensagem">
        </div>
        <div class="form-group col-md-6">
          <label for="mensagem">Tipo</label>
          <div class="checkbox">
            <label><input type="checkbox" value="">Comercial</label>
            <label id="labelinput" ><input type="checkbox" value="">Social</label>
          </div>
        </div>
    </div>
    <hr />
    <div id="actions" class="row">
      <div class="col-md-12">
        <button type="submit" class="btn btn-primary">Salvar</button>
        <a href="index.html" class="btn btn-default">Cancelar</a>
      </div>
    </div>
  </form>
    <ul class="list-group">
          <li v-for="beacon in beacons" class="list-group-item justify-content-between beacons">
              <h3>ID do Beacon: {{beacon.id}}</h3>
              <p>Local: {{beacon.local}} </p>
              <p>Mensagem: {{beacon.mensagem}}</p>                                                                                  
          </li>
    </ul>

  </div>
  
</template>
<script>
//<button class="btn btn-primary btn-save"  @click="addOffer">Adicionar +</button>
import Beacon from './Beacon.js';
const $ = require('jquery')

export default {
    components: {
      
    },
    data() {
      return {
        beacon : new Beacon(),
        beacons : []            
      }
  },
 methods: {
      addOffer(){
          var value = this.beacon;
          this.beacons.push(value);
          this.beacon = new Beacon();
      }        
  },
  created () {
        
  }
}
</script>
<style scoped>
#labelinput {
  margin-left:10px;
}

.beacons {
  margin-top:20px;  
}


#logo {
  float:left;
  margin-top:26px;
  color:#fff;
}

nav { 
  border:none;
  height: 70px;
}
.navbar-brand > img {
    display: block;
    width: 50px;
    margin-left:20px;
}
.center-div {
  margin: 0 auto;
  width:60%;
  margin-top:100px;    
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

#cadastrabeacon {
 margin-top:10px !important;
}

</style>