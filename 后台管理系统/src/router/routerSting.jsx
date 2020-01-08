import Home from '@/view/home'
import Homeechart from '@/view/home/echartshome/homepage'
import Login from '@/view/login'
import Classify from '@/view/home/childers/classify'
import Updatashiti from '@/view/home/childers/updatashiti'
import Select from '@/view/home/childers/select'
import Awaiting from '../view/home/management/awaiting'
import Detail from '../view/home/management/detail'
import AddDetail from '../view/home/childers/addDetail'

import AddUser from '@/view/home/user/adduser'
import RoleManagement from '@/view/home/user/RoleManagement'
import UserDisplay from '@/view/home/user/userDisplay'

import AddTest from "@/view/home/childers/addtest"
import TestPaper from "@/view/home/childers/testpaper"
import Createpaper from "@/view/home/childers/createpaper"
import Examdetail from "@/view/home/childers/examdetail"

import ClassManagement from '@/view/home/ClassManagement/Index/index.jsx'
import ClassRoom from '@/view/home/ClassManagement/ClassRoom/index.jsx'
import Student from '@/view/home/ClassManagement/Student/index.jsx'


const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },

    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/',
                redirect: '/home/updatashiti'
            },
            {
                path: '/home/homepage',
                component: Homeechart
            },
            {
                path: '/home/classify',
                component: Classify,
            },
            {
                path: '/home/updatashiti',
                component: Updatashiti,
            },
            {
                path: '/home/select',
                component: Select,
            },
            {
                path: '/home/awaiting',
                component: Awaiting
            },
            {
                path: '/home/detail/:id',
                component: Detail
            },
            {
                path: '/home/AddDetail/:id',
                component: AddDetail
            },

            //冯东明
            {
                path: '/home/ClassManagement',
                component: ClassManagement,
            },
            {
                path: '/home/classroom',
                component: ClassRoom,
            },
            {
                path: '/home/student',
                component: Student,
            },


            //王颖
            {
                path: "/home/addTest",
                component: AddTest
            },
            {
                path: "/home/testPaper",
                component: TestPaper
            },
            {
                path: "/home/createpaper",
                component: Createpaper
            },
            {
                path: "/home/examdetail",
                component: Examdetail
            },

            //周
            {
                path: '/home/adduser',
                component: AddUser
            },
            {
                path: '/home/rolemanagement',
                component: RoleManagement
            },
            {
                path: '/home/userdisplay',
                component: UserDisplay
            }

        ]

    }]

export default routes