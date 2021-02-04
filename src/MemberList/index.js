import React, { useState } from "react";

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

  const removeMember = (member) => {
    const { currentMembers } = list.team;
    const amendedList = {
      ...list,
      team: {
        ...list.team,
        currentMembers: currentMembers.filter((m) => m.name !== member.name),
      },
    };
    updateList(amendedList);
  };

  return (
    <>
      <ul>
        {list?.team.currentMembers.map((member) => (
          <li key={member.id} className="list-item">
            {member.name}
            <small role="button" onClick={() => removeMember(member)}>
              {' '}
              &nbsp;&nbsp;&nbsp;remove{' '}
            </small>
          </li>
        ))}
      </ul>
      <label htmlFor="newMember">Add new member</label>
      <input
        id="newMember"
        name="newMember"
        value={newMember}
        onChange={(e) => {
          setNewMember(e.target.value);
        }}
        placeholder="New member..."
      />
      <button disabled={!newMember.length} onClick={addMember} className="btn">
        Update
      </button>
    </>
  );
}

export default MemberList;
