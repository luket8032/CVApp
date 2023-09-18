import '../styles/form.css';

function General() {
    return (
        <div className='form-container'>
            <form action="submit">
                <h2>General Information</h2>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id='fullName' name='fullName'/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email'/>
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="tel" id='phoneNumber' name='phoneNumber'/>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id='address' name='address'/>
                </div>
            </form>
        </div>
    )
}

export default General