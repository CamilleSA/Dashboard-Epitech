import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../shared/services/github.service';

@Component({
  selector: 'app-repogithub',
  templateUrl: './repogithub.component.html',
  styleUrls: ['./repogithub.component.css']
})
export class RepogithubComponent implements OnInit {
  repoitems: any[];
  repoName:string= "abc";

  constructor(private profileService: GithubService) { }

  findRepo () {
    this.profileService.UpdateRepo(this.repoName);
    this.profileService.searchrepos().subscribe(repo => {
      // console.log(repo["items"]);
      this.repoitems = repo["items"];
      console.log(this.repoitems);
    })
  }

  ngOnInit() {
    this.findRepo()
  }

}
