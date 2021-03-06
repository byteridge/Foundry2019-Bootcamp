import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  speakers: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any>('http://localhost:8281/getUsers').subscribe((result) => {
      this.speakers = result;
    });
  }
}
