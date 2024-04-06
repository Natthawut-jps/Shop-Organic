import { FunctionComponent } from "react"
import { Outlet } from "react-router-dom"

export const Reset_password_protect: FunctionComponent<{ Allow: boolean }> = (props) => {
    if (!props.Allow) {
        return null
    } else {
        return <Outlet />
    }
}