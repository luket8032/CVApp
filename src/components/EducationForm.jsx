import '../styles/form.css'

function EducationForm () {
    return (
        <form action="submit">
                <div>
                    <label htmlFor="school">School</label>
                    <input type="text" id='school' name='school'/>
                </div>
                <div>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id='degree' name='degree'/>
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
            </form>
    )
}

export default EducationForm;