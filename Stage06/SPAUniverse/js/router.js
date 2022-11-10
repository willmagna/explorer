export class Router {

  routes = {};

  add(routeName, page){
    this.routes[routeName] = page;
    /**
     * um console.log de como é atribuido esses valores ao routes = {}
      404: "/pages/404.html"
      /: "/pages/home.html"
      /explore: "/pages/explore.html"
      /universe: "/pages/universe.html"
    */
  }
  
  route(event){
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    
    this.handle();
    
  }
  
  handle(){
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
     
  }


}