const blogSection = document.querySelector('.blogs-section');

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
})

const createBlog = (blog) => {
    let data = blog.data();

    // Ensure that the URL uses HTTPS
    let secureBannerImageURL = data.bannerImage.startsWith('http://localhost:3000/')
        ? data.bannerImage.replace(/^http:\/\//i, 'https://')
        : data.bannerImage;

    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${secureBannerImageURL}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
    </div>
    `;
}

