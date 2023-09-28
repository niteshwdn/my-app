import React from "react";
import {
        AreaChart,
        Area,
        XAxis,
        YAxis,
        CartesianGrid,
        Tooltip
} from "recharts";
import { Myrechart } from "./Mydata";

function Mygraphpage() {
        return (
                <div className="container border shadow" >
                        <div className="row">
                                <div className="col-12 fet coll">


                                        <AreaChart
                                                width={1300}
                                                height={600}
                                                data={Myrechart}
                                                margin={{
                                                        top: 25,
                                                        right: 15,
                                                        left: 0,
                                                        bottom: 0
                                                }}
                                        >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                                <Area
                                                        type="monotone"
                                                        dataKey="maxv"
                                                        stackId="1"
                                                        stroke="#8884d8"
                                                        fill="#8884d8"
                                                />
                                                <Area
                                                        type="monotone"
                                                        dataKey="mainv"
                                                        stackId="1"
                                                        stroke="#82ca9d"
                                                        fill="#82ca9d"
                                                />
                                                <Area
                                                        type="monotone"
                                                        dataKey="currentv"
                                                        stackId="1"
                                                        stroke="#ffc658"
                                                        fill="#ffc658"
                                                />
                                        </AreaChart>

                                </div>
                        </div>
                </div>
        );
}
export default Mygraphpage;