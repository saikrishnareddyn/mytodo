import React, { useEffect, useState } from "react";
import { DetailsForm } from "./DeatilsForm";
import axios from "axios";
import { v4 } from "uuid";
import ShowDetails from "./ShowDetails";
import { getDetails } from "../../actions/details";
import { useDispatch } from "react-redux";

const Details = () => {
  const [selectedDetails, setSelectedDetails] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails());
  }, []);

  const handleSubmit = async (data) => {
    const details = data;
    details.id = v4();
    try {
      await axios.post("http://localhost:4000/details", details);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (detail) => {
    setSelectedDetails(detail);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/details/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (data) => {
    try {
      await axios.put(
        `http://localhost:4000/details/${selectedDetails.id}`,
        data
      );
      setSelectedDetails(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <DetailsForm
          selectedDetails={selectedDetails}
          submitDetails={handleSubmit}
          handleUpdate={handleUpdate}
        />
        <br />
        <ShowDetails handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     details: state.detai // const getData = async () => {
//   try {
//     const response = await axios.get("http://localhost:4000/details");
//     setDetails(response.data);
//   } catch (error) {
//     // console.log(error);
//     setDetails(error);
//   }
// };l,
//   };
// };

// const mapDispatchToProps = () => {
//   return {
//     getDetail: () => getDetails(),
//   };
// };

export default Details;
