import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookId: number | undefined;
  autherId: number | undefined;
  public name: string = '';
  public surname: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Handling route params
    this.route.params.subscribe((params) => {
      this.bookId = +params['id'];  // + converts string to number
      this.autherId = params['autherId'] ? +params['autherId'] : undefined;  // Optional parameter

      console.log('Book ID:', this.bookId);
      console.log('Author ID:', this.autherId);
      console.log(this.route);
    });

    // Handling query params
    this.route.queryParams.subscribe((queryparam) => {
      this.name = queryparam.name;
      this.surname = queryparam.surname;
      console.log(queryparam);
    });
  }
}
