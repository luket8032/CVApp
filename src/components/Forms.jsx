import General from './General.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx'
import '../styles/formsContainer.css';

function Forms() {
    return (
        <div className='formsWrapper'>
            <General/>
            <Education />
            <Experience />
        </div>
    )
}

export default Forms