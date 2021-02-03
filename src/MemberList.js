import React, { useState } from "react";

const removeMember = (member, list, updateList) => {
  const { currentMembers } = list.team;
  const amendedList = {
    ...list,
    team: {
      ...list.team,
      currentMembers: currentMembers.filter(m => m.name !== member.name)
    }
  };
  updateList(amendedList);
}

const ListItem = ({member, list, updateList}) => {
  return (
    <li className="list-item">
      {member.name} 
      <small role="button" onClick={() => removeMember(member, list, updateList)}> &nbsp;&nbsp;&nbsp;remove </small>
    </li>
  );
}

const MemberList = function({ initList }) {
  const [list, updateList] = useState(initList);
  const [newMember, setNewMember] = useState('');
  const addMember = () => {
    const { currentMembers } = list.team;
    const amendedList = {
      ...list,
      team: {
        ...list.team,
        currentMembers: [
          ...list.team.currentMembers,
          {id: currentMembers.length, name: newMember}
        ]
      } 
    }
    updateList(amendedList);
  };
  return (
    <>
      <ul>
        {
          list?.team.currentMembers.map(member =>
            <ListItem key={member.id} member={member} list={list} updateList={updateList} />
          )
        }
      </ul>
      <input value={newMember} onChange={(e) => {setNewMember(e.target.value)}} placeholder="New member..." />
      <button disabled={!newMember.length} onClick={addMember} className="btn">Update</button>
    </>
  );
}

export default MemberList;