
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ProductDetails() {
        const { id } = useParams();
        console.log(id);
        const [singledata, sindlefun] = useState({})
        
        const mydetails = () => {
                axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((b) => {
                        console.log(b.data)
                        sindlefun(b.data)
                })
        }
        useEffect(() =>{
                mydetails();
        },[])

        return (
                <div>
                        <h1>ProductDetails</h1>
                        <h2>{singledata.id}</h2>
                        <h3>{singledata.tital}</h3>
                </div>
        )
}
export default ProductDetails;