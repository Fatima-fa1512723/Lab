import React from 'react'
import '../styles.css'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
      <nav>
          <ul>
              <li>Banking App</li>
              <li>
                  <Link to ="/accts/List">Accounts</Link>
              </li>

              <li>
                  <Link to ="/addtrans">Add Transaction</Link>
              </li>
          </ul>
      </nav>
    )
}

export default NavBar;