import FormButtons from './FormButtons';
import '../styles/form.css'

function ExperienceForm () {
    return (
        <form>
                <div>
                    <label htmlFor="companyName">Company name</label>
                    <input type="text" id='companyName' name='companyName'/>
                </div>
                <div>
                    <label htmlFor="positionTitle">Postition title</label>
                    <input type="text" id='positionTitle' name='positionTitle'/>
                </div>
                <div className="date-inputs">
                    <div>
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" id='startDate' name='startDate'/>
                    </div>
                    <div>
                        <label htmlFor="endDate">End Date</label>
                        <input type="date" id='endDate' name='endDate'/>
                    </div>
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" id='location' name='location'/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" id='description' name='description'/>
                </div>
                <FormButtons />
            </form>
    )
}

export default ExperienceForm;