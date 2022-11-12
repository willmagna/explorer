import { GithubUser } from "./GithubUser.js";

// classe que vai conter a lógica dos dados
// como os dados serão estruturados

export class Favorites {
  constructor(root){
    this.root = document.querySelector(root);
    this.load();

    //GithubUser.search('maykbrito').then((user) => console.log(user)); //o método acima retorna uma promessa logo, vc precisa receber como uma promessa.


  } 

  load(){
    //localStorage é uma API do browser
    //O JSON.parse pega a string e transforma em objeto
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [];
  }

  save(){
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries));
  }

  async add(userName){
    try{

      const userExists = this.entries.find(entry => entry.login === userName);

      console.log(userExists);

      if(userExists) {
        throw new Error('Usuário já cadastrado');
      }

      const user = await GithubUser.search(userName);

      if(user.login === undefined) {
        throw new Error('Usuário não encontrado');
      }

      this.entries = [user, ...this.entries];
      this.update();
      this.save();
      this.root.querySelector('.search input').value = "";

    } catch(error){
      console.log(error.message);
    }
  }

  delete(user){
    //Higher-order functions (map, find, filter, reduce)
    const filteredEntries = this.entries.filter(entry => entry.login !== user.login);

    this.entries = filteredEntries;
    this.update();
    this.save();
  }

}   

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root){
    super(root);
    this.tbody = this.root.querySelector('table tbody');
    this.update();
    this.onadd();
  }

  onadd(){
    const addButton = this.root.querySelector('.search button');
    /*addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input');
      this.add(value);
    }*/

    addButton.addEventListener('click', () => {
      const { value } = this.root.querySelector('.search input');
      this.add(value);
    });
    
  }


  update() {
    this.removeAllTr();

    this.entries.forEach ((user) => {
      const row = this.createRow()
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
      row.querySelector('.user img').alt = `Imagem de ${user.name}`;
      row.querySelector('.user a').href = `https://github.com/${user.login}`;
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
        <button class="remove">Remover</button>
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