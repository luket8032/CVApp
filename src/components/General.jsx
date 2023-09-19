// import { useState } from 'react';
import '../styles/form.css';

function General({onChange}) {

    function handleChange() {
        const name = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const address = document.getElementById('address').value;

        const generalData = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            address: address
        }

        onChange(generalData);
    }

    return (
        <div className='form-container'>
            <form action="submit">
                <h2><img src="/person.svg" alt="person icon" />General Information</h2>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id='fullName' name='fullName' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="tel" id='phoneNumber' name='phoneNumber' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id='address' name='address' onChange={handleChange}/>
                </div>
            </form>
        </div>
    )
}

export default General;