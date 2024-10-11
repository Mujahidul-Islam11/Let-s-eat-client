export const categoryBtns = (
    <>
      <button
        onClick={() => setSelectedCategory("All")}
        className={` border font-extralight py-3 px-6 hover:bg-yellow-400 rounded-full ${
          selectedCategory === "All" ? "bg-yellow-400" : "bg-white"
        } transition-all size-fit shadow-md flex justify-center mt-6`}
      >
        All
      </button>
      <button
        onClick={() => setSelectedCategory("Chef's Specials")}
        className={` border font-extralight py-3 px-6 hover:bg-yellow-400 rounded-full ${
          selectedCategory === "Chef's Specials" ? "bg-yellow-400" : "bg-white"
        } transition-all size-fit shadow-md flex justify-center mt-6`}
      >
        Chef's Specials
      </button>
      <button
        onClick={() => setSelectedCategory("Salads")}
        className={` border font-extralight py-3 px-6 hover:bg-yellow-400 rounded-full ${
          selectedCategory === "Salads" ? "bg-yellow-400" : "bg-white"
        } transition-all size-fit shadow-md flex justify-center mt-6`}
      >
        Salads
      </button>
      <button
        onClick={() => setSelectedCategory("Beverages")}
        className={` border font-extralight py-3 px-6 hover:bg-yellow-400 rounded-full ${
          selectedCategory === "Beverages" ? "bg-yellow-400" : "bg-white"
        } transition-all size-fit shadow-md flex justify-center mt-6`}
      >
        Beverages
      </button>
    </>
  );