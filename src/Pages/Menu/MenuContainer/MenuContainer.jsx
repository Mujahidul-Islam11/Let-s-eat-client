import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PopularMenu from "../MenuCategories/MenuCategories";
import useMenu from "../../../hooks/useMenu";

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
      <PopularMenu menu={menu} loading={loading} category={"Main Course"} title={"Main Course"}></PopularMenu>
      <PopularMenu menu={menu} loading={loading} category={"Salads"} title={"Salads"}></PopularMenu>
      <PopularMenu menu={menu} loading={loading} category={"Beverages"} title={"Beverages"}></PopularMenu>
    </div>
  );
};

export default MenuContainer;
