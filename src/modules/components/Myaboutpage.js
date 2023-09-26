import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Mydata } from "./Mydata";



function Myabout() {
        return (
                <div className="container">
                        <div className="row coll">
                                <details>
                                        <summary>My Users informesan</summary>
                                        <h1><ins>My Total Users:{Mydata.length}</ins></h1>
                                </details>

                                {Mydata.map((p) => {
                                        return (
                                                <div className="col-md-3 mt-3">
                                                        <Card.Img variant="top" src={p.Myimg} />
                                                        <Card.Body>
                                                                <Card.Title>{p.name}</Card.Title>
                                                                <Card.Text>
                                                                        Some quick <del><b>example</b></del> text to build on <dfn>the card title and make
                                                                                up</dfn> <ins>the</ins> <i>bulk of the card's content.</i>
                                                                </Card.Text>
                                                                <a href={p.href}>
                                                                        <Button type="texa">Go somewhere</Button>
                                                                </a>
                                                        </Card.Body>
                                                </div>
                                        )
                                })}

                        </div>
                </div>

        )
}
export default Myabout;