import getList from "./pages/getList"
import getPath from "./pages/getPath"
import {PATH_ROUTE, LIST_ROUTE} from "./utils/constants"
export const routers = [
    {
        path: PATH_ROUTE,
        Component: getPath
    },
    {
        path: LIST_ROUTE,
        Component: getList
    }
]