import React from 'react'
import './Avatar.css'

function Avatar({name, imageUrl, size, style}){
    const avatarClasses = `avatar avatar-${size} avatar-${style}`

    return (
        <div className= {avatarClasses}>
            <img src={imageUrl} alt={name} className='avatar-image' />
            <p className='avatar-name'>{name}</p>
        </div>
    )
}

export default Avatar