// your code here
function retrieveGithubUsername(){
  return document.getElementById('username').value
}

function getRepositories() {
  const usernameInput = retrieveGithubUsername()
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories);
  req.open('GET', `https://api.github.com/users/${usernameInput}/repos`);
  req.send();
}