import { Router } from '@angular/router';
import { entrenadorService } from '../services/entrenador.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarentrenadorDataSource, entrenador } from './mostrar-entrenador-datasource';

@Component({
  selector: 'app-mostrar-entrenador',
  templateUrl: './mostrar-entrenador.component.html',
  styleUrls: ['./mostrar-entrenador.component.css']
})
export class MostrarentrenadorComponent implements AfterViewInit, OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<entrenador>;
  dataSource!: MostrarentrenadorDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_persona', 'status','Acciones'];

  constructor(private entrenadorService:entrenadorService, private router:Router) {
    this.listarentrenador();
  }

  ngOnInit(): void {
    this.listarentrenador();
  }

  listarentrenador(){
    this.dataSource = new MostrarentrenadorDataSource();
    this.entrenadorService.getentrenador().subscribe(
      res=> this.dataSource.data = res,
      err => console.log(err)
    );
  }

  eliminarentrenador(id:string){
    this.entrenadorService.deleteentrenador(id);
    this.listarentrenador();
    setTimeout(location.reload.bind(location), 500);
  }


  modificarentrenador(id:string){
    this.router.navigate(['/editar-entrenador/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
