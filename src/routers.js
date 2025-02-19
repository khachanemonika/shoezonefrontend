import {createRouter,createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import Product from './components/Product/Product.vue';
import HomeProduct from './components/Product/HomeProduct.vue';
import RegisterUser from './components/Customer/RegisterUser.vue';
import Customer from './components/Customer/Customer.vue';

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
    },
    {
        name:'Customer',
        path:'/customer',
        component:Customer,

        children:[
            {
                name:'registerUser',
                path:'/regUser',
                component:()=> import('@/components/Customer/RegisterUser.vue')
            },
            {
                name:'ViewUser',
                path:'/ViewUser',
                component :()=>import('@/components/Customer/ViewUser.vue')
            },
            {
                name:'EditUser',
                path:'/editUser/:id',
                component :()=>import('@/components/Customer/RegisterUser.vue')
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