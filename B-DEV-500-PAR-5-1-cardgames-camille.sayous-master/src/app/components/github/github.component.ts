import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../shared/services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: any;
  userRepos:any;
  username: string = 'CamilleSA'
  imageWidth: number = 150;
  imageHeight: number = 200;


  constructor(private githubprofil: GithubService) { }

  findUser () {
    this.githubprofil.UpdateUser(this.username);

    this.githubprofil.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.githubprofil.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    })
  }

  ngOnInit() {
    this.findUser()
  }

}
