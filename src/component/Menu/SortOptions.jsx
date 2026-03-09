import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortType } from "../../reduxToolkit/features/menuSlice";
import { motion } from "framer-motion";

const SortOptions = () => {
  const dispatch = useDispatch();
  const sortby = useSelector((state) => state.food.sortType);

  const handleSortChange = (e) => {
    dispatch(setSortType(e.target.value));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.select
        value={sortby}
        onChange={handleSortChange}
        className="px-4 py-2 border border-rose-800 rounded-md bg-rose-50 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <option value="">Sort By</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </motion.select>
    </motion.div>
  );
};

export default SortOptions;