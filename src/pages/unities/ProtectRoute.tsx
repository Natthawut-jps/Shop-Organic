import { FunctionComponent } from "react"
import ErrorPage from "../ErrorPage"
import { Outlet } from "react-router-dom"

export const ProtectRoute: FunctionComponent<{ Allow: boolean }> = (props) => {
    if (!props.Allow) {
        return <ErrorPage />
    } else {
        return <Outlet />
    }
}