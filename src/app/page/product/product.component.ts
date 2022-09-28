import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public cardList!: Array<ICard>;
  public selectedCard! : ICard;



  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCardList();
  }

  getCardList(): any {
   //debugger;
    this.cardService.getCardList().subscribe(response => {
      console.log(response);
      if (response != null)
        this.cardList = response;
      console.log(this.cardList);
    });
  }

  onRowSelect(event: any) {
    //debugger;
    this.selectedCard = event.data;
    console.log('card selected is ' + this.selectedCard);
}

onRowUnselect(event:any) {
    //this.messageService.add({severity:'info', summary:'Product Unselected',  detail: event.data.name});
}

}
