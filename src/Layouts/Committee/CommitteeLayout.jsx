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
    <div className='w-full min-h-screen bg-gray-50'>
      <div className='w-[80%] mx-auto bg-gray-100'>
        {committeeType.map((type, index) => {
          const filteredMembers = members.filter(
            (member) => member.committeeType === type
          );

          if (filteredMembers.length === 0) return null;

          return (
            <div key={index} className='mb-6'>
              <h1 className='text-3xl font-bold text-center p-4 bg-gray-300 text-sky-900'>
                {type}
              </h1>
              <div className='flex flex-col flex-wrap justify-center gap-4 p-4'>
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
