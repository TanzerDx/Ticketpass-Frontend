import ConcertService from "../services/ConcertService";
import "../styles/AdminManageConcerts.css";
import React, { useState } from "react";
import { toast } from "react-toastify";

function AdminManageConcerts() {
  const [formData, setFormData] = useState({
    artist: "",
    musicGenre: "",
    venue: "",
    date: "",
    city: "",
    description: "",
    photoURL: "",
    price: 0,
    ticketsRemaining: 0,
  });

  const updateFormData = (event) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCreateConcert = (event) => {
    event.preventDefault();

    console.log(formData);

    ConcertService.addConcert(formData);

    toast.success("Concert creation successful", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

    setTimeout(() => {}, 1000);
  };

  return (
    <>
      <div className="background-color-adminManageConcerts">
        <div className="content">
          <div className="adminManageConcerts-heading">
            <h1 className="remove-margin">ADD A CONCERT</h1>
          </div>

          <form onSubmit={handleCreateConcert}>
            <div className="manageConcerts-grid">
              <div className="grid-left">
                <div className="grid-item">
                  <div className="manageConcerts-validation-text">
                    <h1 className="remove-margin-concerts-AddUpdate">
                      Artist:{" "}
                    </h1>
                  </div>
                  <div className="manageConcerts-container">
                    <input
                      type="text"
                      name="artist"
                      className="manageConcerts-input"
                      placeholder=""
                      required
                      onChange={updateFormData}
                    />
                  </div>
                </div>

                <div className="grid-item">
                  <div className="manageConcerts-validation-text">
                    <h1 className="remove-margin-concerts-AddUpdate">
                      Genre:{" "}
                    </h1>
                  </div>
                  <div className="manageConcerts-container">
                    <input
                      type="text"
                      name="musicGenre"
                      className="manageConcerts-input"
                      placeholder=""
                      required
                      onChange={updateFormData}
                    />
                  </div>
                </div>

                <div className="grid-item">
                  <div className="manageConcerts-validation-text">
                    <h1 className="remove-margin-concerts-AddUpdate">
                      Venue:{" "}
                    </h1>
                  </div>
                  <div className="manageConcerts-container">
                    <input
                      type="text"
                      name="venue"
                      className="manageConcerts-input"
                      placeholder=""
                      required
                      onChange={updateFormData}
                    />
                  </div>
                </div>

                <div className="grid-item">
                  <div className="manageConcerts-validation-text">
                    <h1 className="remove-margin-concerts-AddUpdate">Date: </h1>
                  </div>
                  <div className="manageConcerts-container">
                    <input
                      type="datetime-local"
                      name="date"
                      className="manageConcerts-input"
                      placeholder=""
                      required
                      onChange={updateFormData}
                    />
                  </div>
                </div>

                <div className="grid-item">
                  <div className="manageConcerts-validation-text">
                    <h1 className="remove-margin-concerts-AddUpdate">City: </h1>
                  </div>
                  <div className="manageConcerts-container">
                    <input
                      type="text"
                      name="city"
                      className="manageConcerts-input"
                      placeholder=""
                      required
                      onChange={updateFormData}
                    />
                  </div>
                </div>
              </div>

              <div className="grid-right">
                <div className="grid-item">
                  <div className="manageConcerts-validation-text">
                    <h1 className="remove-margin-concerts-AddUpdate">
                      Description:{" "}
                    </h1>
                  </div>
                  <div className="manageConcerts-container">
                    <input
                      type="text"
                      name="description"
                      className="manageConcerts-input"
                      maxLength={250}
                      placeholder=""
                      required
                      onChange={updateFormData}
                    />
                  </div>
                </div>

                <div className="grid-item">
                  <div className="manageConcerts-validation-text">
                    <h1 className="remove-margin-concerts-AddUpdate">
                      Photo:{" "}
                    </h1>
                  </div>
                  <div className="manageConcerts-container">
                    <input
                      type="text"
                      name="photoURL"
                      className="manageConcerts-input"
                      placeholder=""
                      required
                      onChange={updateFormData}
                    />
                  </div>
                </div>

                <div className="grid-item">
                  <div className="manageConcerts-validation-text">
                    <h1 className="remove-margin-concerts-AddUpdate">
                      Price:{" "}
                    </h1>
                  </div>
                  <div className="manageConcerts-container">
                    <input
                      type="text"
                      name="price"
                      className="manageConcerts-input"
                      placeholder=""
                      required
                      onChange={updateFormData}
                    />
                  </div>
                </div>

                <div className="grid-item">
                  <div className="manageConcerts-validation-text">
                    <h1 className="remove-margin-concerts-AddUpdate">
                      Number of Tickets:{" "}
                    </h1>
                  </div>
                  <div className="manageConcerts-container">
                    <input
                      type="text"
                      name="ticketsRemaining"
                      className="manageConcerts-input"
                      placeholder=""
                      required
                      onChange={updateFormData}
                    />
                  </div>
                </div>
              </div>
            </div>
            <input
              type="submit"
              className="button-manageConcert"
              value="PROCEED"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminManageConcerts;
