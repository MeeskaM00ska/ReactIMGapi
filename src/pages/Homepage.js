import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
import Picture from "../components/Picture";

const Homepage = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");

  const auth = "41138732-5d6df2811d5487b73c7749623";

  const image_type = "photo";
  const initialURL = `https://pixabay.com/api/?key=${auth}&q=${input}&page=${page}&image_type=${image_type}`;

  const search = async () => {
    let result = await axios.get(initialURL);
    console.log(result);
    setData(result.data.hits);
    setCurrentSearch(input);
  };

  const morePicture = async () => {
    setPage(page + 1);
    let result = await axios.get(
      `https://pixabay.com/api/?key=${auth}&q=${currentSearch}&page=${
        page + 1
      }&image_type=${image_type}`
    );
    setData(data.concat(result.data.hits));
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={search} setInput={setInput} />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>more</button>
      </div>
    </div>
  );
};

export default Homepage;
