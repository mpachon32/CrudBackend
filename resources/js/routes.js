const Home = ()=> import('./components/Home.vue');
const Contacto = ()=> import('./components/Contacto.vue');

const Mostrar = ()=> import('./components/curso/Mostrar.vue');
const Crear = ()=> import('./components/curso/Crear.vue');
const Editar = ()=> import('./components/curso/Editar.vue');

export const routes = [
    {
        name: 'home',
        path: '/',
        component:Home
    },
    {
        name: 'contacto',
        path: '/contacto',
        component:Contacto
    },
    {
        name: 'mostrarCursos',
        path: '/cursos',
        component:Mostrar
    },
    {
        name: 'crearCurso',
        path: '/crear',
        component:Crear
    },
    {
        name: 'editarCurso',
        path: '/editar/:id',
        component:Editar
    },
];