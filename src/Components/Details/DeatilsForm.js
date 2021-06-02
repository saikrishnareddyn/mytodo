import React, { useState, useEffect } from "react";
import "./details.css";
import { useForm } from "react-hook-form";
import classnames from "classnames";
import { Checkbox } from "../common-components/Checkbox";

const languagesList = ["HTML", "CSS", "JAVASCRIPT", "REACTJS"];

export const DetailsForm = ({
  submitDetails,
  selectedDetails,
  handleUpdate,
}) => {
  const { register, handleSubmit, errors } = useForm();

  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    language: [],
    country: "",
  });

  useEffect(() => {
    setDetails(Object.assign({}, details, selectedDetails));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDetails]);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setDetails(Object.assign({}, details, { [name]: value }));
  };

  const handleLanguage = (e) => {
    const selectedLanguages = details.language;
    const { value, name } = e.target;
    if (selectedLanguages.includes(value)) {
      const newSelectedLanguage = selectedLanguages.filter(
        (language) => language !== value
      );
      setDetails(Object.assign({}, details, { [name]: newSelectedLanguage }));
    } else {
      const newSelectedLanguage = selectedLanguages.concat([value]);
      setDetails(Object.assign({}, details, { [name]: newSelectedLanguage }));
    }
  };

  const submitForm = (data) => {
    setDetails({
      name: "",
      email: "",
      phone: "",
      gender: "",
      language: [],
      country: "",
    });
    selectedDetails ? handleUpdate(data) : submitDetails(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="align-items-absolute" style={{ marginTop: "10px" }}>
          <div className="form-group row ">
            <label className="col-form-label col-sm-2">NAME</label>
            <div className="col-sm-8">
              <input
                type="text"
                name="name"
                // className="form-control is-invalid"
                className={classnames("form-control", {
                  "is-invalid": errors.name,
                })}
                placeholder="Enter name..."
                value={details.name}
                onChange={handleInputChange}
                ref={register({
                  required: true,
                })}
              />
              {errors.name && (
                <div className="invalid-feedback">Please enter name</div>
              )}
            </div>
          </div>
          <div className="form-group row ">
            <label className="col-form-label col-sm-2">E-MAIL</label>
            <div className="col-sm-8">
              <input
                type="Email"
                name="email"
                // className="form-control"
                className={classnames("form-control", {
                  "is-invalid": errors.email,
                })}
                placeholder="Enter email..."
                value={details.email}
                onChange={handleInputChange}
                ref={register({
                  required: true,
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">Please enter email</div>
              )}
            </div>
          </div>
          <div className="form-group row ">
            <label className="col-form-label col-sm-2">Phone</label>
            <div className="col-sm-8">
              <input
                type="Phone"
                name="phone"
                // className="form-control"
                className={classnames("form-control", {
                  "is-invalid": errors.phone,
                })}
                placeholder="Enter phone number..."
                value={details.phone}
                onChange={handleInputChange}
                ref={register({
                  required: true,
                  maxLength: 12,
                  minLength: 10,
                })}
              />
              {errors.phone && (
                <div className="invalid-feedback">Please enter phone</div>
              )}
            </div>
          </div>
          <div className="form-group row ">
            <label className="col-form-label col-sm-2">Gender</label>
            <div className="col-sm-4 radio" style={{ marginTop: "6px" }}>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleInputChange}
                ref={register({
                  required: true,
                })}
                checked={details.gender === "Male"}
              />
              <label>
                <h5>Male</h5>
              </label>
            </div>
            <div className="col-sm-4 " style={{ marginTop: "6px" }}>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleInputChange}
                ref={register({
                  required: true,
                })}
                checked={details.gender === "Female"}
              />
              <label>
                <h5> Female </h5>
              </label>
            </div>
            {errors.gender && (
              <div
                style={{
                  color: "#dc3545",
                  marginLeft: "130px",
                  fontSize: "12px",
                }}
              >
                Please Choose one..
              </div>
            )}
          </div>
          <div className="form-group row ">
            <label className="col-form-label col-sm-2">Languages</label>
            <Checkbox
              handleLanguage={handleLanguage}
              languagesList={languagesList}
              register={register}
              errors={errors}
              selectedLanguages={details.language}
            />
            {errors.language && (
              <div
                style={{
                  color: "#dc3545",
                  marginLeft: "-320px",
                  marginTop: "50px",
                  fontSize: "12px",
                }}
              >
                Please Choose language
              </div>
            )}
          </div>

          <div className="form-group row ">
            <label className="col-form-label col-sm-2">Country</label>
            <div className="col-sm-8">
              <select
                name="country"
                className={classnames("form-control", {
                  "is-invalid": errors.co,
                })}
                value={details.country}
                onChange={handleInputChange}
                ref={register({
                  required: true,
                })}
              >
                <option value=""> -- select option--</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Geramny">Germany</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
            {errors.country && (
              <div
                style={{
                  color: "#dc3545",
                  marginLeft: "130px",
                  marginTop: "50px",
                  fontSize: "12px",
                }}
              >
                Please Choose Country
              </div>
            )}
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-secondary">
            {selectedDetails ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};
