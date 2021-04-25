import env from 'react-dotenv'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SingleWineMini from '../Components/SingleWineMini'





const AllWinesPage = (props) => {



    return (
        <div className="page">
            <span className="home-h1">Here are the wines!</span>
            <SingleWineMini allWines={props.allWines} />

            
        </div>
    )
}


export default AllWinesPage