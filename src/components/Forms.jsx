import General from './General.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx'
import Preview from './Preview.jsx';
import { useState } from 'react';
import '../styles/formsContainer.css';

function Forms() {
    const [generalVals, setGeneralVals] = useState({})
    function changeGeneral(generalData) {
        //something
        setGeneralVals(generalData);
    }

    return (
        <>
        <div className='formsWrapper'>
            <General onChange={changeGeneral} />
            <Education />
            <Experience />
        </div>
        <div className="preview-wrapper">
            <Preview generalVals={generalVals}/>
        </div>
        </>
    )
}

export default Forms;