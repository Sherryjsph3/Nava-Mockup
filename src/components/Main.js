import React from 'react';
import Data from './Data.js';
import AddContact from './AddContact.js';
import { useState } from 'react';

function Main() {
  const householdArr = [
    { name: 'Bud Baxter', description: 'Household contact', fruit: 'Apple' },
    { name: 'Andy Baxter', description: 'Household contact', fruit: 'Apple' },
  ];

  const [members, setMembers] = useState(householdArr);

  const addMember = (member) => {
    member.index = members.length + 1;
    setMembers([...members, member]);
  };

  return (
    <>
      <div className="household-wrapper">
        <div className="household-title">Your household</div>
        <div className="household-text">
          Welcome to The Marketplace! Review your household below:
        </div>
      </div>
      <div className="tile-wrapper">
        <Data members={members} />
      </div>

      <AddContact addMember={addMember} />
    </>
  );
}

export default Main;
