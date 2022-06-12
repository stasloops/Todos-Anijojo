import React, { FC } from 'react'
import './Filters.scss'

type FiltersProps = {
    setActiveFilter: (item: number) => void
}

const Filters: FC<FiltersProps> = ({ setActiveFilter }) => {
    const filter = [
        { active: 0, name: 'Все' }, { active: 1, name: 'Завершенные' }, { active: 2, name: 'Активные' }
    ]

    const changeActiveFilter = (item: number) => {
        setActiveFilter(item)
    }

    return (
        <div className='filters'>
            {
                filter.map((item, id) => (
                    <div onClick={() => changeActiveFilter(item.active)} className='filters__item' key={id}>{item.name}</div>
                ))
            }
        </div>
    )
}

export default Filters