import { ReactNode } from "react";

interface List<T> {
    list: T[],
    add: (item: T) => ReactNode
}

import React from 'react'

const ListItem = <T,>({ list, add }: List<T>) => {
    return (
        <ul>
            {
                list.map((el, i) => (
                    <li key={i}>{add(el)}</li>
                ))
            }
        </ul>
    )
}

export default ListItem