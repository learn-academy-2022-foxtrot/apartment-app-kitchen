import React from "react"

import { NavLink } from 'react-router-dom'

const Home = (props) => {

  // console.log("home props", props.logged_in)
  const isLoggedIn = props.logged_in

  return (
    <><>
      <h3>Home</h3>

    </><div>
        <h1>Welcome to your new home</h1>
        <br />
        <p>
          Hello! Welcome to our apartment app. An app where people can view and list apartment listings
        </p>
        <br />
        <button>
          <NavLink to="/apartmentindex">Apartment Listings</NavLink>
        </button>



        <br />

        <button>
        {isLoggedIn &&
          <NavLink to="/myapartments">View Your Listings</NavLink>
        }
        </button>

        <br />

      </div></>





  )
}

export default Home