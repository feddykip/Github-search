import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from '../githubservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username: string;
  githubserviceService: GithubserviceService;

  submitUsername(){
    this.githubserviceService.getUserData(this.username);
  }

  constructor(githubserviceService:GithubserviceService) {
    this.githubserviceService=githubserviceService;
   }

  ngOnInit(): void {
  }

}
