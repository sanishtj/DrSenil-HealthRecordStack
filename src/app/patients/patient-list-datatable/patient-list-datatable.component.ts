import { Component, OnInit, Input } from '@angular/core';
import { DataTablesResponse } from 'src/app/models/data-tables-response';
import { Patientinfo } from 'src/app/models/patientinfo';

@Component({
  selector: 'hrs-patient-list-datatable',
  templateUrl: './patient-list-datatable.component.html',
  styleUrls: ['./patient-list-datatable.component.scss']
})
export class PatientListDatatableComponent implements OnInit {

  @Input() patients: Patientinfo[];
  dtOptions: DataTables.Settings = {};

  constructor() {}

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      columns: [
        { data: 'Id' },
        { data: 'FullName' },
        { data: 'DOB' },
        { data: 'Mobile' },
        { data: 'Email' }
      ]
    };
  }
}
