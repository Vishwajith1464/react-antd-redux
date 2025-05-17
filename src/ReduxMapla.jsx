import { useDispatch, useSelector } from "react-redux"
import { getUsersFetch } from "./actions"

export default function ReduxMapla() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.sampleReducer.users);
    return (
        <div>
            <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
            Users: {users ? users.data.name : "No user"}
            {/* {users ? users.map( (user => (<div>{user.name}</div>)) ) : "None"} */}
        </div>
    )
}