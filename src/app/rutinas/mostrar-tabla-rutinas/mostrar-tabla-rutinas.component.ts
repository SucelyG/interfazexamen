import { Router } from '@angular/router';
import { rutinasService } from '../services/rutinas.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarTablaRutinasDataSource, rutinas } from './mostrar-tabla-rutinas-datasource';

@Component({
  selector: 'app-mostrar-tabla-rutinas',
  templateUrl: './mostrar-tabla-rutinas.component.html',
  styleUrls: ['./mostrar-tabla-rutinas.component.css']
})
export class MostrarTablaRutinasComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<rutinas>;
  dataSource!: MostrarTablaRutinasDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'rutinas','lista_rutina','Acciones'];

  constructor(private rutinasService:rutinasService, private router:Router) {
    this.listarrutinas();
  }

  ngOnInit(): void {
    this.listarrutinas();
  }

  listarrutinas(){
    this.dataSource = new MostrarTablaRutinasDataSource();
    this.rutinasService.getrutinas().subscribe(
      res=> this.dataSource.data = res,
      err => console.log(err)
    );
  }

  eliminarrutinas(id:string){
    this.rutinasService.deleterutinas(id);
    this.listarrutinas();
    setTimeout(location.reload.bind(location), 500);
  }


  modificarrutinas(id:string){
    this.router.navigate(['/editar-rutinas/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
