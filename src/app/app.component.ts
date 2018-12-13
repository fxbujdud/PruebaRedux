import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { IComments, RetrivesAllCommentsAction } from './redux/comment/comment.redux';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public store: Store) {}
  comments: IComments;
  ngOnInit() {
    this.initValues()
  }

  initValues() {
    this.store.dispatch(new RetrivesAllCommentsAction('comments')).pipe(take(1)).subscribe(
      res => console.log(res)      
    );
  }



}
