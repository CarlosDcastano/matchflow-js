import { app } from "../elements.js";
import { state } from "../../data/state.js";

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