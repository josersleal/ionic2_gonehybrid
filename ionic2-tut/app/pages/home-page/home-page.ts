import {Component} from '@angular/core';
import {Page} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {ScientificFactsPage} from '../scientific-facts-page/scientific-facts-page';
import {GitHubService} from '../../providers/app-github-ts/app-github-ts.ts';


@Page({
  templateUrl: 'build/pages/home-page/home-page.html',
  providers:[GitHubService]
})

export class HomePage {
  public foundRepos;
  public username = "josersleal";

  constructor(private _navController: NavController, private gitHub: GitHubService) {
  }

getRepos(){
  this.gitHub.getRepos(this.username).subscribe(
    data=>{
      this.foundRepos=data.json();
    },
    err => console.error(err),
    () => console.log('get repos completed')
  );
}

  goToFactsPage(){
    this._navController.push(ScientificFactsPage);
  }
}
