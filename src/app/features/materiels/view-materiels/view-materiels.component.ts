import { ApiService } from './../../../core/services/api.service';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ViewMateriels} from "../../../core/models/view-materiels";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-view-materiels',
  templateUrl: './view-materiels.component.html',
  styleUrls: ['./view-materiels.component.scss']
})
export class ViewMaterielsComponent implements OnInit, AfterViewInit {
  displayedColumns: string [] = ['nom', 'prenom', 'dateEmprunt', 'dateRemise'];
  dataSource! : MatTableDataSource<ViewMateriels>;
  viewMateriels!: ViewMateriels[];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;



  constructor( private _api : ApiService) {
    this._api.getAllViewMateriels().subscribe(data =>{
      this.dataSource = new MatTableDataSource([...data,...data,...data]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
