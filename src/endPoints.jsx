const BASE_URL = 'http://localhost:8081/';

const ENDPOINTS = {
    articles: {

        allArticles: BASE_URL + 'api/articles/all',
        postArticle: BASE_URL + 'api/articles',
        getArticleById: (articleId) => `${BASE_URL}api/articles/${articleId}`,
        getArticleAttachments: (articleId) => `${BASE_URL}api/articles/${articleId}/attachments`,
        getAllTags: BASE_URL + 'api/articles/getAllTags',
        updateArticle: (articleId) => `${BASE_URL}api/articles/${articleId}`,
        deleteArticle: (articleId) => `${BASE_URL}api/articles/${articleId}`,
        searchArticles: (searchTerm, searchType) => `${BASE_URL}api/articles/search?keyword=${searchTerm}&searchType=${searchType}`,
        

    },
    attachments: {
        uploadAttachment: (articleId) => `${BASE_URL}api/attachments?articleId=${articleId}`,
        deleteAttachment: (attachmentId) => `${BASE_URL}api/attachments/${attachmentId}`
    },
    users: {
        getUserByEmail: (email) => `${BASE_URL}users/userByEmail=${email}`,
        updateUser: (userId) => `${BASE_URL}users/${userId}`,
        getUser: (userId) => `${BASE_URL}users/${userId}`,
        uploadPhoto: (userId) => `${BASE_URL}users/${userId}/photo`,
        changePassword: (userId) => `${BASE_URL}users/${userId}/change-password`,
        likeArticle: (articleId, userId) => `${BASE_URL}users/${userId}/${articleId}/like`,
<<<<<<< HEAD
        favorites: (userId) => `${BASE_URL}users/${userId}/favoritesListOfUser`,
=======
        dislikeArticle: (articleId, userId) => `${BASE_URL}users/${userId}/${articleId}/dislike`,
>>>>>>> 1f8a6ce9ab50c6452502ca536d725917f456bb21
        getUserList: BASE_URL + 'users',
    },
    auth: {
        login: `${BASE_URL}auth/login`
    },

}


export default ENDPOINTS;