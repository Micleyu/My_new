import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test2 from '@/components/Test2'
import Test3 from '@/components/Test3'
import Test4 from '@/components/Test4'
import Sub1 from '@/components/Sub1'
import Sub2 from '@/components/Sub2'
import error from '@/components/error'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: Test
    },
    {
      path: '/test2',
      name: 'HelloWorld',
      component: Test2,
      children:[
        {
          path: '/test2/sub1',
          name: 'HelloWorld',
          component: Sub1
        },
        {
          path: '/test2/sub2',
          name: 'HelloWorld',
          component: Sub2
        }
      ]
    },
    {
      path:'/test3/:age/:username',
      name:'Test3',
      component:Test3
    },
    {
      path:'/test4',
      name:'Test4',
      component:Test4
    },
    {
      path:'/gonew/:age/:username',
      redirect:'/test3/:age/:username'
    },
    {
      path:'/test',
      component:Test,
      alias:'/smallName'
    },
    {
      path:'*',
      component:error
    }
  ]
})
