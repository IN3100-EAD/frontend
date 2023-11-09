import React from "react";

function Cancel() {
  return (
    <div class="bg-gray-100 h-screen">
      <div class="p-6 md:mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="text-red-600 w-20 h-20 mx-auto my-6"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
            clip-rule="evenodd"
          />
        </svg>

        <div class="text-center">
          <h3 class="md:text-2xl text-base text-red-700 font-semibold text-center">
            Payment Cancelled!
          </h3>
          <p class="text-gray-600 my-2">Hope you will return back.</p>
          <p> Have a great day! </p>
          <div class="py-10 text-center">
            <a
              href="/"
              class="px-12 bg-violet-600 hover:bg-indigo-50 hover:text-gray-500 text-white rounded-lg border-2 border-violet-600 font-semibold py-3"
            >
              GO BACK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cancel;
