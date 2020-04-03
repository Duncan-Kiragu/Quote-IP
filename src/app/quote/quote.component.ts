import { Component, OnInit } from '@angular/core';
import{ Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes : Quote[]=[
    new Quote(0 , 0, "Spread love everywhere you go. Let no one ever come to you without leaving happier", "Mother Teresa","Duncan Kiragu" ,new Date(2020,2,1)),
    new Quote(0 , 0, "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." ,"Hellen Keller","Duncan Kiragu" ,new Date(2020,2,2) ),
    new Quote(0, 0 , "It is during our darkest moments that we must focus to see the light." ,"Aristotle","Duncan Kiragu" ,new Date(2020,2,4)),
    new Quote(0, 0 , "Do not go where the path may lead, go instead where there is no path and leave a trail." ,"Ralph Waldo Emerson","Duncan Kiragu" ,new Date(2020,2,5)),
    new Quote(0, 0 , "Don't judge each day by the harvest you reap but by the seeds that you plant." ,"Robert Louis","Duncan Kiragu" ,new Date(2020,2,5)),
    new Quote(0, 0 , "Tell me and I forget. Teach me and I remember. Involve me and I learn." ,"Benjamin Franklin","Duncan Kiragu" ,new Date(2020,2,5))
  ]
  toggleDetails(index){
    this.quotes[index].showName = !this.quotes[index].showName
  }

  addUpvote(i){
    this.quotes[i].upvote += 1;
  }
  addDownvote(i){
    this.quotes[i].downvote += 1;
  }
  quoteDelete(index,toDelete){
    if(toDelete){
      let itemDelete=confirm(`Do you want to delete this quote`)
    
      if(itemDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    this.quotes.push(quote)
  }
  
startNumber:number
lastNumber:number
counter:number

highlightUpvote(){

  this.startNumber = 0
  this.lastNumber = 0

   for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
    this.lastNumber = this.quotes[this.counter].upvote;
    if(this.lastNumber> this.startNumber){
      this.startNumber = this.lastNumber
    }
  }
      
  return  this.startNumber
}
  
  constructor() { }

  ngOnInit(): void {
  }

}
