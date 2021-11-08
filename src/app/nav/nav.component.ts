import { Router } from '@angular/router';
import { SecurityService } from './../services/security.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private securityService:SecurityService, private router:Router) {}

  logedIn(){
    return this.securityService.logedIn();
  }

  onLogout(){
       this.securityService.logout();
       this.router.navigate(['login']);
  }

}
