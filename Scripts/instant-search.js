const blogList = document.getElementById('blogList');
const searchBar = document.getElementById('searchBar')
let blogsAll = [];

searchBar.addEventListener('keyup', (e) => {
    loadBlogs();
    const searchString = e.target.value.toLowerCase()

    if(searchString == '') {
        noBlogs();
    }

    const filteredBlogs = blogsAll.filter ( blogs => {
        return blogs.BlogType.toLowerCase().includes(searchString);

    });
    displayBlogs(filteredBlogs);
})

const blogs = { "blogs" :
 [
    { "BlogID": 1, "BlogType": "Drum", "BlogRank": 1, "href": "drum-blogs.html"},   
    {"BlogID": 2, "BlogType": "Fitness", "BlogRank": 2, "href": "index.html"},
    {"BlogID": 3,"BlogType": "Lifestyle","BlogRank": 3, "href": "index.html"},
    {"BlogID": 4,"BlogType": "Finance", "BlogRank": 4, "href": "index.html"},
    {"BlogID": 5,"BlogType": "Business", "BlogRank": 5, "href": "index.html"},
    {"BlogID": 6,"BlogType": "Technology", "BlogRank": 6, "href": "index.html"}
]}

const loadBlogs = async () => {
    blogsAll = blogs.blogs
    displayBlogs(blogsAll);
};

const noBlogs = async () => {
    blogsAll = []
    displayBlogs(blogsAll);
};

const displayBlogs = (blogs) => {
    const htmlString = blogs
        .map((blogs) => {
            return `
            <a href='${blogs.href}' class="instant-search__result">
                <div class="instant-search__title">${blogs.BlogType} Blogs</div>

                <p class="instant-search__rank"> Rank #${blogs.BlogRank}</p>
            </a>
        `;
        })
        .join('');
    blogList.innerHTML = htmlString;
};
