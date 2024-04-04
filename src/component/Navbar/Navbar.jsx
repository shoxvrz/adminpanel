import { useState } from "react";
import "./Navbar.css";
import CloseIcon from "@mui/icons-material/Close";

function Navbar({ inputHandler, submitHandler }) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <h1>Members</h1>
        <button onClick={openModal} className="add">
          Add Member
        </button>
        {open && (
          <div className="modal-addMember">
            <div className="top-addMember">
              <h1>Add Member</h1>
              <CloseIcon onClick={closeModal} className="closeBut" />
            </div>
            <div className="input">
              <label className="imageLabel" htmlFor="uploadImage">
                Click for Uploading the Image
              </label>
              <input
                onChange={inputHandler}
                type="file"
                id="uploadImage"
                name="image"
                className="imageInput"
              />
              <div>
                <label>Full Name</label>
                <input
                  onChange={inputHandler}
                  type="text"
                  placeholder="Enter your full name..."
                  name="name"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  onChange={inputHandler}
                  type="email"
                  placeholder="Enter your email..."
                  name="email"
                />
              </div>
              <div>
                <label>Mobile Number</label>
                <input
                  onChange={inputHandler}
                  type="number"
                  placeholder="Enter your number..."
                  name="number"
                />
              </div>
              <div className="gender">
                <label>Gender</label>
                <div>
                  <label htmlFor="">Man</label>
                  <input
                    onChange={inputHandler}
                    type="radio"
                    name="gender"
                    value={"man"}
                  />
                </div>
                <div>
                  <label htmlFor="">Woman</label>
                  <input
                    onChange={inputHandler}
                    type="radio"
                    name="gender"
                    value={"woman"}
                  />
                </div>
              </div>
              <button onClick={submitHandler} className="submitBtn">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
