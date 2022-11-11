export class GithubUser {
  //QUando vc usa o static, vc nao precisa usar o construtor.
  static search(username){

    const endpoint = `https://api.github.com/users/${username}`;

    return fetch(endpoint)
    .then( data => data.json() )
    .then( data => ({
      login: data.login,
      name: data.name,
      public_repos: data.public_repos,
      followers: data.followers,
    }) );

  }
}