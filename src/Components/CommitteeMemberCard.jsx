import React from 'react'

const CommitteeMemberCard = ({name,designation}) => {
  return (
    <div>
        <div className='p-2 text-left border-b border-gray-400'>
            <h3 className='text-gray-900 text-xl font-semibold'>{name}</h3>
            <h2 className='text-lg text-sky-900 font-semibold'>{designation}</h2>
        </div>
    </div>
  )
}

export default CommitteeMemberCard