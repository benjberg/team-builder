import React, {useState} from 'react';
const MemberCard = props => {
        // console.log("this is our props",props);
      const [teamMember,setTeamMember]= useState({name:'', email:'', role:''});
      const handleChanges = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value});
        console.log(teamMember)
      };
      const submitForm = e => {
        e.preventDefault();
        props.addNewMember(teamMember)
        setTeamMember({name: '', email: '', role:''})
      }
   
   
    return(
        <form onSubmit={submitForm}>
        <label htmlfor='name'>Name</label>
        <input id='name' type='text' name='name' onChange={handleChanges} placeholder='name' value={teamMember.name}/>
        <label htmlfor='email'>Email</label>
        <input id='email' type='text' name='email' onChange={handleChanges} placeholder='email address' value={teamMember.email}/>
        <label htmlfor='role'>Role</label>
        <input id='role' type='text' name='role' onChange={handleChanges} placeholder='Role' value={teamMember.role}/>
        <button type='submit'>Add Member</button>
      </form>
    )
}
export default MemberCard;