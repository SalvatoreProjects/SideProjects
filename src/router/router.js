import { createWebHashHistory, createRouter } from "vue-router";
import Layout from "../components/Layout/layout.vue"
import FlappyIB from "../components/Flappy-IB/FlappyIB.vue"

const routes = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
        children: [
            {
                path: "flappy-ib",
                name: "Flappy-IB",
                component: FlappyIB
            }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory('/SideProjects/'),
    routes,
});

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router;