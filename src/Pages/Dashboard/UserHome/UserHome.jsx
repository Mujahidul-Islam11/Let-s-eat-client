import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useMenu from "../../../hooks/useMenu";
import useFavorites from "../../../hooks/useFavorites";
import { NavLink } from "react-router-dom";



const UserHome = () => {
    const { user } = useContext(AuthContext);
    const [favItems] = useFavorites();
    const [filteredMenu, setFilteredMenu] = useState([]);
    const [menu, , loading] = useMenu();

    useEffect(() => {
        const popularMenu = menu?.filter((item) => item.status === "popular");
        setFilteredMenu(popularMenu);
    }, [menu, setFilteredMenu]);

    return (
        <section className="w-full h-full">
            <h3 className="text-2xl mb-6">Hi, welcome back <span className="text-yellow-500">{user.displayName}</span></h3>

            {/* User Stats */}
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
            <h3 className="text-2xl my-8 font-bold">Popular Items:</h3>

            {/* Food items */}
            <div>
                {loading ? (
                    <div className="text-center flex justify-center py-12">
                        <svg id="svgStyle" viewBox="0 0 50 50">
                            <circle className="ring" cx="25" cy="25" r="20"></circle>
                            <circle className="ball" cx="25" cy="5" r="3.5"></circle>
                        </svg>
                    </div>
                ) : (
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:mx-0 text-black">
                        {filteredMenu?.map((item) => (
                            <div
                                key={item?.name}
                                className="flex flex-col items-center text-center hover:scale-105 duration-300 cursor-pointer"
                            >
                                <img
                                    className="w-40 h-40 mb-4 rounded-full object-cover"
                                    src={item?.img}
                                    alt={item?.name}
                                />
                                <div className="text-center space-y-2">
                                    <h3 className="text-lg font-semibold">{item?.name}</h3>
                                    <p className="text-sm">{item?.desc}</p>
                                    <p className="font-bold text-lg">${item?.price}</p>
                                    <p className="text-yellow-500">{item?.rating} ★</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <NavLink to={"/menu"}>
                    <button className="bg-yellow-400 text-black font-extralight py-3 px-6 rounded-full hover:bg-yellow-500 transition-all size-fit shadow-md mx-auto flex justify-center mt-6">
                        Order Now
                    </button>
                </NavLink>
            </div>
        </section>
    );
};

export default UserHome;