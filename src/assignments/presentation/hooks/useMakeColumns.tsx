import { useMemo } from 'react'
import { makeColumns, NAME_COLUMN_WIDTH, COURSES_COLUMN_WIDTH } from '../../data/MockData'
import RowExpander from '../components/RowExpander/RowExpander'

const useMakeColumns = () => {
    const coursesColumn = [
        { Header: ' ', Cell: RowExpander, width: 50, sticky: 'left' },
        {
            Header: 'Students',
            accessor: 'students',
            width: NAME_COLUMN_WIDTH,
            sticky: 'left',
        },
        {
            Header: 'Courses',
            accessor: 'courses',
            width: COURSES_COLUMN_WIDTH,
            sticky: 'left',
        },
        ...makeColumns(),
    ]
    const columns = useMemo(() => coursesColumn, [coursesColumn])
    return { columns }
}
export default useMakeColumns
