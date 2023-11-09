import React from "react";
import { redirect } from "react-router-dom";
import axios from "axios";

const orderDetails = {
  products: [
    {
      productId: "64f364969f1aaf7c996947df",
      name: "Soap",
      description: "Beauty soap from Paris",
      price: 6832,
      orderedQty: 20,
    },
    {
      productId: "64f364b29f1aaf7c996947e1",
      name: "Shampoo",
      description: "Shampoo for dry hair",
      price: 27328,
      orderedQty: 10,
    },
  ],
  totalAmount: 4099.2,
};

function Checkout() {
  const onSubmit = () => {
    const data = {
      userId: "64f3633434426fa4d99e20ee",
      products: [
        {
          productId: "64f364969f1aaf7c996947df",
          quantity: 20,
        },
        {
          productId: "64f364b29f1aaf7c996947e1",
          quantity: 10,
        },
      ],
    };

    axios
      .post("http://localhost:8080/order/checkout", data)
      .then((res) => {
        window.location = res.data.checkoutURL;
      })
      .catch((e) => {
        console.error(e.error);
      });

    return false;
  };
  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-500 mx-auto">
          Order Summary
        </h1>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-indigo-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            {orderDetails.products.map((product) => (
              <div className="mt-16 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
                <div className="my-8 flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0  ">
                  <div className="w-full flex flex-col justify-start items-start space-y-4">
                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-violet-500">
                      {product.name}
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm leading-none text-gray-500">
                        <span className="text-gray-500 font-semibold">
                          Description:{" "}
                        </span>{" "}
                        {product.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6 text-violet-500">
                      LKR {(product.price / 100).toFixed(2)}
                    </p>
                    <p className="text-base xl:text-lg leading-6 text-violet-500">
                      {product.orderedQty}
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-violet-500">
                      LKR{" "}
                      {((product.price * product.orderedQty) / 100).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-indigo-50 space-y-6">
              <h3 className="text-xl font-semibold leading-5 text-violet-700">
                Summary
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-300 border-b pb-4">
                <div className="flex justify-between w-full">
                  <p className="text-base leading-4 text-gray-500">Subtotal</p>
                  <p className="text-base leading-4 text-gray-500">
                    LKR {orderDetails.totalAmount.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-violet-600">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-violet-600">
                  LKR {orderDetails.totalAmount.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-indigo-50 space-y-6">
              <div className="w-full flex justify-center items-center">
                <button
                  className="hover:bg-indigo-50 rounded-lg border-2 border-violet-600 focus:outline-none py-5 w-1/2  bg-violet-600 text-base font-medium leading-4 text-white hover:text-gray-500"
                  onClick={onSubmit}
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
