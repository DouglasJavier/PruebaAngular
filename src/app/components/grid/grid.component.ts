import { Component, effect, input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserType } from '../../interfaces/user.interfaces';
import { CommonModule } from '@angular/common';

const MATERIAL_MODULES = [MatTableModule, MatIconModule];
@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MATERIAL_MODULES, CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent<T> implements OnInit {
  displayedColumns = input.required<string[]>();
  data = input.required<UserType[]>();
  dataSource = new MatTableDataSource<UserType>();
  colums: string[] = [];
  constructor() {
    effect(() => {
      if (this.data()) {
        this.dataSource.data = this.data();
      }
    }, {allowSignalWrites: true})
   }

  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.colums = this.displayedColumns();
  }

  openEditForm(user: UserType) {}

  deleteUser(id: string) {}
}
