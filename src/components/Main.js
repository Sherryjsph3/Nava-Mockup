import React from 'react';
import Data from './Data.js';
import AddContact from './AddContact.js';
import { useState, useEffect } from 'react';

function Main() {
  // const householdArr = [
  //   { name: 'Bud Baxter', description: 'Household contact', fruit: 'Apple' },
  //   { name: 'Andy Baxter', description: 'Household contact', fruit: 'Apple' },
  // ];

  const [members, setMembers] = useState([]);

  const addMember = (member) => {
    member.index = members.length + 1;

  };

  const url = `https://63d006cc8a780ae6e681fea9.mockapi.io/api/members`;
  const getContact = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMembers(data);
  };

  useEffect(()=>{ getContact()}, []);

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
