import React from "react";

export const HeaderTable = (props: any) => {
    return <div>



<tbody>
            {
                props.arrayvalue.map((e: any) => {
                    return <tr>
                        <th      >{e.id}</th>
                        <th>{e.pipelineSection}</th>
                        <th> {e.WeldNo}</th>
                        <th>{e.wallThickness}</th>
                        <th>{e.seamType}</th>
                        <th>{e.DateOfWelding}</th>
                        <th>{e.WelderMark}</th>
                        <th>{e.tipsWeldedConnection}</th>
                        <th>{e.weldingMethod}</th>
                        <th>{e.VUK}</th>
                        <th>{e.RK}</th>
                        <th>{e.YZK}</th>
                        <th>{e.WeldLength}</th>
                        <th>{e.connectedElements}</th>
                        <th>{e.GradeSteel}</th>
                    </tr>

                })

            }


</tbody>


    </div>
}