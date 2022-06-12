import React from "react";
import { useDispatch } from "react-redux";
import {
  addCartProduct,
  removeProduct,
} from "../../store/actions/cartData.actions";

const CartItem = (props) => {
  const { quantity, product } = props;
  const { name, price, imgLarge } = product;

  const dispatch = useDispatch();

  const handleAddQuantity = () => {
    dispatch(addCartProduct(product._id, quantity + 1));
  };

  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      dispatch(addCartProduct(product._id, quantity - 1));
    }
  };

  const handleOnRemove = () => {
    dispatch(removeProduct(product._id));
  };

  return (
    <div className="flex justify-between w-ful mb-10">
      <div className="ml-5 flex-shrink-0 w-32 h-28 rounded-sm overflow-hidden">
        <img src={imgLarge} className="object-cover w-full" />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div className="text-xl w-4/12">{name}</div>
          <div className="flex w-7/12 justify-between items-center">
            <div className="text-md">{price} mdl</div>
            <div className="w-3/12 flex justify-between ml-3">
              <button
                className="w-6 h-6 bg-yellow-400 text-center text-xl"
                onClick={handleRemoveQuantity}
              >
                ➖
              </button>
              <div className="text-xl font-bold">{quantity}</div>
              <button
                className="w-6 h-6 bg-yellow-400 text-center text-xl"
                onClick={handleAddQuantity}
              >
                ➕
              </button>
            </div>
            <div className="text-2xl font-bold mr-4">
              {price * quantity} mdl
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-sm w-5/12">
            Weathered dough for pizza, red sauce for pizza, ham, mushrooms,
            cheese, black and green olives.
          </div>
          <button
            className="text-md font-medium text-blue-600 mr-5"
            onClick={handleOnRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
