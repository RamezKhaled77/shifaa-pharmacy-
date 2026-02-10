import { appState } from "../state.js";

class AuthService {
  constructor() {
    this.user =
      JSON.parse(localStorage.getItem("shifaa_active_session")) || null;
    this.users =
      JSON.parse(localStorage.getItem("shifaa_database_users")) || [];
    this.updateState();
  }

  /**
   * Simulated Login
   * @param {string} email
   * @param {string} password
   */
  login(email, password) {
    const user = this.users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Don't store password in session
    const sessionUser = { ...user };
    delete sessionUser.password;

    this.user = sessionUser;
    localStorage.setItem("shifaa_active_session", JSON.stringify(sessionUser));
    this.updateState();
    return true;
  }

  /**
   * Simulated Signup
   * @param {Object} userData
   */
  signup(userData) {
    const exists = this.users.some((u) => u.email === userData.email);
    if (exists) {
      throw new Error("User with this email already exists");
    }

    const newUser = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      avatar: "assets/icons/no-bg-logo.png",
    };

    this.users.push(newUser);
    localStorage.setItem("shifaa_database_users", JSON.stringify(this.users));

    // Auto-login after signup (omit password from session)
    const sessionUser = { ...newUser };
    delete sessionUser.password;

    this.user = sessionUser;
    localStorage.setItem("shifaa_active_session", JSON.stringify(sessionUser));
    this.updateState();
    return true;
  }

  logout() {
    this.user = null;
    localStorage.removeItem("shifaa_active_session");
    this.updateState();
  }

  updateState() {
    appState.setState({
      user: this.user,
      isLoggedIn: !!this.user,
    });
  }

  getUser() {
    return this.user;
  }
}

export const authService = new AuthService();
