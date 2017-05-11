import Cadastro from './Cadastro.vue';
import Home from './Home.vue';

export const routes = [
    { 
        path: '/cadastro', 
        component: Cadastro 
    },
    { 
        path: '', 
        component: Home 
    }
];