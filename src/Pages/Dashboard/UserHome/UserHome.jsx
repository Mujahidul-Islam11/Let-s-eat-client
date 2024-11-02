import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const UserHome = () => {
    const { user } = useContext(AuthContext);

    return (
        <section className="w-full h-full">
            <h3 className="text-2xl">Hi, welcome back <span className="text-yellow-500">{user.displayName}</span></h3>
           
        </section>
    );
};

export default UserHome;