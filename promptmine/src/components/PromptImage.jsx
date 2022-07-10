import React from "react";
import { useState, useEffect, useCallback } from "react";
// import ImageCard from './ImageCard'
import { useFetch } from "../hooks/useFetch";

function PromptImage() {
  const [url, setUrl] = useState("http://localhost:3001/mlart");
  const { data } = useFetch(url);
  const [promptimages, setPromptImages] = useState([]);

  // this allows us to post-process the data returned from the useFetch hook.
  useEffect(() => {
    if (data) {
      console.log('datad')
    setPromptImages(Object.keys(data).map((key) => data[key]))
      }            
  }, [data]);



  // async and await replace the .then()
  // useCallback freezes the function in memory so it does not change on re-render (causing infinite loop!)
  // const fetchData = useCallback(async () => {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   const data = await Object.keys(json).map((key) => json[key]);
  //   console.log("data fetched!");
  //   setPromptImages(data);
  // }, [url]);

  // useEffect(() => {
  //   fetchData();
  // }, [url, fetchData]);
  // since url is a dependency in the useCallback, it will only run when url changes, NOT NEEDED here

  // // example of fetching data using useEffect and useState and  promises with .then()
  // useEffect(() => {
  //     fetch(url)
  //     // fetch sends back a response object which has a .json() method which is async
  //     // async functions return promises which can be .then()ed
  //     .then(response => response.json())
  //     .then(json => Object.keys(json).map(key => json[key]))
  //     .then(three => setPromptImages(three))
  //     }, [url])

  return (
    <div>
      <h2> prompt image combos </h2>
      <ul>
        {promptimages && promptimages.map((promptimage, i) => (
          <li key={promptimage.id}>
            <p>
              {" "}
              {i} => {promptimage.image_file}
            </p>
            <img
              src={process.env.PUBLIC_URL + `/images/${promptimage.image_file}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PromptImage;
