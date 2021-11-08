import { EstudianteCursoService } from './../services/estudiante-curso.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarEstudianteCursoDataSource, EstudianteCurso } from './mostrar-estudiante-curso-datasource';

@Component({
  selector: 'app-mostrar-estudiante-curso',
  templateUrl: './mostrar-estudiante-curso.component.html',
  styleUrls: ['./mostrar-estudiante-curso.component.css']
})
export class MostrarEstudianteCursoComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EstudianteCurso>;
  dataSource!: MostrarEstudianteCursoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_estudiante', 'estudiante', 'id_curso', 'nombre', 'status', 'fecha_inicio', 'fecha_fin', 'Acciones'];


  constructor(private estudianteCursoService : EstudianteCursoService, private router:Router) {

  }

  ngOnInit(): void {
    this.listarEstudianteCursos();
  }

  listarEstudianteCursos(){
    this.dataSource = new MostrarEstudianteCursoDataSource();
    this.estudianteCursoService.getEstudianteCursos().subscribe(
      res=>{
        this.dataSource.data = res;
      }
    )
  }

  eliminarEstudianteCurso(id:string){
    this.estudianteCursoService.deleteEstudianteCursos(id);
    this.listarEstudianteCursos();
    setTimeout(location.reload.bind(location), 500);
  }

  modificarEstudianteCurso(id:string){
    this.router.navigate(['/editar-estudiante-curso/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
