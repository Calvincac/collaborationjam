import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

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
     path: '*',
     component: Home,
     menu : false
    }
];