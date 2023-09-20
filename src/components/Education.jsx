import { useState } from 'react';
import EducationForm from './EducationForm';
import '../styles/dropdown.css'

function Education ({onAdd, onUpdate}) {
    const [isOpen, setOpen] = useState(false);
    const [keyCount, setKeyCount] = useState(0)
    const [educationList, setEducationList] = useState([])

    function addEducationForm() {
        setKeyCount(prevKey => prevKey + 1);
        const newItem = {
            id: keyCount,
            values: {
                school: '',
                degree: '',
                startDate: '',
                endDate: '',
                location: ''
            }
        }
        setEducationList([...educationList, newItem]);
        onAdd([...educationList, newItem]);
    }

    function updateEducationItem(values){
        onUpdate(values)
    }

    return (
        <div className='dropdown-section-wrapper'>
            <div className='dropdown-title'>
                <img src="/school.svg" alt="school icon" />
                <h2>Education</h2>
                <img className='dropdown-icon' src="/dropdown.svg" alt="dropdown icon" onClick={()=> setOpen(!isOpen)} />
            </div>
            <div className={`dropdown-list ${isOpen ? 'active' : 'inactive'}`}>
                {educationList.map(item => <EducationForm key={item.id} id={item.id} onSave={updateEducationItem}/>)}
            </div>
            <button className={`education-btn ${isOpen ? 'active' : 'inactive'}`} onClick={addEducationForm}>Add education</button>
        </div>
    )
}

export default Education;