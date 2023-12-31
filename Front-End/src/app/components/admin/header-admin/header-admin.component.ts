import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css'],
})
export class HeaderAdminComponent {
  tabControl: boolean = false;
  constructor(private router: Router) {}
  showTabControl() {
    this.tabControl = !this.tabControl;
  }
  logoutAccount() {
    localStorage.setItem('user', '');
    setTimeout(() => {
      // this.router.navigate(['/auth']);
      this.router.navigateByUrl('/auth');
      // window.location.href = 'http://localhost:4200/auth';
    }, 1000);
  }
}
