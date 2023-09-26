import React, { useDeferredValue, useState } from "react";
import axios from "axios";
function Myaxios() {
        const [svariale, sfunc] = useState([])

        const myapi = () => {
                axios.get('https://jsonplaceholder.typicode.com/todos').then((b) => {
                        console.log(b.data);
                        sfunc(b.data);
                })
        }
        return (
                <div>
                        <button type="button" onClick={myapi}>get data</button>
                        <div className="container">
                                <div className="row">
                                        {svariale.map((b) => {
                                                return (
                                                        <div className="col-md-3">
                                                                <div className="card">
                                                                        <div className="card-boyd">
                                                                                <h2 className="card-title">{b.id}</h2>
                                                                                <h5 className="card-title">{b.title}</h5>
                                                                                <p className="card-text">{b.userId}</p>
                                                                                <a href="a" className="btn btn-primary">{b.completed === true ? "Yes" : "No"}</a>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                )
                                        })}
                                </div>
                        </div>
                </div>

        )

}
export default Myaxios;