import './Login.css'

export default function Login () {
    return (
        <div className="login--container">
            <h1>Welcome back!</h1>
            <form action="">
                <label>username
                    <input type="text" name="username" id="" />
                </label>
                <label>password:
                    <input type="password" name="" id="" />
                </label>
                <input type="submit" name="" id="" value='Log In' />
            </form>
        </div>
    )
}