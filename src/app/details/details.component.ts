import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/service/cache.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
  personalInfoData = {
    'Address Line 1': '128 E AZALEA DR',
    'Address Line 2': '',
    'City': 'Harrisburg',
    'State': 'PA',
    'Zip + 4': '17110',
    'Phone#': '',
    'Cell#': ''
  };

  employerInfo = [
    "Address Line 1",
    "Address Line 2",
    "City:",
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

  supervisionData = {
    'PBPP Status Code': '43 - Maximum Expiration',
    'Status Code Date': '07/10/2020',
    'Last Contact Date': '06/12/2018',
    'PBPP Fees Due': '0.00',
    'Curfew': 'No',
    'GPS': 'No',
    'AOD Level': 'MEDIUM',
    'Sending State(s)': 'PA',
    'Receiving State': 'New Jersey'
  };

  problemAreas = {
    'Behavior': [
      "STG",
      "Violent/Assaultive",
      "Sex Offender",
      "SVP",
      "Minor Victim",
      "Drug",
      "Alcohol",
      "Escape",
      "Walk Off",
      "Mental Health",
      "Suicide Attempt History",
      "Domestic Violence"
    ],
    'Housingsing': [
      "Escape Risk List",
      "Housing Concerns",
      "Temporary Hold In",
      "Restricted Release List",
      "Seriously Mentally Ill"
    ],
    'Supervision Protocols': [
      "Sex Offender Protocol",
      "Domestic Violence Protocol"
    ]
  };

  caseAssignment = [
    'Conselor',
    'Unit Manager',
    'Institutional Parole Supervisor',
    'Institutional Parole Agent',
    'Field Supervisor',
    'Field Agent'
  ];

  centencingData = {
    'Offense Code': ' CS13A19',
    "Offenses(s')": ' DRUG - PURCHASE OR RECEIVE IN COMMERCE',
    'Committing County': ' DAUPHIN',
    'Controlling Min Date': ' 04/09/2017',
    'RRRI Min Date': ' 04 / 09 / 2017',
    'True Min Date': '10 / 10 / 2017',
    'Controlling Max Date': ' 07 / 10 / 2020',
    'Recomputed PV Max Date': '',
    'RRRI': 'Certified',
    'Philadelphia Photo Number': '',
    'DOC Status': 'PAROLED',
    'Probation Max Date': '',
    'Parole Docket': '',
    'Docket Status': '',
    'Interview Type': '',
    'Constructive Parole': '',
    'Rebuttable': '',
    'Released From': 'CAMP HILL',
    'Released Date': '03 / 27 / 2018',
    'RHU Status': '',
    'Length Of Stay': '',
  }

  offenderDetails: any = {};

  constructor(private cache: CacheService, public dialog: MatDialog, private router: Router) { }

  openDialog() {
    this.dialog.open(MorePholotDialog, {
      backdropClass: 'back-drop',
      panelClass: 'more-photos'
    });
  }
  ngOnInit() {
    this.offenderDetails = this.cache.seletedReentrant;
  }

  showResults() {
    this.router.navigateByUrl('/results');
  }
}


@Component({
  selector: 'more-photo',
  templateUrl: './more-photo.component.html'
})
export class MorePholotDialog { }