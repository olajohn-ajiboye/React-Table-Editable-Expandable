import { ReactText } from 'react'
import { Column } from 'react-table'

interface Table<T extends object> {
    columns: Array<Column<T>>
    data: T[]
    updateCellValue: (rowIndex: number, columnId: string, value: ReactText) => void
}

export default Table
