import React, { useEffect } from 'react'
import { useTable, useExpanded, useBlockLayout, TableInstance } from 'react-table'
import { useSticky } from 'react-table-sticky'

import defaultColumn from '../../../data/entity/defaultColumn'
import Table from '../../../data/entity/StaffingTable'
import weekNumber from '../../../services/calculateCurrentWeekNumber'

type Data = object

const headerClassNames = (id: string) => {
    return `th ${id}`
}

const AssignmentsTable = ({ columns, data, updateCellValue }: Table<Data>) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data,
            defaultColumn,
            updateCellValue,
        },
        useBlockLayout,
        useExpanded,
        useSticky
    ) as TableInstance<object>

    useEffect(() => {
        const currentWeek = document.querySelector(`.CW${weekNumber + 7}`)
        const table = document.querySelector('.table') as Element
        currentWeek?.scrollIntoView()
        table.scrollTop = 0
    }, [])

    return (
        <div {...getTableProps()} className="table sticky">
            <div className="header">
                {headerGroups.map(headerGroup => (
                    <div {...headerGroup.getHeaderGroupProps()} className="tr">
                        {headerGroup.headers.map(column => (
                            <div {...column.getHeaderProps()} className={headerClassNames(column.id)}>
                                {column.render('Header')}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="body" {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <div {...row.getRowProps()} className="tr">
                            {row.cells.map((cell, index) => (
                                <div {...cell.getCellProps()} key={index} className="td">
                                    {cell.render('Cell', { editable: true })}
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default AssignmentsTable
