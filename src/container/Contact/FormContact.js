import React from "react";
import iconAddress from "../../assets/images/icons/pin.png";
import iconEmail from "../../assets/images/icons/email.png";
import iconPhone from "../../assets/images/icons/phone.png";

const FormContact = (props) => {
  const { address, phone, email } = props;
  return (
    <div className="form-contact">
      <div className="info">
        <div className="info-header">
          <p>schedule an appointment</p>
        </div>
        <div className="info-address">
          <img src={iconAddress} alt="" className="info-address-img" />
          <p>{address}</p>
        </div>
        <div className="info-address">
          <img src={iconPhone} alt="" className="info-address-img" />
          <p>{phone}</p>
        </div>
        <div className="info-address">
          <img src={iconEmail} alt="" className="info-address-img" />
          <p>{email}</p>
        </div>
      </div>
      <div className="form-submit">
        <div className="form-row">
          <div className="form-col">
            <label className="label" htmlFor="firstName">
              First Name*
            </label>
            <input className="input-form" type="text" id="firstName"></input>
          </div>
          <div className="form-col">
            <label className="label" htmlFor="lastName">
              Last Name*
            </label>
            <input className="input-form" type="text" id="lastName"></input>
          </div>
        </div>
        <div className="form-row">
          <label className="label" htmlFor="email">
            Email*
          </label>
          <input className="input-form" type="text" id="email"></input>
        </div>
        <div className="form-row">
          <label className="label" htmlFor="phone">
            Phone number*
          </label>
          <input className="input-form" type="text" id="phone"></input>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label className="label" htmlFor="residence">
              Residence type*
            </label>
            <select className="input-form" name="residence" id="residence">
              <option value="1">1</option>
            </select>
          </div>
          <div className="form-col">
            <label className="label" htmlFor="Price">
              Price ranGe*
            </label>
            <select className="input-form" name="Price" id="Price">
              <option value="1">1</option>
            </select>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <button type="button" className="button-form label mt-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default FormContact;
