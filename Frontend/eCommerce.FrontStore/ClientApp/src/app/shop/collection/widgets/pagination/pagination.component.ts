import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/api-clients/models/product.model";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() paginate: any = {};

  @Output() setPage: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    console.log("paginate", this.paginate);
  }

  pageSet(page: number) {
    this.setPage.emit(page); // Set Page Number
  }
}