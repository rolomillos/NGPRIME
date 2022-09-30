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
                label: 'Main',
                items: [
                    { label: 'Dashboard' },
                    { label: 'Message Center' },
                    { label: 'Products' },
                    { label: 'Promotions' },
                    { label: 'Orders' },
                    { label: 'Ratings and Reviews' },
                    { label: 'Advertising' },
                    { label: 'Reports' }
                ]
            },
            {
                label: 'Settings',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            },
            {
                label: 'Accounting',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            },
            {
                label: 'Shipping',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            },
            {
                label: 'Contact Apitap',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            },
            {
                label: 'Help Center',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            },
            {
                label: 'Restaurant Manager',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            },
            {
                label: 'Calendar',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            },
            {
                label: 'Log Out',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
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
