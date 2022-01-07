import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  personalInfo = [
    'Address Line 1',
    'Address Line 2',
    'City',
    'State',
    'Zip + 4',
    'Phone#',
    'Cell#'
  ];
  employerInfo = [
    "Address Line 1",
    "Address Line 2",
    " City:",
    "State",
    "Zip + 4",
    " Employer",
    "Employer Phone",
  ];

  supervision = [
    "Grade of Supervision",
    "PBPP Status Code",
    "Status Code Date",
    "Effective Delinquency Date",
    "Last Contact Date",
    "Last Contact Method",
    "Last Drug Test",
    "Acceptance Date",
    "Test Type",
    "Type of Case",
    "PBPP Fees Due",
    "Curfew",
    "GPS",
    "AOD Level",
    "Sending State(s)",
    "Receiving State"
  ];


  




  constructor() { }

  ngOnInit() {
  }

}
