import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-success',
  imports: [CommonModule, RouterModule],
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  name = '';
  email = '';
  orderId = '';

  constructor(private route: ActivatedRoute) {
    // get user info from localStorage
    this.name = localStorage.getItem('user-name') || '';
    this.email = localStorage.getItem('user-email') || '';

    // get order ID from query param
    this.route.queryParams.subscribe(params => {
      this.orderId = params['orderId'] || '';
    });
  }
}
