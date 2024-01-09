import { AfterViewInit, Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'shared-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements AfterViewInit{
  displayedColumns: string[] = ['position', 'bandera','nombre','capital', 'poblacion', 'symbol'];

  
  @Input() data!: T[] | undefined;
  dataSource = new MatTableDataSource<T>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.dataSource.data = this.data;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
