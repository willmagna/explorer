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

// classe que vai conter a lógica dos dados
// como os dados serão estruturados

export class Favorites {
  constructor(root){
    this.root = document.querySelector(root);
    this.load();

    GithubUser.search('maykbrito').then((user) => console.log(user)); //o método acima retorna uma promessa logo, vc precisa receber como uma promessa.


  } 

  load(){
    //localStorage é uma API do browser
    //O JSON.parse pega a string e transforma em objeto
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [];
  }

  delete(user){
    //Higher-order functions (map, find, filter, reduce)
    const filteredEntries = this.entries.filter(entry => entry.login !== user.login);

    this.entries = filteredEntries;
    this.update();
  }

}   

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root){
    super(root);
    this.tbody = this.root.querySelector('table tbody');
    this.update();
  }


  update() {
    this.removeAllTr();

    this.entries.forEach ((user) => {
      const row = this.createRow()
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
      row.querySelector('.user img').alt = `Imagem de ${user.name}`;
      row.querySelector('.user p').textContent = user.name;
      row.querySelector('.user span').textContent = user.login;
      row.querySelector('.repositories').textContent = user.public_repos;
      row.querySelector('.followers').textContent = user.followers;
      
      row.querySelector('.remove').addEventListener('click', () => {
        
        const isConfirmed = confirm('Tem certeza que deseja deletar essa linha?');

        if(isConfirmed){
          this.delete(user);
        }

      });
      

      this.tbody.append(row);
    })

  }

  createRow(){

    const tr = document.createElement('tr'); //O <tr> precisa ser criado com a DOM. Não pode ser criado em texto;

    tr.innerHTML = `
      <td class="user">
        <img src="https://avatars.githubusercontent.com/u/18670313?v=4" alt="">
        <a href="https://github.com/willmagna/">
          <p>William Magnabosco</p>
          <span>will.magna</span>
        </a>
      </td>
      <td class="repositories">
        12
      </td>
      <td class="followers">
        3
      </td>
      <td>
        <button class="remove">&times;</button>
      </td>
    ` 
    return tr;

  }

  removeAllTr(){
    
    this.tbody.querySelectorAll('tr')
    .forEach((tr) => {
      tr.remove();
    });
  }


}