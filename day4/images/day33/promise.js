// Fetch posts from the API and render them


 const url = "https://jsonplaceholder.typicode.com/posts?_limit=50";
    const container = document.querySelector("[data-container]");

    const fetchPosts = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok: " + response.status);
            }
            const posts = await response.json();
            Posts(posts);
        } catch (error) {
            console.error("Fetch error:", error);
            container.innerHTML = "<p>Failed to load posts.</p>";
        }
    };

    function Posts(posts) {
        const limitedPosts = posts.slice(0, 50);
        container.innerHTML = limitedPosts.map(post => `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `).join('');
    }

    fetchPosts();
  

const button = document.getElementById('getUserBtn');
const userContainer = document.getElementById('userContainer');

button.addEventListener('click', async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=50');
        const data = await response.json();
        const user = data.results[0];

        userContainer.innerHTML = `
          <div class="user-card">
            <img src="${user.picture.medium}" alt="User Picture">
            <div>
              <h3>${user.name.first} ${user.name.last}</h3>
              <p>Email: ${user.email}</p>
              <p>Location: ${user.location.city}, ${user.location.country}</p>
            </div>
          </div>
        `;
        userContainer.style.display = 'block';  
    } catch (error) {
        userContainer.innerHTML = `<p>Error fetching user data. Please try again.</p>`;
        console.error('Fetch error:', error);
    }
    setTimeout(() => {
        fetchPosts.innerHTML = '';
    }, 7000);
    setTimeout(() => {
        container.innerHTML = '';
    }, 67000);
});

fetchPosts();