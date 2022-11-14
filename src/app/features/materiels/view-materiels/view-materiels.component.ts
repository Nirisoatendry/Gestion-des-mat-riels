import { ApiService } from './../../../core/services/api.service';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ViewMateriels} from "../../../core/models/view-materiels";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-materiels',
  templateUrl: './view-materiels.component.html',
  styleUrls: ['./view-materiels.component.scss']
})
export class ViewMaterielsComponent implements OnInit, AfterViewInit {
  displayedColumns: string [] = ['nom', 'prenom', 'date_emprunt', 'date_remise'];
  dataSource! : MatTableDataSource<ViewMateriels>;
  viewMateriels!: ViewMateriels[];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  id: any;
  constructor( private _api : ApiService,private _router : ActivatedRoute) {
    this.id = this._router.snapshot.params;
  }

  ngOnInit(): void {
    // this._router.snapshot(id=>console.log('Hello ', id))
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    console.log(this.id);
    this._api.getAllViewMateriels(this.id).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
