import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

import { Article } from '../article/article';
import { ContentfulService } from '../../services/contentful.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  standalone: true,
  imports: [ AsyncPipe, NgIf ]
})
export class EntryComponent implements OnInit {
  article!: Article;

  constructor(
    private contentfulService: ContentfulService,
  ) {}

  get slug() {
    const arr = (window.location.href).split('/');
    return '/' + arr.splice(3, arr.length).join('/');
  }

  getJsonObject(e:any) {
    return JSON.stringify(e, undefined, 2);
  }

  ngOnInit() {
    this.contentfulService.getArticle('2xPhhGJ0zMThMLCRHNuGwV').subscribe((article) => {
      this.article = article;
    });
  }
}
