document.getElementById('referenceForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const year = document.getElementById('year').value;
  const publisher = document.getElementById('publisher').value;

  const reference = `${author}. (${year}). ${title}. ${publisher}.`;

  document.getElementById('referenceOutput').innerText = reference;
});
