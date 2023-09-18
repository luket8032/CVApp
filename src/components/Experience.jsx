import { useState } from 'react';
import ExperienceForm from './ExperienceForm';
import '../styles/dropdown.css'

function Education () {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='dropdown-section-wrapper'>
            <div className='dropdown-title'>
                <img src="/briefcase.svg" alt="briefcase icon" />
                <h2>Experience</h2>
                <img className='dropdown-icon' src="/dropdown.svg" alt="dropdown icon" onClick={()=> setOpen(!isOpen)} />
            </div>
            <div className={`dropdown-list ${isOpen ? 'active' : 'inactive'}`}>
                <ExperienceForm />
            </div>
        </div>
    )
}

export default Education;