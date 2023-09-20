import General from './General.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx'
import Preview from './Preview.jsx';
import { useState } from 'react';
import '../styles/formsContainer.css';

function Forms() {
    const [generalVals, setGeneralVals] = useState({})
    const [educationItems, setEducationItems] = useState([]);

    function changeGeneral(generalData) {
        setGeneralVals(generalData);
    }

    function addEducationItem(educationList) {
        setEducationItems(educationList);
    }
    
    function updateEducationItem(values){
        const updatedEducationItems = educationItems.map(item => {
            if(item.id === values.id) {
                item.values.school = values.school;
                item.values.degree = values.degree;
                item.values.startDate = values.startDate;
                item.values.endDate = values.endDate;
                item.values.location = values.location;
            }
            return item;
        });
        setEducationItems(updatedEducationItems)
    }

    return (
        <>
        <div className='formsWrapper'>
            <General onChange={changeGeneral} />
            <Education onAdd={addEducationItem} onUpdate={updateEducationItem}/>
            <Experience />
        </div>
        <div className="preview-wrapper">
            <Preview generalVals={generalVals} educationItems={educationItems}/>
        </div>
        </>
    )
}

export default Forms;