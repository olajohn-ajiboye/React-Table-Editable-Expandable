import React, { ChangeEvent, useEffect, useState } from 'react'
import { CellProps } from 'react-table'
import formatCellBackgroundColor from '../../../services/formatCellBackgroundColor'

import './EditableCapacityCell.scss'

const EditableCapacityCell = ({
    cell: { value: initialValue, getCellProps },
    row: { canExpand },
    updateCellValue,
    editable,
}: CellProps<Record<string, string | number>>) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        //updateCellValue(index, id, value)
    }

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    if (!editable) {
        return `${initialValue}`
    }

    const backgroundColor = canExpand ? formatCellBackgroundColor(value) : 'white'

    return (
        <input
            className="EditableCapacityCell"
            value={value}
            onChange={!canExpand ? onChange : undefined}
            onBlur={onBlur}
            style={{ backgroundColor }}
            disabled={canExpand}
        />
    )
}

export default EditableCapacityCell
