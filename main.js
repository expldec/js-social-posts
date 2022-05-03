const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Repellat porro ut fugiat repudiandae? Ea debitis cumque, quibusdam dolores voluptate mollitia.",
        "media": "https://unsplash.it/600/300?image=172",
        "author": {
            "name": "Johnny Ubriacone"
        },
        "likes": 48,
        "created": "2021-06-24"
    },
    {
        "id": 3,
        "content": "Cum neque, unde reiciendis exercitationem rem officiis architecto ipsum explicabo quasi dignissimos?",
        "media": "https://unsplash.it/600/300?image=173",
        "author": {
            "name": "Nick Ficcanaso",
            "image": "https://unsplash.it/300/300?image=17"
        },
        "likes": 12,
        "created": "2021-06-23"
    },
    {
        "id": 4,
        "content": "Impedit ipsam rerum iste aut provident eaque itaque eligendi corporis maxime ullam alias, molestias fuga laboriosam laborum iure expedita ducimus accusantium doloremque?",
        "media": "https://unsplash.it/600/300?image=174",
        "author": {
            "name": "Jack Buffone",
            "image": "https://unsplash.it/300/300?image=18"
        },
        "likes": 0,
        "created": "2021-06-22"
    },
    {
        "id": 5,
        "content": "Doloremque voluptatum et maxime aliquid quibusdam natus libero, delectus beatae minus ratione sed vero iste alias, voluptatem soluta exercitationem? Fugit, ad ex?",
        "media": "https://unsplash.it/600/300?image=175",
        "author": {
            "name": "Mary Svampita",
            "image": "https://unsplash.it/300/300?image=19"
        },
        "likes": 150,
        "created": "2021-06-21"
    },
    
];


const postContainer = document.getElementById('container');
const likedPosts = [];
posts.forEach(post => {
    postContainer.append(buildPost(post));
})

function buildPost(object) {
    const post = document.createElement('div');
    post.classList.add('post');

    const postHeader = document.createElement('div');
    postHeader.classList.add('post__header');
    postHeader.innerHTML = `<div class="post-meta">                    
                                <div class="post-meta__icon">
                                    <img class="profile-pic" src="${object.author.image}" alt="${object.author.name}">                    
                                </div>
                                <div class="post-meta__data">
                                    <div class="post-meta__author">${object.author.name}</div>
                                    <div class="post-meta__time">4 mesi fa</div>
                                </div>                    
                            </div>`

    const postText = document.createElement('div');
    postText.classList.add('post__text');
    postText.textContent = object.content;

    const postImage = document.createElement('div');
    postImage.classList.add('post__image');
    postImage.innerHTML = `<img src="${object.media}" alt="">`

    const postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');
    postFooter.innerHTML = `<div class="likes js-likes">
                                <div class="likes__cta">
                                    <a class="like-button  js-like-button" href="#" data-postid="${object.id}">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b id="like-counter-${object.id}" class="js-likes-counter">${object.likes}</b> persone
                                </div>
                            </div>`;
    postFooter.querySelector('.like-button').addEventListener('click', clickedLike)

    post.append(postHeader, postText, postImage, postFooter)

    console.log(post);
    return post;
}


function clickedLike(event) {
    event.preventDefault();
    console.log(this.dataset.postid);
    thisPostID = this.dataset.postid;
    this.classList.add('like-button--liked');
    if (!likedPosts.includes(thisPostID)) {
        likedPosts.push(thisPostID);
        const thisLikeCounter = document.getElementById(`like-counter-${thisPostID}`);
        thisLikeCounter.textContent = parseInt(thisLikeCounter.textContent) + 1;
    }
    return false;
}