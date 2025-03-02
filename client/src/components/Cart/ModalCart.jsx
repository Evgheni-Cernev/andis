import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCartProduct, removeProduct } from "../../store/actions/cartData.actions";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ModalCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
 const { i18n } = useTranslation();

  const subtotal = cart.reduce((acc, { quantity, product }) => {
    return acc + quantity * product?.price;
  }, 0);

  const total = subtotal + 40;

  const handleAddQuantity = (id, quantity) => {
    dispatch(addCartProduct(id, quantity + 1));
  };


  const handleRemoveQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(addCartProduct(id, quantity - 1));
    }

    if(quantity == 1) {
      dispatch(removeProduct(id));
    }
  };

  return (
    <div className="border-transparent">
      <div className="mt-3 mb-3 text-xl ml-10 font-medium text-yellow-400">
        Your order
      </div>
      <div className="bg-white pb-8 text-black">
        <div className="max-h-96 overflow-y-auto">
        {cart.map(({ product, quantity }) => (
          <div  key={product._id} className="border-b border-neutral-300">
            <div className="text-base font-medium ml-5  pt-2 pb-2">
              {product.name}
            </div>
            <div className=" flex justify-between ml-6 mb-3">
              <button
                className="w-6 h-6 bg-yellow-400 text-center text-xl"
                onClick={() => handleRemoveQuantity(product._id, quantity)}
              >
                ➖
              </button>
              <div className="text-xl font-bold">{quantity}</div>
              <button
                className="w-6 h-6 bg-yellow-400 text-center text-xl"
                onClick={() => handleAddQuantity(product._id, quantity)}
              >
                ➕
              </button>
              <div className="text-xl font-bold mr-4">{product?.price} mdl</div>
            </div>
          </div>
        ))}
        </div>
       
        <div className="flex justify-between border-b border-t border-neutral-300 ml-5 mr-5 pt-5 pb-4">
          <div className="text-base">Delivery</div>
          <div className="text-xl">40 mdl</div>
        </div>
        <div className="flex justify-between pt-5 pl-5 pr-5">
          <div className="text-2xl font-medium">Total</div>
          <div className="text-2xl font-bold">{total}mdl</div>
        </div>
        <div className="bg-[#ff0000] w-11/12 h-[48px] m-auto rounded-md flex justify-between content-center mt-5">
          <Link to={`/${i18n.language}/cart`} className="text-white font-bold text-xl m-auto">ORDER</Link>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
