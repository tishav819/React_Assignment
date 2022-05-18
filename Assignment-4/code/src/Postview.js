import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import Header from "./components/Header";
import "./Postview.css";

const Postview = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fun() {
      let data1 = await fetch("http://localhost:3004/user");
      let data = await data1.json();
      console.log(data);
      setUsers([...data]);
    }

    fun();
  }, []);

  return (
    <div className="site-container">
      <Header />
      <div className="container">
        {users.length
          ? users.map((obj, idx) => {
              return <Post key={"Tisha" + idx} obj={obj} />;
            })
          : ""}
      </div>
    </div>
  );
};

export default Postview;
