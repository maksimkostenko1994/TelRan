export const renderSignupPage = () => {
    const div = document.createElement('div')
    div.classList.add('login-box')
    div.innerHTML = `
        <h1>Registration</h1>
        <form action="#" name="signup-form">
            <div class="form-box">
                <div title="Type email"><i class="fas fa-at fa-2x"></i></div>
                <input type="email" name="email" placeholder="Enter email...">
            </div>
            <div class="form-box">
                <div title="Type password"><i class="fas fa-unlock fa-2x"></i></div>
                <input type="password" id="pass" name="password" placeholder="Enter password..."><div class="pass-look"><i class="fas fa-eye-slash fa-2x"></i></div><br>
            </div>
            <div class="form-box">
                <div title="Type password"><i class="fas fa-lock fa-2x"></i></div>
                <input type="password" id="repeatPass" name="password" placeholder="Repeat password..."><div class="pass-look"><i class="fas fa-eye-slash fa-2x"></i></div><br>
            </div>
            <div class="form-box">
                <div title="Type first name"><i class="fas fa-user-tie fa-2x"></i></div>
                <input type="text" name="firstName" placeholder="Enter first name..."><br>
            </div>
            <div class="form-box">
                <div title="Type last name"><i class="fas fa-user fa-2x"></i></div>
                <input type="text" name="lastName" placeholder="Enter last name..."><br>
            </div>
            <div class="form-box">
                <div title="Type last name"><i class="fas fa-user-tag fa-2x"></i></div>
                <input type="text" name="nickname" placeholder="Enter nickname..."><br>
            </div>
            <div class="form-account">
                <span>Have account? <a href="#login">Login</a></span>
                <button>Sign up</button>
            </div>
        </form>
    `
    return div
}