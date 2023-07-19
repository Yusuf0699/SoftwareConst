import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function ItemDelete() {
  const [item, setItem] = useState({});
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItem() {
      try {
        const response = await axios.get(`/api/items/${_id}`);
        setItem(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchItem();
  }, [_id]);

  async function handleDelete() {
    try {
      await axios.delete(`/api/items/${_id}`);
      navigate("/items");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <h1 style={{textAlign: "center" ,paddingTop: 99 }}>
Are You Sure You Want To Delete This Item      </h1>

      <h3 style={{textAlign: "center"}} >
        <b>Item Name</b>: {item.name}
      </h3>
 
      <div style={{textAlign: "center"}}>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
        <Link to="/items" className="btn btn-secondary">
          Cancel
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default ItemDelete;