import config from "../config/config";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, username }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        username
      );
      if (userAccount) {
        return this.login({email, password})
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({email, password}){
    // eslint-disable-next-line no-useless-catch
    try {
        await this.account.createEmailPasswordSession(email, password)
    } catch (error) {
        throw error
    }
  }
    
  async getCurrentUser(){
    try {
        return await this.account.get()
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error", error);
    }
  }

  async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite service :: logout :: error", error);
    }
  }

}

const authService = new AuthService();

export default authService;
