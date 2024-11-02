import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useMenu from "../../../hooks/useMenu";
import useFavorites from "../../../hooks/useFavorites";


const UserHome = () => {
    const { user } = useContext(AuthContext);
    const [menu] = useMenu();
    const [favItems] = useFavorites();

    return (
        <section className="w-full h-full">
            <h3 className="text-2xl mb-6">Hi, welcome back <span className="text-yellow-500">{user.displayName}</span></h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-3xl md:text-5xl bg-gradient-to-r from-yellow-500 to-yellow-300 text-white px-4 md:px-8 py-3 md:py-6 flex flex-col md:flex-row items-center gap-3 rounded-md">
                    <ion-icon name="beer" style={{ fontSize: "2.5rem" }}></ion-icon>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl">{menu.length}</h3>
                        <h3 className="text-lg md:text-xl">Menu</h3>
                    </div>
                </div>
                <div className="text-3xl md:text-5xl bg-gradient-to-r from-pink-500 to-pink-300 text-white px-4 md:px-8 py-3 md:py-6 flex flex-col md:flex-row items-center gap-3 rounded-md">
                    <ion-icon name="heart" style={{ fontSize: "2.5rem" }}></ion-icon>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl">{favItems.length}</h3>
                        <h3 className="text-lg md:text-xl">Favorites</h3>
                    </div>
                </div>
                <div className="text-3xl md:text-5xl bg-gradient-to-r from-violet-500 to-violet-300 text-white px-4 md:px-8 py-3 md:py-6 flex flex-col md:flex-row items-center gap-3 rounded-md">
                    <ion-icon name="call" style={{ fontSize: "2.5rem" }}></ion-icon>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl">3</h3>
                        <h3 className="text-lg md:text-xl">Contact</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserHome;