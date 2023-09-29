import { forwardRef } from "react"
import Headers from "./Headers"
import Cell from "./Cell.jsx"
function TableBlock({columns ,data ,onChange },ref) {


    return ( <table>
        <thead>
            <Headers columns={columns}/>
        </thead>
        <tbody>
            {data.map((row, rowIndex)=>(
                <tr key={crypto.randomUUID()}>
                    {columns.map((cell, cellIndex)=>(
                       <Cell
                        key={crypto.randomUUID()} 
                        text={row[cell].toString() ?? ""}
                        onChange={(value)=> onChange(rowIndex,cell,value)}
                        />
                    ))}
                </tr>
            ))}
        </tbody>
    </table>)
}
export default forwardRef(TableBlock)