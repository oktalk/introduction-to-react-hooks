import React, { useReducer, useState } from "react";

// Imagin this function in its own file.
function reducer(state, action) {
  const { currentMembers } = state.team;
  switch (action.type) {
    case 'addMember':
      return {
        ...state,
        team: {
          ...state.team,
          currentMembers: [
            ...state.team.currentMembers,
            {id: currentMembers.length, name: action.payload}
          ]
        } 
      }
    case 'removeMember':
      return {
        ...state,
        team: {
          ...state.team,
          currentMembers: currentMembers.filter(m => m.name !== action.payload)
        }
      };
    default:
      throw new Error();
  }
}

const MemberList = function({ initList }) {
  const [list, dispatch] = useReducer(reducer, initList);
  const [newMember, setNewMember] = useState('');

  return (
    <>
      <ul>
        {
          list?.team.currentMembers.map(({id, name}) => {
            return (
              <li key={id} className="list-item">
                {name} &nbsp;&nbsp;&nbsp; 
                <small role="button" onClick={() => dispatch({type: 'removeMember', payload: name})}> remove </small>
              </li>
            )
          })
        }
      </ul>
      <input value={newMember} onChange={(e) => {setNewMember(e.target.value)}} placeholder="New member..." />
      <button disabled={!newMember.length} onClick={() => dispatch({type: 'addMember', payload: newMember})} className="btn">Update</button>
    </>
  );
}

export default MemberList;