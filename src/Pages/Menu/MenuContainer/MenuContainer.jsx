import PopularMenu from "../MenuCategories/MenuCategories";
import useMenu from "../../../hooks/useMenu";
import { NavLink } from "react-router-dom";
import SectionTitle from "../../../UI/SectionTitle/SectionTitle";

const MenuContainer = () => {
  const [menu, loading] = useMenu();

  return (
    <div className="p-6 md:p-10 my-12">
      <SectionTitle
        title={"Savor the Flavor"}
        desc={
          "Fresh, delicious meals for every craving. Discover your new favorite today!"
        }
      />
      <PopularMenu
        menu={menu}
        loading={loading}
        category={"Chef's Specials"}
        title={"Chef's Specials"}
      />
      <PopularMenu
        menu={menu}
        loading={loading}
        category={"Salads"}
        title={"Salads"}
      />
      <PopularMenu
        menu={menu}
        loading={loading}
        category={"Beverages"}
        title={"Beverages"}
      />
      <NavLink to={"/shop"}>
      <button className="bg-yellow-400 font-extralight py-3 px-6 rounded-full hover:bg-yellow-500 transition-all size-fit shadow-md flex justify-center mx-auto mt-6">
        Order Now
      </button>
      </NavLink>
    </div>
  );
};

export default MenuContainer;
