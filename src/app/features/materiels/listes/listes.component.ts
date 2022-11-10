import { MaterielService } from './../../../core/services/materiel.service';
import { IMateriels, Action } from './../../../core/models/materiels';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
/** Constants used to fill up our data base. */

const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.scss']
})
export class ListesComponent implements OnInit , AfterViewInit {
  displayedColumns: string[] = ['id', 'type', 'status', 'etat','action'];
  dataSource !: MatTableDataSource<IMateriels>;
  materiels !: IMateriels[];  
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  actions !: Action[];

  constructor( private materiel : MaterielService ) {
    this.materiel.getAllMateriels().subscribe(data=>{
      this.dataSource = new MatTableDataSource([...data,...data,...data]);
      this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.materiel.getListAction().subscribe(data=>this.actions=data);
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
