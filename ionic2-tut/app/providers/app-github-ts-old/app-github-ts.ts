import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppGithubTs provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GitHubService {

  constructor(private http: Http) {

  }

  getRepos(username){
    var reposUrl = 'https://api.github.com/users/:' + username + '/repos';
    let repos = this.http.get(reposUrl);
    return repos;
  }

}

