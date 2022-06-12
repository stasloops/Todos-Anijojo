import React, { FC, useState } from 'react'
import './Filters.scss'

type FiltersProps = {
    setActiveFilter: (item: number) => void
}

const Filters: FC<FiltersProps> = ({ setActiveFilter }) => {
    const [activeItem, setActiveItem] = useState<number>(0)
    const filter = [
        { active: 0, name: 'Все' }, { active: 1, name: 'Завершенные' }, { active: 2, name: 'Активные' }
    ]

    const changeActiveFilter = (item: number) => {
        setActiveFilter(item)
        setActiveItem(item)
    }

    return (
        <div className='filters'>
            {
                filter.map((item, id) => (
                    <div
                        className='filters__item'
                        onClick={() => changeActiveFilter(item.active)}
                        key={id}
                        style={{
                            color: activeItem === item.active ? '#fff' : '',
                            borderColor: activeItem === item.active ? '#fff' : ''
                        }}
                    >
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
}

export default Filters