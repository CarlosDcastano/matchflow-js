import { app } from "./elements.js";
import { state } from "../data/state.js";

export function renderLogin() {
    app.innerHTML = ""
    app.innerHTML = `
  <div class="min-h-screen flex items-center justify-center bg-slate-100 px-4">
    <section 
      id="formsection" 
      class="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 border border-slate-200"
    >

      <!-- Logo / Title -->
      <div class="flex items-center justify-center gap-2 mb-6">
        <img id="logoLogin" src="./assets/img/iconoMatchFlow.png" alt="logo" class="w-8 h-8">
      </div>

      <h1 class="text-2xl font-semibold text-center text-slate-800 mb-2">
        Welcome back
      </h1>
      <p class="text-center text-slate-600 mb-8">
        Enter your credentials to access the platform
      </p>

      <!-- Form -->
      <form id="loginForm" class="space-y-5">

        <div>
          <label for="emailLogin" class="block text-sm font-medium text-slate-700 mb-1">
            Email or Username
          </label>
          <input 
            id="emailLogin" 
            type="email" 
            placeholder="name@example.com" 
            required
            class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
        </div>

        <div>
          <label for="passwordLogin" class="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>
          <input 
            id="passwordLogin" 
            type="password" 
            placeholder="Your password" 
            required
            class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
        </div>

        <div class="text-right">
          <p 
            id="forgotPassword" 
            class="text-sm text-slate-500 hover:text-slate-800 cursor-pointer"
          >
            Forgot password?
          </p>
        </div>

        <button 
          id="submitLogin" 
          type="submit"
          class="w-full bg-slate-800 text-white py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors"
        >
          Sign in
        </button>

        <div id="signup" class="text-center text-sm text-slate-600 mt-4">
          Don't have an account?
          <span 
            id="btnSignUp" 
            class="text-slate-800 font-medium cursor-pointer hover:underline"
          >
            Register
          </span>
        </div>

      </form>
    </section>
  </div>
`;

}

export function renderChoseTypeCustomer() {
    app.innerHTML = "";
    const choseTypeCustomer = document.createElement("section");
    choseTypeCustomer.id = "ChoseTypeCustomer";
    choseTypeCustomer.innerHTML = `
  <div class="min-h-screen flex flex-col items-center justify-center bg-slate-100 px-4">

      <!-- Go Back -->
      <div class="mb-12">
          <button
              type = "button"
              id="goBack"
              class="cursor-pointer bg-slate-300 hover:bg-slate-400 text-slate-800 px-6 py-2 rounded-lg shadow transition-colors"
          >
              Go back
          </button>
      </div>

      <!-- Cards container -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          
          <!-- Company card -->
          <div 
              id="signupCompany"
              class="bg-white rounded-2xl shadow-lg p-8 text-center border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
              <h2 class="text-xl font-semibold text-slate-800 mb-4">
                  Sign up as a company
              </h2>
              <p class="text-slate-600 mb-6">
                  Sign up as a company and start looking for candidates
              </p>
              <button
                  type = "button"
                  id="goToLoginCompany"
                  class="cursor-pointer w-full bg-slate-800 text-white py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors"
              >
                  Click here
              </button> 
          </div>

          <!-- Candidate card -->
          <div 
              id="signupCandidate"
              class="bg-white rounded-2xl shadow-lg p-8 text-center border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
              <h2 class="text-xl font-semibold text-slate-800 mb-4">
                  Sign up as a candidate
              </h2>
              <p class="text-slate-600 mb-6">
                  Sign up as a candidate and start being available for companies looking for workers
              </p>
              <button
              type = "button"
                  id="goToLoginCandidate"
                  class="cursor-pointer w-full bg-slate-800 text-white py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors"
              >
                  Click here
              </button> 
          </div>

      </div>
  </div>
`;

    app.appendChild(choseTypeCustomer)

}

export function renderSignUpCompany() {
    app.innerHTML = ""
    const signUpSection = document.createElement("section");
    signUpSection.classList.add("signUpSection");
    signUpSection.innerHTML = `

        <div id="title">
          <img id="logoLogin" src="./assets/img/iconoMatchFlow.png" alt="logo" class="w-8 h-8">
        </div>
        <h1>Create account</h1>
        <p>Join the academic performance platform today</p>
        <form id="signUpFormCompany">

            <label for="nameCompSignUp">Company name</label><br>
            <input id="nameCompSignUp" type="text" placeholder="e.g. John Doe" required><br><br>
            
            <label for="idCompSignUp">Corp ID number</label><br>
            <input id="idCompSignUp" type="text" placeholder="123456789" required><br><br>
            
            
            <label for="emailCompSignUp">Email Address</label><br>
            <input id="emailCompSignUp" type="email" placeholder="name@example.com" required><br><br>
            
            <label for="passwordCompSignUp">Password</label><br>
            <input id="passwordCompSignUp" type="password" placeholder="Your password" required><br><br>
            
            <label for="confirmPasswordCompSignUp">Confirm Password</label><br>
            <input id="confirmPasswordCompSignUp" type="password" placeholder="Confirm Password" required><br><br>
            
            <button id="submitSignUp" type="submit">Sign up</button><br>
        </form>
        <div id="logindiv">
                Already have an account? <span id="login">Login</span>
        </div>
    `
    app.appendChild(signUpSection)
}

export function renderSignUpCandidate() {
    app.innerHTML = ""
    const signUpSection = document.createElement("section");
    signUpSection.classList.add("signUpSection");
    signUpSection.innerHTML = `

        <div id="title">
          <img id="logoLogin" src="./assets/img/iconoMatchFlow.png" alt="logo" class="w-8 h-8">
        </div>
        <h1>Create account</h1>
        <p>Join the academic performance platform today</p>
        <form id="signUpFormCandidate">

            <label for="namesCandSignUp">Names</label><br>
            <input id="namesCandSignUp" type="text" placeholder="e.g. John Doe" required><br><br>

            <label for="lastNameCandSignUp">Last name</label><br>
            <input id="lastNameCandSignUp" type="text" placeholder="e.g. John Doe" required><br><br>

            <label for="idCandSignUp">ID number/Doc Number</label><br>
            <input id="idCandSignUp" type="text" placeholder="e.g. John Doe" required><br><br>
            
            <label for="emailCandSignUp">Email Address</label><br>
            <input id="emailCandSignUp" type="email" placeholder="name@example.com" required><br><br>
            
            <label for="passwordCandSignUp">Password</label><br>
            <input id="passwordCandSignUp" type="password" placeholder="Your password" required><br><br>
            
            <label for="confirmPasswordCandSignUp">Confirm Password</label><br>
            <input id="confirmPasswordCandSignUp" type="password" placeholder="Confirm Password" required><br><br>
            
            <button id="submitSignUpCandidate" type="submit">Sign up</button><br>

        </form>
        <div id="logindiv">
                Already have an account? <span id="login">Login</span>
        </div>
    `
    app.appendChild(signUpSection)
}