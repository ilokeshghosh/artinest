// APPWRITE DOCS : https://appwrite.io/docs/references

// importing environment variable(env) and appwrite apis
import conf from "../conf/conf";
import { Client, Account, ID, Storage, Databases } from "appwrite";

// create appwrite Auth Service to provide abstraction
export class AuthService {
    // create client
    client = new Client();
    account;
    databases;
    bucket;


    constructor() {
        // provide project end point and project id to client from env
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        // provide client to account,database and bucket
        this.account = new Account(this.client);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);
    }

    // function to create account
    async createAccount({ email, password, name, userName }) {
        try {
            // call appwrite api : Create account(see appwrite docs for reference)
            const userAccount = await this.account.create(ID.unique(), email, password, name, userName);

            // if account is created then call login function
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call auth service)
            throw error;
        }
    }

    // function to delete account (it does not work on this project end point)
    async deleteAccount(userId) {
        try {
            // call appwrite api : Delete user (see appwrite docs for reference)
            await this.account.delete()
            return true;

        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call auth service)
            throw error;

        }
    }

    // function to set account preferences of currently logged in account
    async setPrefs(prefKey, prefValue, prefs) {
        try {
            // if preferences exists then get previous preferences({...prefs}) we do it because it update preferences , it doesn't add preferences
            const user = { ...prefs } || {}
            // set new key and value
            user[prefKey] = prefValue
            // call appwrite api : Update preferences (see appwrite docs for reference)
            return await this.account.updatePrefs(user)
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call auth service)
            throw error;
        }
    }

    // function to get account preferences of currently logged in account
    async getPrefs() {
        try {
            // call appwrite api : Get account preferences (see appwrite docs for reference)
            return await this.account.getPrefs()
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call auth service)
            throw error;
        }
    }

    // function to login to account
    async login({ email, password }) {
        try {
            // call appwrite api : Create email session (see appwrite docs for reference)
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call auth service)
            throw error;
        }
    }

    // function to get currently logged-in user(response : User)
    async getCurrentUser() {
        try {
            // call appwrite api : Get account (see appwrite docs for reference)
            return await this.account.get();
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call auth service)
            throw error;
        }


    }

    //function to Update currently logged-in user account name.
    async updateName(name) {
        try {
            // call appwrite api : Update name (see appwrite docs for reference)
            return await this.account.updateName(name)
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call auth service)
            throw error;
        }
    }

    //function to Logout the user
    async logout() {
        try {
            // call appwrite api : Delete session (see appwrite docs for reference)
            await this.account.deleteSessions();
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call auth service)
            throw error;
        }
    }


    // mail services

    // email verification
    // function for email verification
    async sendVerificationMail() {
        try {
            // call appwrite api : Create email verification (see appwrite docs for reference)
            await this.account.createVerification('https://artinest.netlify.app/profile')
            return true
        } catch (error) {
            throw error
        }
    }

    // function to confirm email verification 
    async confirmVerification(userId, secret) {
        try {
            // call appwrite api : Create email verification (confirmation) (see appwrite docs for reference)
            await this.account.updateVerification(userId, secret)
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call auth service)
            throw error;
        }
    }


    // reset password
    // function to reset password vai email
    async sendPasswordResetMail(email) {
        try {
             // call appwrite api : Create password recovery (see appwrite docs for reference)
            // await this.account.createRecovery(email, 'http://localhost:5173/reset-password')
            await this.account.createRecovery(email, 'https://artinest.netlify.app/reset-password')
            return true
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call auth service)
            throw error;
        }
    }

    // function to confirm reset password via email 
    async confirmPasswordResetMail(userId, secret, password, repeatPassword){
        try{
             // call appwrite api : Create password recovery (confirmation) (see appwrite docs for reference)
            await this.account.updateRecovery(userId, secret, password, repeatPassword)
            return true;
        }catch(error){
            // if error is caught then throw the error (it will be handled when we call auth service)
            throw error;
        }
    }


    // avatar services
    //function to generate avatar based on name (not recommended to use , use 'Get user initials' instead)
    getUserAvatar(name) {
        // replace gap with '+
        const updatedName = name.replace(/\s/g, '+')
        // get the url of the generated avatar
        const url = `https://cloud.appwrite.io/v1/avatars/initials?name=${updatedName}`
        return url;
    }

    //function to upload avatar in storage
    async uploadAvatar(file) {
        try {
            // call appwrite api : Create file (see appwrite docs for reference)
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call auth service)
            throw error;
        }
    }

    //function to delete avatar from storage
    async deleteAvatar(fileId) {
        try {
            // call appwrite api : Delete file (see appwrite docs for reference)
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call auth service)
            throw error;
        }
    }

    //function to get avatar preview
    getAvatarPreview(fileId) {
        // call appwrite api : Get file preview (see appwrite docs for reference)
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

// create new object 
const authService = new AuthService();

// export the object (authService)
export default authService