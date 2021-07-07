import React from 'react';
import Header from './header';
import Navbar from './navbar';


const DefaultLayout = (props) => {
    return (
        <>
            <Header />
            <div style={{
                marginLeft: "5rem",
                marginTop: "5rem",
                display: 'flex',
            }}>
                <div style={{ display: 'flex', width: '20%'}}>
                    <Navbar />
                    <div style={{backgroundColor: "#848485", height: "7rem", width: "3px", marginRight: "1rem"}}/>
                </div>

                <div style={{ width: '100%'}}>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default DefaultLayout;