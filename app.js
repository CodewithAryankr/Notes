const fileList = document.getElementById('fileList');
const searchInput = document.getElementById('search');

// Filter the list based on search input
searchInput.addEventListener('input', event => {
  const searchTerm = event.target.value.toLowerCase();
  const fileBoxes = fileList.getElementsByClassName('file-box');

  for (let i = 0; i < fileBoxes.length; i++) {
    const fileTitle = fileBoxes[i].getElementsByClassName('file-title')[0].textContent.toLowerCase();
    if (fileTitle.includes(searchTerm)) {
      fileBoxes[i].style.display = 'flex';
    } else {
      fileBoxes[i].style.display = 'none';
    }
  }
});