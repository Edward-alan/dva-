// import Home from "@/view/home";
// import dynamic from "@/utils/dynamic";

// const router = {
//   mode: "history",
//   routes: [
//     // {
//     //   path: "/",
//     //   redirect: '/login'
//     // },
//     {
//       path: "/login",
//       component: dynamic(["user"], () => import("@/view/login"))
//     },
//     {
//       path: "/",
//       component: Home,
//       children: [
//         {
//           path: "/home",
//           component: dynamic(['user'], () => import("@/view/home")),
//           meta: {
//             title: "试题管理"
//           },
//           children: [
//             {
//               path: "/home/list",
//               component: dynamic(["user"], () => import("@/view/home")),
//               meta: {
//                 title: "添加试题"
//               }
//             },
//             {
//               path: "/home/classify/:id",
//               component: dynamic(["user"], () =>
//                 import("../view/home/childers/classify")
//               ),
//               meta: {
//                 title: "试题分类"
//               }
//             },
//             {
//               path: "/home/detail/:id",
//               component: dynamic(["user"], () => import("@/view/home")),
//               meta: {
//                 title: "查看试题"
//               }
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };

// export const menuConfig = router.routes[router.routes.length - 1].children;
// export default router;
