import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/service/card.service';
import { LazyLoadEvent, MenuItem } from 'primeng/api';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    visibleSidebar1: any;

    items: MenuItem[] = [];

    public cardList!: Array<ICard>;
    public selectedCard!: ICard;
    public page!: number;
    public userId!: number;
    public size!: number;
    public totalRecords!:number;
    public loading!:boolean;


    constructor(private cardService: CardService) {
        this.page = 0;
        this.userId = 197;
        this.size = 10;
        this.loading=false;
    }

    next() {
        this.page = this.page + this.size;
    }

    prev() {
        this.page = this.page - this.size;
    }

    reset() {
        this.page = 0;
    }

    isLastPage(): boolean {
        return this.cardList ? this.page === (this.cardList.length - this.size): true;
    }

    isFirstPage(): boolean {
        return this.cardList ? this.page===0: true;
    }

    setPage(event:any) : void{
        this.page = event.first/this.size;
    }

    loadData(event: LazyLoadEvent) {
        this.loading = true;
        debugger;
        this.size = event.rows!;
        //console.log(event);
        this.cardService.getCardList(this.userId, this.page,this.size).subscribe(response => {
            //console.log(response);
            if (response != null)
                this.cardList = response.cards;
                this.totalRecords = response.totalItems;
            //console.log('items: ' + response.totalItems);
        });

    }

    ngOnInit(): void {
        //this.getCardList();

        this.items = [
            {
                label: 'Dashboard'
            },
            {
                label: 'Main',
                items: [
                    { label: 'Products' },
                    { label: 'Promotions' },
                    { label: 'Advertising' }
                ]
            },
            
            {
                label: 'Messages & Reviews',
                items: [
                    { label: 'Message Center' },
                    { label: 'Ratings & Reviews' }
                ]
            },
            {
                label: 'Business Categories'
            },
            {
                label: 'ApiTap',
                items: [
                    { label: 'Apitap StoreFront' },
                    { label: 'Store Images' }
                ]
            },
            {
                label: 'Restaurant Manager'
            },
            {
                label: 'Suscriptions',
                items: [
                    { label: 'Suscriptions' },
                    { label: 'Shopping cart' }
                ]
            },
            {
                label: 'Locations'
            },
            {
                label: 'Shipping',
                items: [
                    { label: 'Shipping Options' },
                    { label: 'Shippo' }
                ]
            },
            {
                label: 'Accounting',
                items: [
                    { label: 'Payment Methods' },
                    { label: 'Orders' }
                ]
            },
            {
                label: 'Settings',
                items: [
                    { label: 'Profile' },
                    { label: ' Manage Users' },
                    { label: ' Security Questions' },
                    { label: ' Document Manager' },
                    { label: ' Calendar' },
                    { label: ' Missing Info' }

                ]
            },
            {
                label: 'Reports'
            },
            {
                label: 'Contact Apitap'
            },
            {
                label: 'Help Center'
            },
            {
                label: 'Log Out'
            }


        ];
    }

    getCardList(): any {
        //debugger;
        this.cardService.getCardList(this.userId, this.page,this.size).subscribe(response => {
            //console.log(response);
            if (response != null){
                this.cardList = response.cards;
                this.totalRecords = response.totalItems;
            //console.log('items: ' + response.totalItems);
            }
        });
    }

    onRowSelect(event: any) {
        //debugger;
        this.selectedCard = event.data;
        console.log('card selected is ' + this.selectedCard);
    }

    onRowUnselect(event: any) {
        //this.messageService.add({severity:'info', summary:'Product Unselected',  detail: event.data.name});
    }
    

}
