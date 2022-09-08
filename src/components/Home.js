import React from 'react';
import cardImg from "../assets/img/card.png";
import formImg from "../assets/img/form.png";
import userImg from "../assets/img/user.png";
import MenuItem from './MenuItem';

function Home() {
    return (
        <ul className="index-menu">
            <MenuItem
                routeImg={formImg}
                imgDescription="Form Icon"
                routeName="Form"
                routeLink="/form"
            />
            <MenuItem
                routeImg={userImg}
                imgDescription="Users Icon"
                routeName="Users"
                routeLink="/users"
            />
            <MenuItem
                routeImg={cardImg}
                imgDescription="Card Icon"
                routeName="Cards"
                routeLink="/cards"
            />
        </ul>
    )
}

export default Home