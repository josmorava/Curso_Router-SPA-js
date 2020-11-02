class Router {
  constructor(routes) {
    this.routes = router;
    this._loadInitialRoute();
  }
  //apuntador a los elementos de inicio
  _matchUrlToRoute(urlSegs){
    const _matchUrlToRoute = this.routes.find(route => {
      //Seperar lo que está después del path o / para sacar lo que está despues del /
      const routePathSegs = route.path.split('/').slice(1)

      if (routePathSegs.length !== urlSegs.length){
        return false;
      }

      return routePathSegs
        .every((routePathSeg, i) => routePathSegs === urlSegs[i]);
    });
    return matchedRoute;
  }


  //para que detecte en que pag estamos/template
  _loadInitialRoute() {//Separar todo por / 
    const pathNameSplit = window.location.pathname.split('/');
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit(1) : '';
    
    //guarda la ruta actual, donde estamos
    this.loadRoute(...pathSegs);
  };
};