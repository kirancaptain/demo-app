import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-prediction-table',
  templateUrl: './prediction-table.component.html',
  styleUrls: ['./prediction-table.component.scss']
})
export class PredictionTableComponent implements OnInit, OnChanges {


  displayedColumns: string[] = ['id','rul', 'fallIn'];
  displayedColumns1: string[] = ['id', 'rul'];
  dataSource: any;
  dataSource1: any;
  percent:any;
  max = 100;
  
  // dataSource1: =[{
  //   'id':'6',
  //   'rul':''
  // }]
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() tableData: Array<object>;
  @Input() topFive: Array<object>;
  @Input() percentage: Number;
  constructor() {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnChanges() {
    // if (this.tableData != undefined) {
    //   if (this.tableData.length != 0) {
    console.log(this.tableData);
    this.dataSource = this.tableData;
    this.dataSource1 = this.topFive;
    console.log(this.percentage);
    this.percent = this.percentage;
    //   }
    // }
  }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }


// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }


// const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
//   'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
// const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
//   'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
//   'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];