<template>
  <div id="app"> 
      <nav class="navbar navbar-fixed-top navbar-inverse">
      <div class="container">
        <div class="navbar-header"> 
          <a class="navbar-brand" href="#">WeSearch</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><router-link :to="{ name: 'home'}">Busca</router-link></li>
            <li><router-link :to="{ name: 'cadastro'}">Cadastro Vagas</router-link></li>            
          </ul>
        </div>
      </div>
    </nav>    
    <div class="container">
      <div class="row">
          <router-view></router-view> <!-- onde plota as views que são nomeadas no router -->
      </div>
    </div>
  </div>
</template>
<script>
import { routes }  from './routes';
export default {
    components : {
    },
    data () {
    return {
    }
  }
}
</script>

<style>

</style>
