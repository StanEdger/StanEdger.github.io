// Fetch file list from JSON
fetch('files.json')
  .then(response => response.json())
  .then(data => {
    const ul = document.getElementById('file-ul');
    data.forEach(file => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = file.link;
      a.textContent = file.name;
      a.target = "_blank"; // open in new tab
      a.style.color = "#e6e6e6";
      a.style.textDecoration = "none";
      li.appendChild(a);
      ul.appendChild(li);
    });
  })
  .catch(err => console.error("Error loading files:", err));