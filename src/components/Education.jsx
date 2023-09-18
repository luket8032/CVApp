import { useState } from 'react';
import EducationForm from './EducationForm';
import '../styles/education.css'

function Education () {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='education-section-wrapper'>
            <div className='education-title'>
                <img src="/school.svg" alt="school icon" />
                <h2>Education</h2>
                <img className='drop-down-icon' src="/dropdown.svg" alt="dropdown icon" onClick={()=> setOpen(!isOpen)} />
            </div>
            <div className={`education-list ${isOpen ? 'active' : 'inactive'}`}>
                <EducationForm />
            </div>
        </div>
    )
}

export default Education;