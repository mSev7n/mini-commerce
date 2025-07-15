import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-success',
  imports: [CommonModule, RouterModule],
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'] // fixed typo (styleUrl -> styleUrls)
})
export class SuccessComponent implements OnInit {
  orderId: string = '';

  ngOnInit(): void {
    // Generate a simple mock order ID (e.g., MC-000123)
    const random = Math.floor(Math.random() * 1000000);
    this.orderId = `MC-${random.toString().padStart(6, '0')}`;
  }
}
