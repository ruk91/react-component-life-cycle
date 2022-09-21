import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from "react"
import { AppContext } from "../App"

export const Profile = () => {
    const { userName} = useContext(AppContext)
    return(
        <div>
            <h2>This is profile and username is {userName}</h2>
            <ChangeProfile />
        </div>
    )
}