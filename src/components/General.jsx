import '../styles/General.css';

function General() {
    return (
        <div>
            <form action="">
                <h1>General Information</h1>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id='fullName' name='fullName'/>
                </div>
            </form>
        </div>
    )
}

export default General