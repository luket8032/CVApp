import { useState } from 'react';
import EducationForm from './EducationForm';
import '../styles/dropdown.css'

function Education () {
    const [isOpen, setOpen] = useState(false);
    const [keyCount, setKeyCount] = useState(0)
    const [educationList, setEducationList] = useState([])

    function addEducation() {
        setKeyCount(prevKey => prevKey + 1);
        setEducationList([...educationList, {id: keyCount}]);
    }

    return (
        <div className='dropdown-section-wrapper'>
            <div className='dropdown-title'>
                <img src="/school.svg" alt="school icon" />
                <h2>Education</h2>
                <img className='dropdown-icon' src="/dropdown.svg" alt="dropdown icon" onClick={()=> setOpen(!isOpen)} />
            </div>
            <div className={`dropdown-list ${isOpen ? 'active' : 'inactive'}`}>
                {educationList.map(item => <EducationForm key={item.id}/>)}
            </div>
            <button className={`education-btn ${isOpen ? 'active' : 'inactive'}`} onClick={addEducation}>Add education</button>
        </div>
    )
}

export default Education;