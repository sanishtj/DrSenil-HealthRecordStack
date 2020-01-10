import { Injectable } from '@angular/core';
import  *  as  dropdown  from  '../data/dropdown.json';
import { ComboboxItem } from '../models/combobox-item.js';

@Injectable({
    providedIn: 'root'
  })
  export class DropdownService {

    getGenders() : Array<ComboboxItem> {
        return dropdown.Gender;
    }
  }