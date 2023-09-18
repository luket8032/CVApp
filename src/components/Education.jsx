import { useState } from 'react';
import EducationForm from './EducationForm';
import '../styles/dropdown.css'

function Education () {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='dropdown-section-wrapper'>
            <div className='dropdown-title'>
                <img src="/school.svg" alt="school icon" />
                <h2>Education</h2>
                <img className='dropdown-icon' src="/dropdown.svg" alt="dropdown icon" onClick={()=> setOpen(!isOpen)} />
            </div>
            <div className={`dropdown-list ${isOpen ? 'active' : 'inactive'}`}>
                <EducationForm />
            </div>
        </div>
    )
}

export default Education;