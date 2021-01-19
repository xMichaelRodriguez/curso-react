import React,{memo} from 'react'

export const Small = memo(({value}) => {

    console.log('Me llame denuevo bitch')

  
    return (
        <small>
            {value}
        </small>
    )
}
)