// Auto-fetch and display GitHub repositories
async function loadRepositories() {
    const username = 'POWDER-RANGER';
    const container = document.getElementById('dynamic-repos');
    
    if (!container) return;
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        const repos = await response.json();
        
        // Filter out profile README and github.io repo
        const filteredRepos = repos.filter(repo => 
            repo.name !== username && 
            repo.name !== `${username}.github.io` &&
            !repo.fork
        );
        
        // Sort by stars, then last updated
        filteredRepos.sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) {
                return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at) - new Date(a.updated_at);
        });
        
        // Display top 12 or all if less
        const displayRepos = filteredRepos.slice(0, 12);
        
        container.innerHTML = displayRepos.map(repo => `
            <div class="repo-card">
                <h4><a href="${repo.html_url}" target="_blank">${repo.name}</a></h4>
                <p>${repo.description || 'No description available'}</p>
                <div class="repo-meta">
                    ${repo.language ? `<span class="badge">${repo.language}</span>` : ''}
                    <span class="repo-stats">
                        ⭐ ${repo.stargazers_count} 
                        🔀 ${repo.forks_count}
                    </span>
                </div>
                <div class="repo-updated">Updated ${new Date(repo.updated_at).toLocaleDateString()}</div>
            </div>
        `).join('');
        
    } catch (error) {
        container.innerHTML = '<p>Unable to load repositories. <a href="https://github.com/POWDER-RANGER?tab=repositories" target="_blank">View on GitHub</a></p>';
    }
}

// Load when page is ready
document.addEventListener('DOMContentLoaded', loadRepositories);