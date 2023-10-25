import React from 'react';
import './Profil.css';

function Profillntro({ user }) {
    return (
        <section className='profile-section'>
            <div className='header'>
                <h1>Welcome, {user.first_name}!</h1>
            </div>
            <div><h3>Email:{user.email}</h3></div>
        </section>
    );
}

export default Profillntro;
