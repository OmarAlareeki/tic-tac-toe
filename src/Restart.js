import React from 'react'
import {MdReplay} from 'react-icons/md'

const Restart = ({onClick}) => {
    return (
        <button className='restart' onClick={onClick}><MdReplay /></button>
    )
}

export default Restart
