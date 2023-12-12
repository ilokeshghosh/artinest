// APPWRITE DOCS : https://appwrite.io/docs/references

// importing environment variable(env) and appwrite apis
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

// create appwriteService / service to provide abstraction
export class Service {
    // create client
    client = new Client();
    databases;
    bucket;

    constructor() {
        // provide project end point and project id to client from env
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        // provide client to database and bucket
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // function to create post
    async createPost({
        title,
        slug,
        content,
        status,
        userId,
        userName,
        hashTags
    }) {
        try {
            // call appwrite api : Create document(see appwrite docs for reference)
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    userId,
                    userName,
                    hashTags
                }
            );
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call service / appwriteService)
            throw error;
        }
    }

    // function to update post
    async updatePost(slug, { title, content, status, hashTags }) {
        try {
            // call appwrite api : Update document (see appwrite docs for reference)
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    hashTags
                }
            );
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call service / appwriteService)
            throw error;
        }
    }

    // function to delete post
    async deletePost(slug) {
        try {
            // call appwrite api : Delete document (see appwrite docs for reference)
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            // return true if document is deleted
            return true;
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call service / appwriteService)
            throw error;
        }
    }

    // function to get post by its unique ID
    async getPost(slug) {
        try {
            // call appwrite api : Get document (see appwrite docs for reference)
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call service / appwriteService)
            throw error;
        }
    }


    // function to get all posts whose status is active
    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            // call appwrite api : List documents (see appwrite docs for reference)
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
             // if error is caught then throw the error (it will be handled when we call service / appwriteService)
            throw error;
        }
    }

    //   file service (not used till date)

    //function to upload file in storage
    async uploadFile(file) {
        try {
            // call appwrite api : Create file (see appwrite docs for reference)
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call service / appwriteService)
            throw error;
        }
    }

    //function to delete file from storage
    async deleteFile(fileId) {
        try {
            // call appwrite api : Delete file (see appwrite docs for reference)
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            // if error is caught then throw the error (it will be handled when we call service / appwriteService)
            throw error;
        }
    }

    //function to get avatar preview
    getFilePreview(fileId) {
        // call appwrite api : Get file preview (see appwrite docs for reference)
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

// create new object 
const service = new Service()
// export the object (service / appwriteService)
export default service