  import { Component, OnInit ,Input, Output ,EventEmitter} from '@angular/core';
  import{ Quote } from '../quote'

  @Component({
    selector: 'app-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.css']
  })
  export class NameComponent implements OnInit {
    
    @Input () quote : Quote;
    @Output() toDelete = new EventEmitter <boolean>()

    deleteQuote(remove : boolean){
      this.toDelete.emit(remove);
    }

    @Output() isUpvote = new EventEmitter <boolean>()

      upVote(like : boolean){
        this.isUpvote.emit(like);
      }
    @Output () isDownvote = new EventEmitter <boolean>()

      downVote(dislike : boolean){
        this.isDownvote.emit(dislike);
      }

    constructor() { }

    ngOnInit(): void {
    }

  }
