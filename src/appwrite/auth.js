import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name, userName }) {
        try {
            console.log('userName', userName);
            const userAccount = await this.account.create(ID.unique(), email, password, name, userName);
           
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async setPrefs(userNameValue){
        console.log('value is set in setpref',userNameValue);
        try {
            return await this.account.updatePrefs({userName:userNameValue})
        } catch (error) {
            throw error;
        }
    }

    async getPrefs(){
        try {
            return await this.account.getPrefs()
        } catch (error) {   
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log('APPWRITE SERVICE :: GETCURRENTUSER :: ERROR', error);
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log('APPWRITE SERVICE :: LOGOUT :: ERROR', error);
        }
    }

}

const authService = new AuthService();

export default authService