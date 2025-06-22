fetch("/manifesto/sovereign-coder-manifesto.md")
  .then(res => res.text())
  .then(markdown => {
    document.getElementById("manifesto").innerHTML = marked.parse(markdown);
  });
