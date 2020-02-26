import React from 'react';
const TeamMember = props => {
    return (
      <div className="note-list">
        {props.teamMember.map(member => (
          <div className="note" key={member.id}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default TeamMember;