import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  id = "";
  user: any = {};

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('id')
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${this.id}`).subscribe((response) => {
      this.user = response
    });
    console.log(this.user)
  }

}
