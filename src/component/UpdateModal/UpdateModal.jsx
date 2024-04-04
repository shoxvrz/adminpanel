import { useEffect, useState } from "react";
import "./UpdateModal.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from 'axios'

function UpdateModal() {
  const [editData, setEditData] = useState({
    name: "",
    number: "",
    email: "",
    gender: "",
  });

  useEffect(() => {
    userData()
  }, [])

  const userData = async () => {
    const {data} = await axios.get('http://localhost:3000/user')

    console.log(data);
  }

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.file === "file"? URL.createObjectURL(e.target.files[0])
    : e.target.value;

    setEditData((prev) => {
        return{...prev, [name]: value}
    })
  }

  console.log(editData);

  return (
    <div className="update">
      <div className="top">
        <h1>Change the information of the member</h1>
        <CloseIcon className="closeIcon" />
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
            placeholder={`${editData.name}`}
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
        <button className="submitBtn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default UpdateModal;
