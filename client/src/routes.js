import Admin from "./pages/Admin"
import Forum from "./pages/Forum"
import Article from "./pages/Article"
import Auth from "./pages/Auth"

import { ADMIN_ROUTE, ARTICLE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, FORUM_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: FORUM_ROUTE,
        Component: Forum
    },
    {
        path: ARTICLE_ROUTE + '/:id',
        Component: Article
    },

]