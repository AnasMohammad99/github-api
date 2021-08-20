const btnRepos = document.getElementById("btnRepos");
const divResults = document.getElementById("divResults");
const getRepos = async () => {
  clear();
  const url =
    "https://api.github.com/search/repositories?q=created:>2021-07-15&sort=stars&order=desc";
  const response = await fetch(url);
  const result = await response.json();
  result.items.forEach((i) => {
    const anchor = document.createElement("a");
    console.log(i);
    anchor.href = i.html_url;
    anchor.textContent = i.full_name;
    divResults.appendChild(anchor);
    divResults.appendChild(document.createElement("br"));
  });
};
btnRepos.addEventListener("click", getRepos);
clear = () => {
  while (divResults.firstChild) {
    divResults.removeChild(divResults.firstChild);
  }
};
