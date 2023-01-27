import cx from 'classnames';
import styles from '../styles/Login.module.css'

export default function Register() {
    return (
        <>

            <main className={cx(styles["form-signin"], "text-center", "mt-5")}>
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please sign up...</h1>
                    {/* Name */}
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingName" placeholder="your name here" />
                        <label>Name</label>
                    </div>
                    {/* Gender */}
                    <div className="form-floating">

                      
                        <div className='form-radio'>
                              <label>Gender</label>
                        <label for="male"> 
                        <input type="radio" id="male" name="gender" value="male" />
                       Male</label>

                      <label for="female">
                        <input type="radio" id="female" name="gender" value="female" />
                       Female</label>
                        </div>
                    </div>
                    {/* Designation */}
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingDesignation" placeholder="your name here" />
                        <label>Designation</label>
                    </div>
                    {/* username and password */}
                    <hr></hr>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className={cx(styles.checkbox, "mb-3")}>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                </form>
            </main>

        </>
    )
}