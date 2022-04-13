import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  userList: any = []

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((response) => {
      this.userList = response
    });
  }

}
