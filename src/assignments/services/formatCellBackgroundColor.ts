import CellColors from '../data/entity/cellColors'

type Value = string | number

const formatCellBackgroundColor = (value: Value) => {
    const formattedValue = typeof value === 'string' ? parseInt(value, 10) : value

    if (formattedValue > 90) {
        return CellColors.GREEN
    } else if (formattedValue <= 90 && value >= 50) {
        return CellColors.YELLOW
    } else if (formattedValue <= 49) {
        return CellColors.RED
    } else {
        return CellColors.WHITE
    }
}

export default formatCellBackgroundColor
