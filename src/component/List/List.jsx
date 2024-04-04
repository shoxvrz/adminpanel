import "./List.css";
import {  useState, useEffect } from "react";
import profileImage from "../../assets/images (4).jpg";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import UpdateModal from "../UpdateModal/UpdateModal";

function List({deleteHandler}) {
  const [member, setMember] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const modalHandler = () => {
    setOpenModal(true)
  }

  console.log(openModal);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, status } = await axios.get("http://localhost:3000/user");
    if (status === 200) {
      setMember(data);
    }
  };


  return (
    <>
      <div className="list">
        {openModal && (
          <UpdateModal/>
        )}
        <div className="top">
          <h1>Photo</h1>
          <h1>Member Name</h1>
          <h1>Mobile</h1>
          <h1>Email</h1>
          <h1>Gender</h1>
          <h1>Feature</h1>
          <h1>Action</h1>
        </div>
        <div className="userCont">
          {member.map((mem) => {
            return (
              <div key={mem.id} className="user-list">
                <div className="pic">
                  <img className="profilePic" src={profileImage} alt="" />
                </div>
                <h2>{mem.name}</h2>
                <h2>+998 {mem.number}</h2>
                <h2>{mem.email}</h2>
                <h2>{mem.gender}</h2>
                <div className="feature">
                  <CreateIcon onClick={modalHandler} className="editIcon"  />
                  <DeleteIcon onClick={() => deleteHandler(mem.id)} className="delIcon" />
                </div>
                <button  className="watch">Show</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default List;
