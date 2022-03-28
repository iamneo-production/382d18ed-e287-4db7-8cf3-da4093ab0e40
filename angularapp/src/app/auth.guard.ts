
/*import { AuthService } from './auth.service';


import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.isLoggedIn()) {
      //this.router.navigate(['/login']);
      return true;
    }
    this.router.navigate(['/popularplans'])
    //return this.auth.isLoggedIn();
      return false;
  
    }



    /*canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.auth.isLoggedIn()) {
        this.currentrole = this.auth.GetRolebyToken(this.service.GetToken());
        this.auth.HaveAccess(this.currentrole, route.url[0].path).subscribe(result => {
          this.respdata = result;
          if (this.respdata.result == 'pass') {
            return true;
          } else {
            this.router.navigate(['']);
            alert('unauthorized access');
            return false;
          }
        });
  
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }*/
  

}

}*/

