import React from 'react';
import { Search } from './Search';

const Header = (props) => {
    return (
        <>
            <div className='Nav'>
                <div>
                    <header className="App-header">
                        <h2>{props.heading}</h2>
                    </header>
                </div>

                <div><Search searchMovie={props.searchMovie} /></div>

            </div>
            <p className="App-intro">Show Your Favorite Movie</p>
        </>
    );
};

export default Header;