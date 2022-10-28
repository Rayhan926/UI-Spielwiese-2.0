import React, { useState, useEffect } from "react";
import { FaMinusCircle, FaSave } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdEdit, MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const NewDocument = () => {
  const [dateSelected, setDateSelected] = useState("");
  const [dateSelected2, setDateSelected2] = useState("");
  const [dateSelected3, setDateSelected3] = useState("");
  const [type, setType] = useState("");
  const [qualitity, setQualitity] = useState(0);
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState(0);

  const [mainData, setMainData] = useState([]);
  const [demoMain, setDemoMain] = useState(0);

  useEffect(() => {
    // setTotal(qualitity * price * (1 + tax / 100));
    setTotal(qualitity * price * (1 - discount / 100));
  }, [tax, price, qualitity, discount]);

  const insertItem = (id) => {
    let demDisc = {
      id,
      type,
      qualitity,
      desc,
      tax,
      price,
      total,
      discount,
    };
    setMainData([...mainData, demDisc]);
    setType("");
    setDiscount("");
    setQualitity(0);
    setDesc("");
    setTax(0);
    setPrice(0);
    setTotal(0);
    setDemoMain(-1);
  };

  const editInsert = (ind, id) => {
    let demDisc = {
      id,
      type,
      qualitity,
      desc,
      tax,
      price,
      total,
      discount,
    };
    let demMain = mainData;
    demMain[ind] = demDisc;
    setMainData([...demMain]);
    setType("");
    setDiscount("");
    setQualitity(0);
    setDesc("");
    setTax(0);
    setPrice(0);
    setTotal(0);
    setDemoMain(-1);
  };
  const editItem = (item) => {
    setDemoMain(item?.id);
    setType(item?.type);
    setQualitity(item?.qualitity);
    setDesc(item?.desc);
    setTax(item?.tax);
    setPrice(item?.price);
    setTotal(item?.total);
  };
  const deleteLast = () => {
    setType("");
    setQualitity(0);
    setDesc("");
    setTax(0);
    setDiscount("");
    setPrice(0);
    setTotal(0);
    setDemoMain(-1);
  };

  useEffect(() => {
    if (dateSelected2 === "" && dateSelected3 === "") {
      setDateSelected2(dateSelected);
      setDateSelected3(dateSelected);
    }
  }, [dateSelected, dateSelected2, dateSelected3]);

  const deleteOne = (id) => {
    let demArr = mainData.filter((item) => item.id !== id);
    setMainData([...demArr]);
    if (demArr.length === 0) {
      setDemoMain(0);
    }
  };
  const [currency, setCurrency] = useState("ETH");
  const [allTotal, setAllTotal] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [allDiscount, setAllDiscount] = useState(0);

  useEffect(() => {
    let totalVal = 0;
    let totalDiscount = 0;

    // console.log({ mainData });
    mainData.forEach((item) => {
      totalVal = totalVal + item?.total;
      totalDiscount =
        totalDiscount + (item.qualitity * item.price * item.discount) / 100;
    });
    setAllTotal(totalVal);
    console.log({ totalDiscount, mainData });
    setAllDiscount(totalDiscount);
  }, [discount, mainData, price, qualitity]);

  useEffect(() => {
    let totalVal = 0;
    mainData.map((item) => {
      totalVal = totalVal + parseInt(item?.tax);
    });
    setTotalTax(totalVal);
  }, [mainData]);

  const [specialDiscount, setSpecialDiscount] = useState(0);
  const controlDiscount = (dis) => {
    setSpecialDiscount((allTotal * dis) / 100);
  };
  return (
    <div className=" pl-3 pr-3 lg:pl-16 lg:pr-24">
      <h1 className=" text-center text-xl lg:text-4xl text-white -mt-10">
        Create <span className=" text-nr">New</span> Document
      </h1>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-3 lg:px-10">
        <div className=" bg-sr w-full rounded-md p-3 border-1 border-rahmen shadow-lg">
          <div className=" flex items-center justify-between gap-3">
            <p className=" text-white">Customer Wallet</p>
            <input
              type="text "
              placeholder="Customer Wallet"
              className=" bg-pr border-none outline-none px-2 py-2 text-white rounded-md"
            />
          </div>
          <div className=" flex items-center justify-between gap-3 mt-2">
            <p className=" text-white">Alias</p>
            <input
              type="text"
              placeholder="Alias"
              className=" bg-pr border-none outline-none px-2 py-2 text-white rounded-md"
            />
          </div>
          <div className=" flex items-center justify-between gap-3 mt-2">
            <p className=" text-white">Contact Person</p>
            <input
              type="text"
              placeholder="Contact Person"
              className=" bg-pr border-none outline-none px-2 py-2 text-white rounded-md"
            />
          </div>
          <div className=" flex items-center justify-between gap-3 mt-2">
            <p className=" text-white">Customer Ref. No.</p>
            <input
              type="text"
              placeholder="Customer Ref. No."
              className=" bg-pr border-none outline-none px-2 py-2 text-white rounded-md"
            />
          </div>
        </div>
        <div className=" bg-sr w-full rounded-md p-3 border-1 border-rahmen shadow-lg">
          <div className=" flex items-center justify-between gap-3 ">
            <p className=" text-white">Document Number</p>
            <input
              type="text"
              disabled
              placeholder="003"
              className=" bg-hr w-52 border-none outline-none px-2 py-2 text-white"
            />
          </div>
          <div className=" flex items-center justify-between gap-3 mt-2">
            <p className=" text-white">Status</p>
            <input
              type="text"
              disabled
              placeholder="Open"
              className=" bg-hr w-52 border-none outline-none px-2 py-2 text-white"
            />
          </div>
          <div className=" flex items-center justify-between gap-3 mt-2">
            <p className=" text-white">Document Date</p>
            <input
              value={dateSelected}
              onChange={(e) => setDateSelected(e.target.value)}
              type="date"
              className=" w-52 bg-pr border-none outline-none px-2 py-2 text-white rounded-md"
            />
          </div>
          <div className=" flex items-center justify-between gap-3 mt-2">
            <p className=" text-white">Service Date</p>
            <input
              value={dateSelected2}
              onChange={(e) => setDateSelected2(e.target.value)}
              type="date"
              className=" w-52 bg-pr border-none outline-none px-2 py-2 text-white rounded-md"
            />
          </div>
          <div className=" flex items-center justify-between gap-3 mt-2">
            <p className=" text-white">Due Date</p>
            <input
              value={dateSelected3}
              onChange={(e) => setDateSelected3(e.target.value)}
              type="date"
              className=" w-52 bg-pr border-none outline-none px-2 py-2 text-white rounded-md"
            />
          </div>
        </div>
      </div>
      <div className=" overflow-x-auto  mt-7 px-2 ">
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
                    Item Desc
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                  >
                    Discount%
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                  >
                    Tax%
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className=" text-gray-300 divide-y border-1 border-tabellenlinerahmen">
                <>
                  {mainData.map((item, ind) => (
                    <>
                      {demoMain === item?.id ? (
                        <tr style={{ background: "#242834" }}>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="text"
                              placeholder="1"
                              value={ind + 1}
                              disabled
                              className=" bg-tabellenzeilen w-11 border-none outline-none px-1 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="text"
                              placeholder="Article"
                              value={type}
                              onChange={(e) => setType(e.target.value)}
                              className=" bg-tabellenzeilen  w-24 border outline-none px-2 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="text"
                              value={desc}
                              onChange={(e) => setDesc(e.target.value)}
                              placeholder="Item description"
                              className=" bg-tabellenzeilen  border w-52 outline-none px-2 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="number"
                              value={qualitity}
                              placeholder="0"
                              onChange={(e) => setQualitity(e.target.value)}
                              className=" bg-tabellenzeilen w-16 border outline-none px-1 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="number"
                              value={price}
                              placeholder="0"
                              onChange={(e) => setPrice(e.target.value)}
                              className=" bg-tabellenzeilen w-16 border outline-none px-1 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="number"
                              value={discount}
                              placeholder="0"
                              onChange={(e) => setDiscount(e.target.value)}
                              className=" bg-tabellenzeilen w-16 border outline-none px-1 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="number"
                              value={tax}
                              placeholder="0%"
                              onChange={(e) => setTax(e.target.value)}
                              className=" bg-tabellenzeilen w-16 border outline-none px-1 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            {currency === "ETH" ? (
                              <p>{total.toFixed(6)}</p>
                            ) : (
                              <p>{total.toFixed(2)}</p>
                            )}
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <div className=" flex items-center gap-2">
                              <button
                                onClick={() => editInsert(ind, item?.id)}
                                className=" px-2 py-2 flex items-center gap-2 text-white bg-nr rounded-md border-1 border-rahmen shadow-lg hover:bg-blue-500"
                              >
                                <FaSave />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        <tr style={{ background: "#242834" }}>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="text"
                              value={ind + 1}
                              disabled
                              className=" bg-tabellenzeilen w-11 border-none outline-none px-1 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="text"
                              placeholder="Article"
                              disabled
                              value={item?.type}
                              className=" bg-tabellenzeilen  w-24 border-none outline-none px-2 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="text"
                              disabled
                              placeholder="Item description"
                              value={item?.desc}
                              className=" bg-tabellenzeilen  border-none w-52 outline-none px-2 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="number"
                              placeholder="0"
                              disabled
                              value={item?.qualitity}
                              className=" bg-tabellenzeilen w-16 border-none outline-none px-1 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="number"
                              placeholder="0"
                              disabled
                              value={item?.price}
                              className=" bg-tabellenzeilen w-16 border-none outline-none px-1 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="number"
                              placeholder="0"
                              disabled
                              value={item?.discount}
                              className=" bg-tabellenzeilen w-16 border-none outline-none px-1 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <input
                              type="number"
                              placeholder="0%"
                              disabled
                              value={item?.tax}
                              className=" bg-tabellenzeilen w-16 border-none outline-none px-1 rounded-md py-0 text-white"
                            />
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            {currency === "ETH" ? (
                              <p>{item?.total.toFixed(6)}</p>
                            ) : (
                              <p>{item?.total.toFixed(2)}</p>
                            )}
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap">
                            <div className=" flex items-center gap-2">
                              <button
                                onClick={() => editItem(item)}
                                className=" px-2 py-2 flex items-center gap-2 text-white bg-nr rounded-md border-1 border-rahmen shadow-lg hover:bg-blue-500"
                              >
                                <MdEdit />
                              </button>
                              <button
                                onClick={() => setDemoMain(0)}
                                className=" px-2 py-2 flex items-center gap-2 text-white bg-nr rounded-md border-1 border-rahmen shadow-lg hover:bg-blue-500"
                              >
                                <AiOutlinePlus />
                              </button>
                              <button
                                onClick={() => deleteOne(item?.id)}
                                className=" px-2 py-2 flex items-center gap-2 text-white bg-nr rounded-md border-1 border-rahmen shadow-lg hover:bg-blue-500"
                              >
                                <MdDeleteOutline className=" w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </>

                {demoMain === 0 && (
                  <tr style={{ background: "#242834" }}>
                    <td className="px-6 py-3 whitespace-nowrap">
                      {mainData.length + 1}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="Article"
                        onChange={(e) => setType(e.target.value)}
                        className=" bg-tabellenzeilen  w-24 border outline-none px-2 rounded-md py-0 text-white"
                      />
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <input
                        type="text"
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Item description"
                        className=" bg-tabellenzeilen  border w-52 outline-none px-2 rounded-md py-0 text-white"
                      />
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <input
                        type="number"
                        placeholder="0"
                        onChange={(e) => setQualitity(e.target.value)}
                        className=" bg-tabellenzeilen w-16 border outline-none px-1 rounded-md py-0 text-white"
                      />
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <input
                        type="number"
                        placeholder="0"
                        onChange={(e) => setPrice(e.target.value)}
                        className=" bg-tabellenzeilen w-16 border outline-none px-1 rounded-md py-0 text-white"
                      />
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <input
                        type="number"
                        placeholder="0"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        className=" bg-tabellenzeilen w-16 border outline-none px-1 rounded-md py-0 text-white"
                      />
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <input
                        type="number"
                        placeholder="0%"
                        onChange={(e) => setTax(e.target.value)}
                        className=" bg-tabellenzeilen w-16 border outline-none px-1 rounded-md py-0 text-white"
                      />
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      {currency === "ETH" ? (
                        <p>{total.toFixed(6)}</p>
                      ) : (
                        <p>{total.toFixed(2)}</p>
                      )}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <div className=" flex items-center gap-2">
                        <button
                          onClick={() => insertItem(mainData?.length + 1)}
                          className=" px-2 py-2 flex items-center gap-2 text-white bg-nr rounded-md border-1 border-rahmen shadow-lg hover:bg-blue-500"
                        >
                          <FaSave />
                        </button>
                        {mainData.length !== 0 && (
                          <button
                            onClick={() => deleteLast()}
                            className=" px-2 py-2 flex items-center gap-2 text-white bg-nr rounded-md border-1 border-rahmen shadow-lg hover:bg-blue-500"
                          >
                            <MdDeleteOutline className=" w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-7 lg:px-10 ">
        <div className=" bg-sr w-full rounded-md p-3 border-1 border-rahmen shadow-lg">
          <div className=" flex items-center justify-between gap-3">
            <p className=" text-white">Payment Option</p>
            <select
              name=""
              id=""
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className=" bg-pr border-none w-52 outline-none px-2 py-2 text-white rounded-md"
            >
              <option value="ETH">ETH</option>
              <option value="USDC">USDC</option>
              <option value="USDT">USDT</option>
            </select>
          </div>
          <div className=" flex items-center justify-between gap-3 mt-2 ">
            <p className=" text-white">Owner</p>
            <input
              type="text"
              placeholder="Owner"
              className=" bg-pr border-none w-52 outline-none px-2 py-2 text-white rounded-md"
            />
          </div>
          <div className=" flex items-center justify-between gap-3 mt-2">
            <p className=" text-white">Remarks</p>
            <textarea
              type="text"
              placeholder="Remarks"
              className=" bg-pr border-none w-52 h-28 outline-none px-2 py-2 text-white rounded-md"
            ></textarea>
          </div>
        </div>
        <div className=" bg-sr w-full rounded-md p-3 border-1 border-rahmen shadow-lg">
          <div className=" flex items-center justify-between gap-3 mt-2 ">
            <p className=" text-white">Net Total</p>
            <input
              type="number"
              placeholder="0"
              value={
                currency === "ETH" ? allTotal.toFixed(6) : allTotal.toFixed(2)
              }
              disabled
              className=" bg-hr w-52 border-none outline-none px-2 py-2 text-white"
            />
          </div>
          <div className=" flex items-center justify-between gap-3 mt-2">
            <p className=" text-white">Discount</p>
            <div className=" flex items-center gap-2 text-white w-52">
              <div className="relative">
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    right: "100%",
                  }}
                >
                  -
                </span>
                <input
                  type="text"
                  disabled
                  value={
                    allDiscount === 0
                      ? currency === "ETH"
                        ? (0).toFixed(6)
                        : (0).toFixed(2)
                      : currency === "ETH"
                      ? allDiscount.toFixed(6)
                      : allDiscount.toFixed(2)
                  }
                  className=" bg-hr w-52 border-none outline-none px-2 py-2 text-white"
                />
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-between gap-3 mt-2">
            <p className=" text-white">Tax</p>
            <input
              type="text"
              disabled
              value={
                currency === "ETH" ? totalTax.toFixed(6) : totalTax.toFixed(2)
              }
              className=" bg-hr w-52 border-none outline-none px-2 py-2 text-white"
            />
          </div>
          <div className=" flex items-center justify-between gap-3 mt-2">
            <p className=" text-white">Total</p>
            <input
              type="text"
              disabled
              value={
                currency === "ETH"
                  ? (allTotal - specialDiscount).toFixed(6)
                  : (allTotal - specialDiscount).toFixed(2)
              }
              className=" bg-hr w-52 border-none outline-none px-2 py-2 text-white"
            />
          </div>
        </div>
      </div>
      <div className=" lg:px-10 flex items-center justify-end gap-4 my-4">
        <Link to="/">
          <button className=" px-6 py-3 flex items-center gap-2 text-white bg-hr rounded-md border-1 border-rahmen shadow-lg hover:bg-red-500">
            <FaMinusCircle /> Cancel
          </button>
        </Link>
        <button className=" px-6 py-3 flex items-center gap-2 text-white bg-nr rounded-md border-1 border-rahmen shadow-lg hover:bg-blue-500">
          <FaSave /> Create
        </button>
      </div>
    </div>
  );
};

export default NewDocument;
