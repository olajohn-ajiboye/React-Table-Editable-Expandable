import React, { useState } from 'react'

import { makeData } from '../data/MockData'
import AssignmentsTable from './components/AssignmentsTable/AssignmentsTable'
import useMakeColumns from './hooks/useMakeColumns'

import './Assignments.scss'

type Value = string | number

const Assignments = () => {
    const { columns } = useMakeColumns()
    const [data, setData] = useState(makeData())

    const updateCellValue = (rowIndex: number, columnId: string, value: Value) => {
        setData(prevData =>
            prevData.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...row,
                        [columnId]: value,
                    }
                }
                return row
            })
        )
    }

    return (
        <main>
            <AssignmentsTable columns={columns} data={data} updateCellValue={updateCellValue} />
        </main>
    )
}

export default Assignments
