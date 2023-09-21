import { useState } from 'react';
import '../styles/form.css';

function General({onChange}) {
    const [isOpen, setOpen] = useState(true);

    function handleChange() {
        const name = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const address = document.getElementById('address').value;
        const summary = document.getElementById('summary').value;

        const generalData = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            summary: summary
        }

        onChange(generalData);
    }

    return (
        <div className='form-container'>
            <form action="submit">
                <div className="title">
                    <h2><img src="/person.svg" alt="person icon" />General Information</h2>
                    <img className='dropdown-icon' src="/dropdown.svg" alt="dropdown icon" onClick={()=> setOpen(!isOpen)} />
                </div>
                <div className={`form-section ${isOpen ? 'active' : 'inactive'}`}>
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
                    <div>
                        <label htmlFor="summary">Summary</label>
                        <textarea id='summary' name='summary' onChange={handleChange}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default General;