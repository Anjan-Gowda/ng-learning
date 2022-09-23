import { OnInit } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
isloggedIn:boolean=false;
 @Output() SideNavToggle = new EventEmitter();  
 constructor(
  private authService: AuthService) {
   }
ngOnInit(): void {
  console.log(this.authService.getAuthStatus())

}
  openSidenav() {
   this.SideNavToggle.emit();
}

}