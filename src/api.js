export async function getPosts() {
    return await posts;
}

const posts = new Promise((resolve, reject) => {
    setTimeout((resolve) => {
        const data = [{
            id: 1,
            photo: 'http://placekitten.com/150/150',
            title: 'Receta 1',
            author: 'By Francisco',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.',
            date: '2 days, 8 hours',
            commentsCount: 2
        },
            {
                id: 2,
                photo: 'http://placekitten.com/150/150',
                title: 'Receta 1',
                author: 'By Francisco',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.',
                date: '2 days, 8 hours',
                commentsCount: 2
            }];

        resolve(data);
    }, 5000, resolve)
});

export async function getPost(postId) {
    return await post(postId);
}

const post = (postId) => new Promise((resolve, reject) => {
    setTimeout((resolve, reject, postId) => {
        const data = [{
            id: 1,
            photo: 'http://placekitten.com/150/150',
            title: 'Receta 1',
            author: 'By Francisco',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.',
            date: '2 days, 8 hours',
            commentsCount: 2
        },
            {
                id: 2,
                photo: 'http://placekitten.com/150/150',
                title: 'Receta 1',
                author: 'By Francisco',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.',
                date: '2 days, 8 hours',
                commentsCount: 2
            }];

        let respPost = null;

        data.forEach((post) => {
            if (post.id === postId)
                respPost = post;
        });

        !!respPost ? resolve(respPost) : reject('not found');
    }, 5000, resolve, reject, postId)
});


export async function getComments() {
    return await comments;
}

const comments = new Promise((resolve, reject) => {
    setTimeout((resolve) => {
        const data = [
            {
                id: 1,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg',
                text: 'MARCO',
                author: 'Great snippet! Thanks for sharing.',
            },
            {
                id: 1,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg',
                text: 'MARCO',
                author: 'Great snippet! Thanks for sharing.',
            },
            {
                id: 1,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg',
                text: 'MARCO',
                author: 'Great snippet! Thanks for sharing.',
            },
        ];

        resolve(data);
    }, 5000, resolve)
});
