import { Component, OnInit } from '@angular/core';
import {GithubserviceService} from 'src/app/githubservice.service';
import { User } from '../user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user: User;
  repoDetails = [];
  githubserviceService: GithubserviceService;

  constructor(githubserviceService: GithubserviceService ) { 
    this.githubserviceService = githubserviceService
  }

  ngOnInit(){
    this.user = this.githubserviceService.user;
    this.repoDetails = this.githubserviceService.repoData;
  }

}
