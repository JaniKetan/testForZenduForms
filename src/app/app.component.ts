import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Zenduforms';
  menuList = [
    { name: 'Forms', icon: 'form', routerLink: '/forms' },
    { name: 'Customers', icon: 'customers', routerLink: '/customers' },
    { name: 'Submissions', icon: 'submission', routerLink: '/submissions' },
    { name: 'History', icon: 'history', routerLink: '/history' },
    { name: 'Report', icon: 'report', routerLink: '/report' },
    { name: 'Workflow', icon: 'report', routerLink: '/workflow' },
  ];
}
