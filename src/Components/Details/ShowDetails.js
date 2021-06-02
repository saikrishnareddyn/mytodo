import React from "react";
import { useSelector } from "react-redux";

const ShowDetails = ({ handleEdit, handleDelete }) => {
  const { details } = useSelector((state) => state.userDetails);
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Language</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
          {details.map((detail) => {
            return (
              <tr key={detail.id}>
                <td>{detail.name}</td>
                <td>{detail.email}</td>
                <td>{detail.phone}</td>
                <td>{detail.gender}</td>
                <td>{`${detail.language}`}</td>
                <td>{detail.country}</td>
                <th>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(detail)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(detail.id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};

export default ShowDetails;
