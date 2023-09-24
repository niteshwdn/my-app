import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Mydata } from "./Mydata";



function Myabout() {
        return (
                <div className="container">
                        <div className="row coll">
                                <div className="col-12">
                                        <h1>Total Users:{Mydata.length}</h1>
                                </div>
                                {Mydata.map((p) => {
                                        return (
                                                <Card className="txet" style={{ width: '200px', margin: '5px',}}>
                                                        <Card.Img variant="top" src={p.Myimg} />
                                                        <Card.Body>
                                                                <Card.Title>{p.name}</Card.Title>
                                                                <Card.Text>
                                                                        Some quick example text to build on the card title and make up the
                                                                        bulk of the card's content.
                                                                </Card.Text>
                                                                <Button variant="primary">Go somewhere</Button>
                                                        </Card.Body>
                                                </Card>

                                        )
                                })}

                        </div>
                </div>

        )
}
export default Myabout;