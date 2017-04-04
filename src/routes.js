import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';
import Information from './components/information/Information.vue';

export const routes = [
    { 
        path: '', 
        component: Home,
        name : 'home', 
        titulo: 'Home',
        menu :  true 
    },
    { 
        path: '/cadastro/', 
        component: Cadastro,
        name : 'cadastro', 
        titulo: 'Cadastro',
        menu :  true
    },
    { 
     path: '/informacoes/:id',
     name : 'information',
     component: Information,
     menu : true
    },
    { 
     path: '*',
     component: Home,
     menu : false
    }
];