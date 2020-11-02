class Router {
  constructor(routes) {
    this.routes = router;
    this._loadInitialRoute();
  }
};
//para que detecte en que pag estamos/template
_loadInitialRoute() {//Separar todo por / 
  const pathNameSplit = window.location.pathname.split('/');
  const pathSegs = pathNameSplit.length > 1 ? pathNameSplit(1) : '';
  
  //guarda la ruta actual, donde estamos
  this.loadRoute(...pathSegs)
}