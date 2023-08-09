import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"; 
function UserId(){
    let {userName} = useParams();
    return(
        <>
            <div>
                <Link to="/users">Users</Link><br></br>
                <h>USER:{userName}</h>
            </div>
        </>
    );
}
export default UserId;