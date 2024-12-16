const DATABASE_URL = import.meta.env.VITE_DATABASE_URL;

const ENDPOINTS = {
    articles: {

        allArticles: `${DATABASE_URL}` + '/api/articles/all',
        postArticle: `${DATABASE_URL}` + '/api/articles',
        getArticleById: (articleId) => `${DATABASE_URL}/api/articles/${articleId}`,
        getArticleAttachments: (articleId) => `${DATABASE_URL}/api/articles/${articleId}/attachments`,
        getAllTags: `${DATABASE_URL}` + '/api/articles/getAllTags',
        updateArticle: (articleId) => `${DATABASE_URL}/api/articles/${articleId}`,
        deleteArticle: (articleId) => `${DATABASE_URL}/api/articles/${articleId}`,
        searchArticles: (searchTerm, searchType) => `${DATABASE_URL}/api/articles/search?keyword=${searchTerm}&searchType=${searchType}`,
        totalLikes: (articleId) => `${DATABASE_URL}/api/articles/${articleId}/getFavorites`,
        
    },
    attachments: {
        uploadAttachment: (articleId) => `${DATABASE_URL}/api/attachments?articleId=${articleId}`,
        deleteAttachment: (attachmentId) => `${DATABASE_URL}/api/attachments/${attachmentId}`
    },
    users: {
        getUserByEmail: (email) => `${DATABASE_URL}/users/userByEmail=${email}`,
        updateUser: (userId) => `${DATABASE_URL}/users/${userId}`,
        getUser: (userId) => `${DATABASE_URL}/users/${userId}`,
        uploadPhoto: (userId) => `${DATABASE_URL}/users/${userId}/photo`,
        changePassword: (userId) => `${DATABASE_URL}/users/${userId}/change-password`,
        likeArticle: (articleId, userId) => `${DATABASE_URL}/users/${userId}/${articleId}/like`,
        dislikeArticle: (articleId, userId) => `${DATABASE_URL}/users/${userId}/${articleId}/dislike`,
        favorites: (userId) => `${DATABASE_URL}users/${userId}/favoritesListOfUser`,
        getUserList: `${DATABASE_URL}` + '/users',
    },
    auth: {
        registerUser: `${DATABASE_URL}/auth/register`,
        login: `${DATABASE_URL}/auth/login`
    },

}


export default ENDPOINTS;