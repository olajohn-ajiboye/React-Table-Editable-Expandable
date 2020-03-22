import * as faker from 'faker'
import EditableCapacityCell from '../presentation/components/EditableCapacityCell'

const NAME_COLUMN_WIDTH = 180
const COURSES_COLUMN_WIDTH = 150
const ASSIGNMENT_COLUMN_WIDTH = 100

const range = (len: number) => {
    return [...Array(len).keys()]
}

const formatWeekNumber = (index: number) => {
    return index < 10 ? `CW0${index}` : `CW${index}`
}

export const makeWeeks = () => {
    const weeks: any = {
        students: `${faker.name.firstName()} ${faker.name.lastName()}`,
        courses: '',
    }
    range(54).forEach((_, index) => {
        weeks[formatWeekNumber(index)] = faker.random.number(100)
    })
    return weeks
}

const makeSubRows = () => {
    const weeks: any = {
        firstName: '',
        lastName: '',
        courses: faker.company.companyName(0),
    }
    range(54).forEach((_, index) => {
        weeks[formatWeekNumber(index)] = ' '
    })

    return weeks
}

export function makeColumns() {
    const columns: Array<object> = []
    range(54).forEach((_, index) => {
        const column = {
            Header: formatWeekNumber(index),
            accessor: formatWeekNumber(index),
            width: ASSIGNMENT_COLUMN_WIDTH,
            Cell: EditableCapacityCell,
        }
        columns.push(column)
    })
    return columns
}

export function makeData(len = 20) {
    return range(len).map(() => {
        return {
            ...makeWeeks(),
            subRows: range(3).map(makeSubRows),
        }
    })
}

export { NAME_COLUMN_WIDTH, COURSES_COLUMN_WIDTH }
