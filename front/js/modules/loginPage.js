export const renderLoginPage = () => {
    const div = document.createElement('div')
    div.classList.add('login-box')
    div.innerHTML = `
        <h1>Login</h1>
        <form action="#" name="login-form">
            <div class="form-box">
                <div title="Type email"><i class="fas fa-at fa-2x"></i></div>
                <input type="email" name="email" placeholder="Enter email...">
            </div>
            <label for="email"></label><br>
            <div class="form-box">
                <div title="Type password"><i class="fas fa-unlock fa-2x"></i></div>
                <input type="password" name="password" placeholder="Enter password..."><div class="pass-look"><i class="fas fa-eye-slash fa-2x"></i></div>
            </div>
            <label for="password"></label>
            <div class="form-account">
                <span>Don't have account? <a href="#signup">Start here</a></span>
                <button>Login</button>
            </div>
        </form>
    `

    return div
}