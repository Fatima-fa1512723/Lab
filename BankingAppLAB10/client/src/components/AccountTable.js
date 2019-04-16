import React from 'react';
import Account from "./Account";
import {Link} from 'react-router-dom'

function AccountTable({accounts, onDeleteAccount}) {
    return (
   <div>
       <Link to="/accts/add">Add Account</Link>
       <table>
           <thead>
           <tr>
               <th>Account No</th>
               <th>Account Type</th>
               <th>Balance</th>
           </tr>
           </thead>
           <tbody>
           {accounts.map(account => <Account onDeleteAccount={onDeleteAccount} account={account}/>)}
           </tbody>
       </table>
   </div>
    )
};

export default AccountTable;
