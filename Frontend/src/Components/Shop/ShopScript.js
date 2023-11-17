export function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value;
    window.location.href = `/search?query=${searchTerm}`;
  }
  
  export function filterByCategory(category) {
    window.location.href = `/category/${category}`;
  }