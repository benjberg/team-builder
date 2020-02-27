import React, {useState} from 'react';
import MemberCard from './components/MemberCard';
import TeamMember from './components/TeamMember';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      name: 'Ben Berger',
      email:
        'Bbjberg91@gmail.com',
      role: 'fullstack developer'

    }
   
  ]);
  const addNewMember= member =>{
    const newMember= {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember([...teamMember, newMember])
  }
  return (
    <div className="App">
    <h1>Team Members</h1>
    <MemberCard addNewMember={addNewMember}/>
    <TeamMember teamMember={teamMember}/>
    </div>
  );
}

export default App;
