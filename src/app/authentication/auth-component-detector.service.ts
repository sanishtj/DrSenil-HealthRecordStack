import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthComponentDetectorService implements CanActivate {

  constructor(public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(state);
    console.log(route);
    // if (state.url.indexOf('/login')) {
    //  this.router.navigate(['login']);
    // } else {
    // this.router.navigate(['forgotpassword']);
    // }
    return true;
  }

  // constructor(public router: Router, public route: ActivatedRoute) {}

  // canActivate(): boolean {
  //   console.log(RouterStateSnapshot);

  //   debugger;
  //   // if (this.route.url.indexOf('/login') === 0) {
  //   // this.router.navigate(['login']);
  //   // } else {
  //   // this.router.navigate(['forgotpassword']);
  //   // }
  //   return true;
  // }
}
