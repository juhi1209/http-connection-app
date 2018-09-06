import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
followers: any[];
  constructor(private service: FollowersService) {
   }

  ngOnInit() {
  this.service.getAll()
    .subscribe( followers => this.followers = followers);
  }

}
