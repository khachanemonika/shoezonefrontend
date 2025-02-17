import {createRouter,createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import Product from './components/Product/Product.vue';
import HomeProduct from './components/Product/HomeProduct.vue';

const routes=[
    {
        path:'',
        redirectTo:'Home',
        pathMatch:'full'
    },
    {
        name:'Home',
        component :Home,
        path:'/',
    },
    {
        name:'Product',
        component:Product,
        path:'/Product',
    
    children:[
        {
            name:'HomeProduct',
            path:'/HomeProduct',
            component: () => import('@/components/Product/HomeProduct.vue')
        },
        
        {
                 name:'View',
                 path:'/View',
                 component: () => import('@/components/Product/ViewProduct.vue')       
         },
        {
                name:'add',
                 path:'/add',
                 component: () => import('@/components/Product/EditProduct.vue')  
        },
        {
            name:'edit',
             path:'/edit/:id',
             component: () => import('@/components/Product/EditProduct.vue')  
        }
    
    ]
}
    
];

const router = createRouter(
    {
        history: createWebHistory(process.env.BASE_URL),
        routes,
    }
);

export default router;