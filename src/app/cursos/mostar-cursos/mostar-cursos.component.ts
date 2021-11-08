import { Router } from '@angular/router';
import { CursosService } from './../services/cursos.service';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostarCursosDataSource, Curso } from './mostar-cursos-datasource';

@Component({
  selector: 'app-mostar-cursos',
  templateUrl: './mostar-cursos.component.html',
  styleUrls: ['./mostar-cursos.component.css']
})
export class MostarCursosComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Curso>;
  dataSource!: MostarCursosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'descripcion', 'Acciones'];

  constructor(private cursoService : CursosService, private router:Router) {

  }

  ngOnInit(): void {
    this.listarCursos();
  }

  listarCursos(){
    this.dataSource = new MostarCursosDataSource();
    this.cursoService.getCursos().subscribe(
      res=>{
        this.dataSource.data = res;
      }
    )
  }

  eliminarCursos(id:string){
    this.cursoService.deleteCursos(id);
    this.listarCursos();
    setTimeout(location.reload.bind(location), 500);
  }

  modificarCursos(id:string){
    this.router.navigate(['/editar-cursos/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
