import General from './General.jsx';
import Education from './Education.jsx';
import '../styles/formsContainer.css';

function Forms() {
    return (
        <div className='formsWrapper'>
            <General/>
            <Education />
        </div>
    )
}

export default Forms