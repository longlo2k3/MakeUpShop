import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products'
import Search from '../Pages/Search'


const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/products',
        component: Products
    },
    {
        path: '/search',
        component: Search
    }
]

export { publicRoutes }