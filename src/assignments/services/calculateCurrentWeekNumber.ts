import getWeek from 'date-fns/getWeek'

const today = new Date()
const weekNumber = getWeek(today)

export default weekNumber
