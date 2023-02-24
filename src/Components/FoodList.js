import React, { useState } from "react";
import "../App.css";
import Data from "../Data.js";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiRadioCircle } from "react-icons/bi";
import { Popup } from "./Popup";

const FoodList = () => {
  let CopymainData = Data;
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState(Data);
  const [editList, setEditList] = useState(false);
  const [month, setMonth] = useState("");

  const handleWait = async (e) => {
    // console.log(e, Data);
    if (e === "All") {
      setUserData(CopymainData);
    } else {
      CopymainData = CopymainData.filter((val) => {
        if (val.status === e) {
          // console.log(e);

          return val;
        }
      });
      setUserData(CopymainData);
    }

    // console.log("VKB", CopymainData);
  };

  const getsts = (color) => {
    // console.log(color, "color");
    if (color === "Approved") return "green";
    else if (color === "Rejected") return "red";
    else return "orange";
  };

  const handleMonth = (e) => {
    setMonth(e);
    // const handleMonth = (e) => {
    // setMonth(e);
    if (e !== "month") {
      var startoftheMonth = moment()
        .month(e)
        .startOf("month")
        .format("YYYY-MM-DD");
      let endoftheMonth = moment().month(e).endOf("month").format("YYYY-MM-DD");
      setUserData(
        CopymainData.filter((val) => {
          if (
            moment(val.date).isBetween(startoftheMonth, endoftheMonth) ||
            moment(val.date).isSame(startoftheMonth) ||
            moment(val.date).isSame(endoftheMonth)
          )
            return val;
        })
      );
    } else {
      setUserData(CopymainData);
    }

    // console.log(month);
  };
  // const addData = async (userData) => {
  //   setUserData(userData);
  // };
  const handleFilter = (e) => {
    console.log(e);
  };

  return (
    <div className="p-5">
      <div className="d-flex justify-content-between p-1">
        <h1>Hi👋John Deo,Welcome</h1>
        <br />

        <div className="justify-content-between" align="right">
          <button type="button" className="btn btn-primary">
            <Popup />
          </button>
        </div>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="d-flex justify-content-between p-2">
        <div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={(e) => {
              handleWait(e.target.innerHTML);
            }}
          >
            All
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-secondary"
            onClick={(e) => {
              handleWait(e.target.innerHTML);
            }}
          >
            Waiting For Approval
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-secondary"
            onClick={(e) => {
              handleWait(e.target.innerHTML);
            }}
          >
            Approved
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-secondary"
            onClick={(e) => {
              handleWait(e.target.innerHTML);
            }}
          >
            Rejected
          </button>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className="justify-content-between">
          <form>
            <input
              className="form-control"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <button className="btn btn-outline-success" type="submit">
            Search
          </button> */}
          </form>
        </div>
        <div className="justify-content-between">
          <select
            className="btn btn-outline-dark dropdown-toggle"
            id="month"
            name="month"
            value={month}
            onChange={(e) => {
              handleMonth(e.target.value);
            }}
          >
            <option>month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={(e) => handleFilter(e.target.value)}
          >
            <BiRadioCircle />
            Filter
          </button>
        </div>
      </div>
      <div>
        <table className="table">
          <thead style={{ backgroundColor: "#E0DEDD" }}>
            <tr>
              <th>Category</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Invoice Number</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {userData
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.category.toLowerCase().includes(search);
              })
              .map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.category}</td>
                    <td>{item.date}</td>
                    <td style={{ color: "green" }}>{item.amount}</td>
                    <td>{item.invoiceNumber}</td>
                    <td>{item.description}</td>
                    <td
                      style={{
                        color: getsts(item.status),
                      }}
                    >
                      {item.status}
                    </td>
                    <td>{item.action}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodList;
