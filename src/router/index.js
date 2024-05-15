import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"
import HeaderOnly from "~/components/Layout/HeaderOnly"

// Public Router 
 const PublicRouters = [
    {path: "/", component : Home},
    {path: "/following", component : Following},
    {path: "/upload", component : Upload, layout : HeaderOnly},
    {path: "/search", component : Search, layout: null},

]


// Private Router
 const PrivateRouters = [   
]

export { PublicRouters, PrivateRouters}