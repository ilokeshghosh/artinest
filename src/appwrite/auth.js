import conf from "../conf/conf";
import { Client, Account, ID, Avatars, Storage, Databases } from "appwrite";


export class AuthService {
    client = new Client();
    account;
    databases;
    bucket;



    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);




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

    async deleteAccount(userId){
        try {
            await this.account.delete()
            return true;

        } catch (error) {
            throw error;
            
        }
    }


    async setPrefs(prefKey, prefValue,prefs) {
        try {
           const user = {...prefs} || {}
           user[prefKey] = prefValue
            return await this.account.updatePrefs(user)
        } catch (error) {
            throw error;
        }
    }

    async getPrefs() {
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
            throw error;
        }

        return null;
    }

    async updateName(name){
        try {
            return await this.account.updateName(name)
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }


    // avatars services
    getUserAvatar(name) {
        const updatedName = name.replace(/\s/g, '+')
        const url = `https://cloud.appwrite.io/v1/avatars/initials?name=${updatedName}`
        return url;
    }

    async uploadAvatar(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
        }
    }

    async deleteAvatar(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            throw error;
        }
    }

    getAvatarPreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const authService = new AuthService();

export default authService