import React from 'react';

const ModalComponent = () => {
  return (
    <div className="p-4">
      <form id="form1" action="">
        <div className="mb-4">
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span> Component
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              id="component-name"
              name="compname"
              placeholder="Enter Component name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              id="quantity"
              name="quantity"
              defaultValue="1.00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Unit of measure</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              data-live-search="true"
              placeholder="Select Unit of measure"
            >
              <option value="36"></option>
              <option value="36">Meters</option>
              <option value="36">Kilos</option>
              <option value="38">grams</option>
              <option value="36">MiliGram</option>
              <option value="36">Box</option>
              <option value="36">Piece</option>
              <option value="36">Quantity</option>
              <option value="36">Packet</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Apply on variants</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            name="variants"
            multiple
            data-actions-box="true"
            data-live-search="true"
            title="Select Apply on variants"
          >
            <option value="36" data-subtext="GHS">GHS</option>
            <option value="38" data-subtext="MAD">MAD</option>
            <option value="41" data-subtext="¢">GHS</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Consumed in operation</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            data-live-search="true"
            placeholder="Select Consumed in operation"
          >
            <option value="36"></option>
            <option value="36">Scrap copper</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Order</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            id="order"
            name="order"
            defaultValue="1.00"
          />
        </div>

        <div className="mb-4">
          <hr className="border-gray-300" />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            data-bs-dismiss="modal"
          >
            CLOSE
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalComponent;
