import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Repo } from './repo';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {

  user: User;
  repo: Repo;
  repoData = [];
  newUserData: any= [];
  env=environment;

  constructor(private http: HttpClient) {
    this.user=new User("", 0, "", "", new Date());
    this.repo= new Repo("", "", new Date(), "", "");
   }
   public getUserData(username: string) {
    interface ApiResponse {
      bio: string,
      public_repos: number,
      login: string,
      avatar_url: string,
      created_at: Date
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + username).toPromise().then(response => {
        this.user.bio = response.bio;
        this.user.public_repos = response.public_repos;
        this.user.avatar_url = response.avatar_url;
        this.user.created_at = response.created_at;
        this.user.login = response.login;

        resolve()
      },
        error => {
          reject(error)

        })
        this.http.get<any>('https://api.github.com/users/' + username + "/repos").toPromise().then(response => {
          for (let i = 0; i < response.length; i++) {
            this.newUserData= new Repo(
              response[i].name, 
              response[i].description, 
              response[i].updated_at, 
              response[i].clone_url, 
              response[i].language
              )
            this.repoData.push(this.newUserData);
          }
          resolve()
        },
          error => {
          reject(error)
  })
})
return promise;
   }
}
