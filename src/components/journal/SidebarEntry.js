import React from 'react'
import { JournaEntries } from './JournaEntries'

export const SidebarEntry = () => {
    const entries=[1,2,3,4,5,6,7,8,9,10]

    return (
        <div className="journal__entries">
            {
                entries.map(value=>(
                    <JournaEntries key={value}/>
                ))

            }
        </div>
    )
}
