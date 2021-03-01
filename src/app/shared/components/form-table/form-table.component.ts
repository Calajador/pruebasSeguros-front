import { Component, OnInit } from '@angular/core';
import { User } from './model/userTable.model';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { AlbumTableService } from './services/album-table.service';
import { UserTableService } from './services/user-table.service';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css'],
})
export class FormTableComponent implements OnInit {
  form: FormGroup;
  users: User[] = [];
  displayedColumns = ['id', 'userId', 'title'];
  constructor(
    private _albumService: AlbumTableService,
    private _userService: UserTableService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      albums: this._formBuilder.array([]),
    });
    this._albumService.getAllAsFormArray().subscribe((albums) => {
      this.form.setControl('albums', albums);
    });
    this._userService.getAll().subscribe((users) => {
      this.users = users;
    });
  }

  get albums(): FormArray {
    return this.form.get('albums') as FormArray;
  }

  // On user change I clear the title of that album
  onUserChange(event, album: FormGroup) {
    const title = album.get('title');

    title.setValue(null);
    title.markAsUntouched();
    // Notice the ngIf at the title cell definition. The user with id 3 can't set the title of the albums
  }
}
