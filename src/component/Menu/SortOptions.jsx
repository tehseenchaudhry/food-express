import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortType } from "../../reduxToolkit/features/menuSlice";

const SortOptions = () => {

  const dispatch = useDispatch();
  const sortby = useSelector((state) => state.food.sortType);

  const handleSortChange = (e) => {
    dispatch(setSortType(e.target.value));
  };

  return (
    <div>
      <select
        value={sortby}
        onChange={handleSortChange}
        className="px-4 py-2 border border-rose-800 rounded-md bg-rose-50"
      >
        <option value="">Sort By</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;