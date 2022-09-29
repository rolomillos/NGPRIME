import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/service/card.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  visibleSidebar1:any;

  items: MenuItem[] = [];

  public cardList!: Array<ICard>;
  public selectedCard! : ICard;


  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCardList();

    this.items = [
      {
          label: 'Main',
          items: [
              {label: 'Dashboard'},
              {label: 'Message Center'},
              {label: 'Products'},
              {label: 'Promotions'},
              {label: 'Orders'},
              {label: 'Ratings and Reviews'},
              {label: 'Advertising'},
              {label: 'Reports'}
          ]
      },
      {
          label: 'Settings',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
          label: 'Accounting',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
          label: 'Shipping',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
          label: 'Contact Apitap',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
          label: 'Help Center',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
          label: 'Restaurant Manager',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
          label: 'Calendar',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
          label: 'Log Out',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }


  ];
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
