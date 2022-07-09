import React from 'react'
import {useState, useEffect} from 'react'
// import ImageCard from './ImageCard'


function PromptImage(){

const [promptimages,setPromptImages] = useState([])
const [url, setUrl] = useState('http://localhost:3001/mlart')


useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(json => Object.keys(json).map(key => json[key]))
    .then(three => setPromptImages(three))
    }, [url])



  return (
    <div>
        <h2> prompt image combos </h2>
        <ul>

            {promptimages.map((promptimage,i) => (
                <li key={promptimage.id}>
                <p> {i} => {promptimage.image_file}</p>
                <img src={process.env.PUBLIC_URL + `/images/${promptimage.image_file}`}/>
                </li>
            ))}
        </ul>
    </div>
  )

}
export default PromptImage