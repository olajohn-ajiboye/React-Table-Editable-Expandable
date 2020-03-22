import React from 'react'

import CaretDown from '../ExpanderCarets/CaretDown'
import CaretUp from '../ExpanderCarets/CaretUp'

import './RowExpander.scss'

const RowExpander = ({ row }: any) => {
    return (
        <div className="Rowxpander sticky">
            {row.canExpand ? (
                <span
                    {...row.getToggleRowExpandedProps({
                        style: {
                            color: `grey`,
                            paddingLeft: `${row.depth * 2}rem`,
                        },
                    })}
                >
                    {row.isExpanded ? <CaretDown /> : <CaretUp />}
                </span>
            ) : null}
        </div>
    )
}

export default RowExpander
