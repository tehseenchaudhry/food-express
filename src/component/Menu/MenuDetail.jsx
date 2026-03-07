import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaStar, FaShoppingCart, FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";

const MenuDetail = () => {
  const { id } = useParams();

  const menuItems = useSelector((state) => state.food.foodCards);

  const item = menuItems.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(item?.sizes?.[0]);

  if (!item) {
    return <div>Item not found</div>;
  }

  const currentPrice = selectedSize?.price || item.basePrice;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">

        <Link to="/menu" className="flex items-center gap-2 mb-6">
          <FaArrowLeft /> Back to Menu
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Image */}
            <div className="h-[400px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-8">

              <p className="text-rose-600">{item.restaurant}</p>

              <h1 className="text-3xl font-bold mb-4">
                {item.name}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <FaStar className="text-yellow-400" />
                {item.rating}
              </div>

              <p className="mb-6 text-gray-600">
                {item.description}
              </p>

              {/* Size */}
              {item.sizes && (
                <div className="mb-6">

                  <h3 className="font-semibold mb-3">
                    Select Size
                  </h3>

                  <div className="flex gap-3">

                    {item.sizes.map((size) => (
                      <button
                        key={size.name}
                        onClick={() => setSelectedSize(size)}
                        className={`border p-3 rounded-lg
                        ${
                          selectedSize?.name === size.name
                            ? "border-rose-500 bg-rose-50"
                            : ""
                        }`}
                      >
                        {size.name}
                        <br />
                        Rs {size.price}
                      </button>
                    ))}

                  </div>

                </div>
              )}

              {/* Price */}
              <h2 className="text-2xl font-bold text-rose-600 mb-4">
                Rs {currentPrice}
              </h2>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">

                <button
                  onClick={() =>
                    setQuantity(Math.max(1, quantity - 1))
                  }
                >
                  <FaMinus />
                </button>

                {quantity}

                <button
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <FaPlus />
                </button>

              </div>

              {/* Total */}
              <div className="mb-6">
                Total: Rs {currentPrice * quantity}
              </div>

              <button className="bg-rose-600 text-white px-6 py-3 rounded-xl flex items-center gap-2">
                <FaShoppingCart />
                Add To Cart
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;