import React, {useEffect, useState} from 'react';
import AccountTable from "./AccountTable";
import {Route , Switch} from 'react-router-dom'
function Accounts() {
    const [accounts, setAccounts] = useState([]);
    /* const accounts = [
         {
             _id: 125,
             acctType: "Current",
             balance: 4888
         },
         {
             acctType: "Saving",
             balance: 123123,
             _id: 123123
         },
         {
             _id: 4455,
             acctType: "Current",
             balance: 95
         },
         {
             _id: 4455,
             acctType: "Current",
             balance: 7777
         }
     ];*/

    //download all of our accounts

    //we want to have the following functionalities

    //delete

    //add

    //update

    async function getAccounts(acctType) {
        let url = 'http://localhost:5000/api/accounts/';
        //if (acctType) {
        //   url = `${url}?acctType=${acctType}`;
        //}
        const response = await fetch(url);
        const data = await response.json();
        setAccounts(data);

    }

    async function handleDeleteAccount(accountNo) {
        try {
            const confirmed = confirm("Are you sure you want to delete this account?");
            if (confirmed) {
                await fetch(`http://localhost:5000/api/accounts/${accountNo}`, {method: 'delete'});
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getAccounts();
    },[]);

    return (
<Switch>
    <Route path="/accts/list" render={()=><AccountTable onDeleteAccount={handleDeleteAccount} accounts={accounts}/>}/> /*render is for passing*/
    <Route path="/accts/add" component={AccountForm}/>

</Switch>
        )

};

export default Accounts;
