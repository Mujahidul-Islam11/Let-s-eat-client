import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PopularMenu from "../MenuCategories/MenuCategories";
import useMenu from "../../../hooks/useMenu";

const MenuContainer = () => {
  const [menu, loading] = useMenu();

  return (
    <div className="my-12 ">
      <SectionTitle
        title={"Savor the Flavor"}
        desc={
          "Fresh, delicious meals for every craving. Discover your new favorite today!"
        }
      />
      <PopularMenu menu={menu} loading={loading} status={"popular"} title={"Popular"}></PopularMenu>
      <PopularMenu menu={menu} loading={loading} category={"Main Course"} title={"Main Course"}></PopularMenu>
    </div>
  );
};

export default MenuContainer;
