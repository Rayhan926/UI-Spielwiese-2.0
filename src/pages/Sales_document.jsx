import React from "react";
import { MdOpenInNew } from "react-icons/md";

const Sales_document = () => {
  return (
    <div className="pl-2 lg:pl-20 lg:pr-20 pr-6">
      <h1 className=" text-3xl  text-white w-full text-center pb-10 pt-6">
        <span className=" text-nr">Sales</span> Documents
      </h1>
      <h1 className=" text-3xl  text-white ">
        <span className=" text-nr">Open</span> Sales Documents
      </h1>
      <OpenDoucment />
      <h1 className=" text-3xl  text-white  mt-5">
        <span className=" text-nr">Closed</span> Sales Documents
      </h1>
      <CloseDoucment />
    </div>
  );
};

const OpenDoucment = () => {
  return (
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
      <div className="py-3 inline-block min-w-full sm:px-6 lg:px-8 ">
        <div className=" overflow-auto lg:overflow-y-scroll h-52  rounded-lg bg-tabelle pb-3 border-1 border-rahmen shadow-lg">
          <table className="min-w-full">
            <thead className="__sticky_thead">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  No.
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Type
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Wallet
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Coin
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Fiat
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Date
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  View
                </th>
              </tr>
            </thead>
            <tbody className=" text-gray-300 divide-y border-1 border-tabellenlinerahmen">
              <tr style={{ background: "#242834" }}>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>#3</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>-</p>
                </td>

                <td className="px-6 py-3 whitespace-nowrap">
                  <p>0x7374c...63EH</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>1</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>ETH</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>123$</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>01/01/1010</p>
                </td>
                <td className="px-6 py-3 text-blue-500 whitespace-nowrap">
                  <p>Open</p>
                </td>
                <td className="px-6 py-3 text-blue-500 cursor-pointer whitespace-nowrap">
                  <MdOpenInNew />
                </td>
              </tr>
              <tr style={{ background: "#242834" }}>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>#3</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>-</p>
                </td>

                <td className="px-6 py-3 whitespace-nowrap">
                  <p>0x7374c...63EH</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>1</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>ETH</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>123$</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>01/01/1010</p>
                </td>
                <td className="px-6 py-3 text-blue-500 whitespace-nowrap">
                  <p>Open</p>
                </td>
                <td className="px-6 py-3 text-blue-500 cursor-pointer whitespace-nowrap">
                  <MdOpenInNew />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const CloseDoucment = () => {
  return (
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
      <div className="py-3 inline-block min-w-full sm:px-6 lg:px-8 ">
        <div className=" overflow-auto lg:overflow-y-scroll h-52  rounded-lg bg-tabelle pb-3 border-1 border-rahmen shadow-lg">
          <table className="min-w-full">
            <thead className="__sticky_thead">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  No.
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Type
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Wallet
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Coin
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Fiat
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Date
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  View
                </th>
              </tr>
            </thead>
            <tbody className=" text-gray-300 divide-y border-1 border-tabellenlinerahmen">
              <tr style={{ background: "#242834" }}>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>#3</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>-</p>
                </td>

                <td className="px-6 py-3 whitespace-nowrap">
                  <p>0x7374c...63EH</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>1</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>ETH</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>123$</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>01/01/1010</p>
                </td>
                <td className="px-6 py-3 text-blue-500 whitespace-nowrap">
                  <p>Open</p>
                </td>
                <td className="px-6 py-3 text-blue-500 cursor-pointer whitespace-nowrap">
                  <MdOpenInNew />
                </td>
              </tr>
              <tr style={{ background: "#242834" }}>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>#3</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>-</p>
                </td>

                <td className="px-6 py-3 whitespace-nowrap">
                  <p>0x7374c...63EH</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>1</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>ETH</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>123$</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p>01/01/1010</p>
                </td>
                <td className="px-6 py-3 text-blue-500 whitespace-nowrap">
                  <p>Open</p>
                </td>
                <td className="px-6 py-3 text-blue-500 cursor-pointer whitespace-nowrap">
                  <MdOpenInNew />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sales_document;
