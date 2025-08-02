import React, { useState } from 'react';
import { members } from '../../utils/members';
import CommitteeMemberCard from '../../Components/CommitteeMemberCard';

const CommitteeLayout = () => {
  const [committeeType] = useState([
    'Chief Patron',
    'Patron',
    'Honoary Advisory Committee Chair(s)',
    'General Chair',
    'Organizing Committee Chair(s)',
    'Convener',
    'International Advisory Committee',
    'National Advisory Committee',
    'Publication Chair',
    'Track Chair(s)',
    'Finance Chair',
    'Program Chair',
    'Technical Program Committee',
  ]);

  return (
    <div className='w-full min-h-screen bg-gray-50 py-10 px-4'>
      <div className='w-full max-w-7xl mx-auto bg-white shadow-md rounded-2xl p-4'>
        {committeeType.map((type, index) => {
          const filteredMembers = members.filter(
            (member) => member.committeeType === type
          );

          if (filteredMembers.length === 0) return null;

          return (
            <div key={index} className='mb-10 '>
              <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-center p-4 bg-gray-200 text-sky-900 rounded-md'>
                {type}
              </h1>

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 sm:flex sm:flex-col'>
                {filteredMembers.map((member, idx) => (
                  <CommitteeMemberCard
                    key={idx}
                    name={member.name}
                    designation={member.designation}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommitteeLayout;
