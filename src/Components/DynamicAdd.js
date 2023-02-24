import { Component } from "react";
import React from "react";
import Data from "../Data";

class DynamicAdd extends Component {
  state = {
    rows: [],
  };
  handleChange = (index, key) => (e) => {
    const {
      id,
      category,
      date,
      amount,
      invoiceNumber,
      description,
      status,
      value,
    } = e.target;
    const rows = [...this.state.rows];
    // console.log(e, index, rows);
    rows[index][key] = e.target.value;
    // rows[index]["id"] = index + 1;
    // rows[index] = {
    //   [{ id, category, date, amount, invoiceNumber, description, status }]:
    //     value,
    // };
    this.setState({
      rows,
    });
  };

  saveData = () => {
    console.log(this.state.rows);
    // console.log(this.state.userData);
  };

  handleAddRow = () => {
    const item = {
      id: "",
      category: "",
      date: "",
      amount: "",
      invoiceNumber: "",
      description: "",
      status: "",
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> S.no </th>
                    <th className="text-center"> Category </th>
                    <th className="text-center"> Date </th>
                    <th className="text-center"> Amount </th>
                    <th className="text-center"> invoiceNumber </th>
                    <th className="text-center"> Description </th>
                    <th className="text-center"> Status </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, index) => (
                    <tr id="addr" key={index}>
                      <td>{index + 1}</td>

                      <td>
                        <input
                          type="text"
                          name="category"
                          value={this.state.rows[index].category}
                          onChange={this.handleChange(index, "category")}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="date"
                          value={this.state.rows[index].date}
                          onChange={this.handleChange(index, "date")}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="amount"
                          value={this.state.rows[index].amount}
                          onChange={this.handleChange(index, "amount")}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="invoice number"
                          value={this.state.rows[index].invoiceNumber}
                          onChange={this.handleChange(index, "invoiceNumber")}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="description"
                          value={this.state.rows[index].description}
                          onChange={this.handleChange(index, "description")}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="status"
                          value={this.state.rows[index].status}
                          onChange={this.handleChange(index, "status")}
                          className="form-control"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={this.handleAddRow}
                className="btn btn-default pull-left"
              >
                Add Row
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="pull-right btn btn-default"
              >
                Delete Row
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.saveData}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DynamicAdd;
