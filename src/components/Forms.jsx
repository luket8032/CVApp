import General from './General.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx'
import Preview from './Preview.jsx';
import Print from './Print.jsx';
import { useReactToPrint } from 'react-to-print';
import { useState, useRef } from 'react';
import '../styles/formsContainer.css';

function Forms() {
    const componentRef = useRef();
    const [generalVals, setGeneralVals] = useState({})
    const [educationItems, setEducationItems] = useState([]);
    const [experienceItems, setexperienceItems] = useState([]);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

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

    function addExperienceItem(experienceItems) {
        setexperienceItems(experienceItems);
    }

    function updateExperienceItem(values){
        const updatedExperienceItems = experienceItems.map(item => {
            if(item.id === values.id) {
                item.values.companyName = values.companyName;
                item.values.positionTitle = values.positionTitle;
                item.values.startDate = values.startDate;
                item.values.endDate = values.endDate;
                item.values.location = values.location;
                item.values.description = values.description;
            }
            return item;
        });
        setexperienceItems(updatedExperienceItems);
    }

    function deleteEducationItem(id) {
        const updatedEducationItems = educationItems.filter(item => item.id !== id);
        setEducationItems(updatedEducationItems)
    }

    function deleteExperienceItem(id) {
        const updatedExperienceItems = experienceItems.filter(item => item.id !== id);
        setexperienceItems(updatedExperienceItems);
    }

    return (
        <>
        <div className='formsWrapper'>
            <General onChange={changeGeneral} />
            <Education onAdd={addEducationItem} onUpdate={updateEducationItem} onDelete={deleteEducationItem}/>
            <Experience onAdd={addExperienceItem} onUpdate={updateExperienceItem} onDelete={deleteExperienceItem}/>
            <Print onPrint={handlePrint}/>
        </div>
        <div className="preview-wrapper" ref={componentRef}>
            <Preview generalVals={generalVals} educationItems={educationItems} experienceItems={experienceItems}/>
        </div>
        </>
    )
}

export default Forms;