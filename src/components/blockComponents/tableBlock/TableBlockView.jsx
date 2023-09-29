import { forwardRef } from "react"
import button from "../../button"
import Headers from "./Headers"
import Cell from "./Cell.jsx"

function TableBlockView({ focusId, data, columns, onChange, onCreate }) {
    return <div>
        <button>Add new column</button>
        <button>Add new row</button>

        <table>
            <thead>
                <Headers columns={columns}/>
            </thead>
            <tbody>
                {data.map((row, rowIndex)=>(
                    <tr key={crypto.randomUUID()}>
                        {columns.map((cell, cellIndex)=>(
                           <Cell key={crypto.randomUUID()} text={row[cell].toString() ?? ""}/>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}



export default forwardRef(TableBlockView)