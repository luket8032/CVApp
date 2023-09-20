import '../styles/form.css'

function EducationForm ({onSave}) {
    function sendData() {
        const school = document.getElementById('school').value;
        const degree = document.getElementById('sdegreechool').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const location = document.getElementById('location').value;

        const educationData = {
            school: school,
            degree: degree,
            startDate: startDate,
            endDate: endDate,
            location: location
        }
        
        onSave(educationData);
    }

    return (
        <form>
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
            <div className="buttons-wrapper">
                <button className='save-btn' onClick={sendData}>Save</button>
                <button className='delete-btn'>Delete</button>
            </div>
        </form>
    )
}

export default EducationForm;