import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicAdd from "./DynamicAdd";
import { AiOutlineUserAdd } from "react-icons/ai";

export const Popup = () => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <AiOutlineUserAdd />
        Add expence
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade modal-lg"
        id="exampleModal"
        // tabindex="2"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add expence
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <DynamicAdd />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
