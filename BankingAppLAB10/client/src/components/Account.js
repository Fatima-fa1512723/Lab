import React from 'react';

function Account({account, onDeleteAccount}) {
    return (
        <tr key={account._id}>
           <td>{account._id}</td>
           <td>{account.acctType}</td>
           <td>{account.balance}</td>
            <td>
                {account.balance<=0 ?  <button onClick={()=>onDeleteAccount(account._id)} >Delete</button> : ''}
                <button>Edit</button></td>
        </tr>
    )
};

export default Account;