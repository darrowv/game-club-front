import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PersonalArea = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");

  const image = useSelector((state) => state.image);
  const users = useSelector((state) => state.user);
  console.log(users);

  const handleImage = async () => {
    const formData = new FormData();
    formData.append("avatar", file);

    const res = await fetch(`http://localhost:6006/image/${users._id}`, {
      method: "PATCH",
      body: formData,
    });
    const data = res.json();
    dispatch({ type: "add/image", payload: data });
  };

  return (
    <div>
      <label>
        <span onClick={handleImage}>изменить фото</span>
        <input
          className="file"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {image.map((item) => {
          return <img src={`http://localhost:6006${item.img}`} />;
        })}
      </label>
    </div>
  );
};

export default PersonalArea;
