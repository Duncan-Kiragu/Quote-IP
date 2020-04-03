export class Quote {
    showName : boolean
    constructor(public upvote : number, public downvote : number,public description: string , public  name: string ,public author : string ,public uploadDate:Date){
      this.showName=false;
    }
  }
  /* Exporting classes */