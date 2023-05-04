import './Register.css'

export default function Register () {
    return (
        <div className="register--container">
            <h1>Create your account</h1>
            <form action="">
                <div className='grid--display'>
                    <label> First Name:
                        <input type="text" name="fname" id="" />
                    </label>
                    <label>Middle Name:
                        <input type="text" name="mname" id="" />
                    </label>
                    <label>Last Name:
                        <input type="text" name="lname" id="" />
                    </label>
                </div>
                <label>username
                    <input type="text" name="username" id="" />
                </label>
                <div className='grid--display'>
                    <label>password:
                        <input type="password" name="" id="" />
                    </label>
                    <label>confirm password:
                        <input type="password" name="" id="" />
                    </label>
                </div>
                <input type="submit" name="" id="" value='Sign Up' />
            </form>
        </div>
    )
}