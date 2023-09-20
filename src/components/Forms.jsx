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
    
    function changeEducation(newItemID, educationVals) {
        setEducationItems([...educationItems, {id: newItemID, data: educationVals}]);
    }

    return (
        <>
        <div className='formsWrapper'>
            <General onChange={changeGeneral} />
            <Education onAdd={changeEducation} />
            <Experience />
        </div>
        <div className="preview-wrapper">
            <Preview generalVals={generalVals} educationItems={educationItems}/>
        </div>
        </>
    )
}

export default Forms;