import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public name: string = '';
  public surname: string = '';  // Make sure to include surname
  public email: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Subscribe to query parameters and log them
    this.route.queryParams.subscribe((queryparam) => {
      this.name = queryparam['name'];
      this.surname = queryparam['surname']; // Capture surname from query params
      this.email = queryparam['email'];
      console.log('Query Params:', queryparam);
    });
  }

  // Method for signup
  signup(): void {
    this.router.navigate(['/auth/sign-up']);
  }

  // Method for navigating to book details
  bookdetails(id: number, autherId: number): void {
    this.router.navigate(['public/book-details', id, 'auther', autherId], {
      queryParams: { name: 'yogesh', surname: 'rathod' }, // Add surname in queryParams
    });
  }
}
