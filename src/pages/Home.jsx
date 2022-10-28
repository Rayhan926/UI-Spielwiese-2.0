import React from "react";
import { MdOpenInNew } from "react-icons/md";

const Home = () => {
  return (
    <div className=" pl-2 pr-2  lg:pl-24 lg:pr-24">
      <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className=" rounded-md bg-hr w-full border-1 border-rahmen shadow-lg">
          <h1
            style={{ border: "1px solid #41454f" }}
            className=" text-white text-3xl text-center px-2 py-4 w-4/5 mx-auto -mt-7 rounded-md shadow bg-tabelle"
          >
            Open Documents
          </h1>
          <div className=" mt-3 w-full flex items-center justify-between p-4">
            <div className=" flex flex-col items-center">
              <p className=" text-sm text-white">Purchase</p>
              <h1 className=" text-4xl text-gray-50 pt-2">13</h1>
            </div>
            <div className=" flex flex-col items-center">
              <p className=" text-sm text-white">Sales</p>
              <h1 className=" text-4xl text-gray-50 pt-2">13</h1>
            </div>
          </div>
        </div>
        <div className=" rounded-md bg-hr w-full border-1 border-rahmen shadow-lg">
          <h1
            style={{ border: "1px solid #41454f" }}
            className=" text-white text-3xl text-center px-2 py-4 w-4/5 mx-auto -mt-7 rounded-md shadow bg-tabelle"
          >
            Closed Documents
          </h1>
          <div className=" mt-3 w-full flex items-center justify-between p-4">
            <div className=" flex flex-col items-center">
              <p className=" text-sm text-white">Purchase</p>
              <h1 className=" text-4xl text-gray-50 pt-2">13</h1>
            </div>
            <div className=" flex flex-col items-center">
              <p className=" text-sm text-white">Sales</p>
              <h1 className=" text-4xl text-gray-50 pt-2">13</h1>
            </div>
          </div>
        </div>
        <div className=" rounded-md bg-hr w-full border-1 border-rahmen shadow-lg">
          <h1
            style={{ border: "1px solid #41454f" }}
            className=" text-white text-3xl text-center px-2 py-4 w-4/5 mx-auto -mt-7 rounded-md shadow bg-tabelle"
          >
            Open Sum
          </h1>
          <div className=" mt-3 w-full flex items-center justify-between p-4">
            <div className=" flex flex-col items-center">
              <p className=" text-sm text-white">Purchase</p>
              <h1 className=" text-4xl text-gray-50 pt-2">3,521$</h1>
            </div>
            <div className=" flex flex-col items-center">
              <p className=" text-sm text-white">Sales</p>
              <h1 className=" text-4xl text-gray-50 pt-2">6,512$</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full mt-8">
        <h1 className=" text-3xl  text-white ">Open Purchase Documents</h1>
        <OpenDoucment />
      </div>
      <div className=" w-full mt-8">
        <h1 className=" text-3xl  text-white ">Open Sales Documents</h1>
        <OpenDoucment />
      </div>
    </div>
  );
};

const data = [
  {
    type: "-",
    wallet: "0x7374c...63EH",
    amount: "1",
    coin: "ETH",
    fiat: "1234$",
    date: "01/01/1010",
    status: "Open",
  },
  {
    type: "-",
    wallet: "0x7374c...63EH",
    amount: "1",
    coin: "ETH",
    fiat: "1234$",
    date: "01/01/1010",
    status: "Open",
  },
  {
    type: "-",
    wallet: "0x7374c...63EH",
    amount: "1",
    coin: "ETH",
    fiat: "1234$",
    date: "01/01/1010",
    status: "Open",
  },
  {
    type: "-",
    wallet: "0x7374c...63EH",
    amount: "1",
    coin: "ETH",
    fiat: "1234$",
    date: "01/01/1010",
    status: "Open",
  },
];

const OpenDoucment = () => {
  return (
    <>
      {/* Visible in Mobile --Start-- */}
      <div className="text-white space-y-5 lg:hidden mt-4">
        {data.map(({ amount, coin, date, fiat, status, type, wallet }, i) => (
          <div
            style={{ border: "1px solid #41454f" }}
            className="rounded-md space-y-1 p-1"
          >
            <div className="table_tr_mobile">
              <p>No.</p>
              <p>{i + 1}</p>
            </div>
            <div className="table_tr_mobile">
              <p>Type</p>
              <p>{type}</p>
            </div>
            <div className="table_tr_mobile">
              <p>Wallet</p>
              <p>{wallet}</p>
            </div>
            <div className="table_tr_mobile">
              <p>Amount</p>
              <p>{amount}</p>
            </div>
            <div className="table_tr_mobile">
              <p>Coin</p>
              <p>{coin}</p>
            </div>
            <div className="table_tr_mobile">
              <p>Fiat</p>
              <p>{fiat}</p>
            </div>
            <div className="table_tr_mobile">
              <p>Date</p>
              <p>{date}</p>
            </div>
            <div className="table_tr_mobile">
              <p>Status</p>
              <p style={{ color: "rgb(59, 130, 246)" }}>{status}</p>
            </div>
            <div className="table_tr_mobile">
              <p>View</p>
              <div className="flex items-center">
                <MdOpenInNew className="text-blue-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Visible in Mobile --End-- */}

      {/* Visible In Desktop --Start-- */}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 hidden lg:block">
        <div className="py-3 inline-block min-w-full sm:px-6 lg:px-8 ">
          <div className="overflow-auto lg:overflow-y-scroll max-h-52  rounded-lg bg-tabelle  border-1 border-rahmen shadow-lg">
            <table className="min-w-full relative">
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
              <tbody className=" text-gray-300 w-full  divide-y border-1 border-tabellenlinerahmen ">
                {data.map(
                  ({ amount, coin, date, fiat, status, type, wallet }, i) => (
                    <tr
                      key={i}
                      className=" w-full"
                      style={{ background: "#242834" }}
                    >
                      <td className="px-6 py-3 whitespace-nowrap">
                        <p>{i + 1}</p>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap">
                        <p>{type}</p>
                      </td>

                      <td className="px-6 py-3 whitespace-nowrap">
                        <p>{wallet}</p>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap">
                        <p>{amount}</p>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap">
                        <p>{coin}</p>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap">
                        <p>{fiat}</p>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap">
                        <p>{date}</p>
                      </td>
                      <td className="px-6 py-3 text-blue-500 whitespace-nowrap">
                        <p>{status}</p>
                      </td>
                      <td className="px-6 py-3 text-blue-500 cursor-pointer whitespace-nowrap">
                        <MdOpenInNew />
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Visible In Desktop --End-- */}
    </>
  );
};
export default Home;
