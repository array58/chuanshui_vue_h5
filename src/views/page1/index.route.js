export default [
    {
        path:'/page_1',
        name:'page_1',
        component:()=>import('./index.vue'),
        meta:{
            title:'page1'
        },
        children:[
            {
                path:'/page_1/children',
                name:'page1children',
                component:()=>import('./children.vue')
            }
        ]
    }
]