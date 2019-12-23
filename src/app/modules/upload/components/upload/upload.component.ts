import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx/dist/xlsx.full.min.js';
import {SharedDataService} from '../../../shared/services/shared-data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file;
  message;
  fileName;
  data;

  constructor(
    private sharedData: SharedDataService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onfileSelect(files: FileList) {
    this.file = files.item(0);
    this.onFileChange();
    return 1;
  }


  drop(event: any) {
    event.stopPropagation();
    event.preventDefault();
    this.file = event.dataTransfer.files.item(0);
    this.onFileChange();

  }
  allowDrop(event: any) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    console.log('allowDrop: ', event);
  }



  excelDateToJSDate(serial) {
    const utcDays  = Math.floor(serial - 25569);
    const utcValue = utcDays * 86400;
    const dateInfo = new Date(utcValue * 1000);

    const fractionalDay = serial - Math.floor(serial) + 0.0000001;

    let totalSeconds = Math.floor(86400 * fractionalDay);

    const seconds = totalSeconds % 60;

    totalSeconds -= seconds;

    const hours = Math.floor(totalSeconds / (60 * 60));
    const minutes = Math.floor(totalSeconds / 60) % 60;

    // return new Date(dateInfo.getFullYear(), dateInfo.getMonth(), dateInfo.getDate(), hours, minutes, seconds);
    return `${ dateInfo.getMonth() + 1}/${dateInfo.getDate()}/${dateInfo.getFullYear()}`;
  }
  onFileChange() {
    this.message = 'wait importing the file ...';
    // /* wire up file reader */
    // const target: DataTransfer = <DataTransfer>evt.target;
    // if (target.files.length !== 1) {
    //   throw new Error('Cannot use multiple files');
    // }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      this.message = 'wait parsing the file...';
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      /* save data AOA */
      this.data = XLSX.utils.sheet_to_json(ws, {
        header: 2,
        defval: '',
        blankrows: false
      });
      console.log({data: this.data});
      const allUsersAttendance = {};
      let payNoIndex = 0;
      let globalIdIndex = 1;
      let branchIndex = 2;
      let nameIndex = 3;
      let departmentIndex = 4;
      let positionIndex = 5;
      let dateIndex = 6;
      let startIndex = 7;
      let endIndex = 8;
      let netHoursIndex = 9;
      let totalOutIndex = 1;
      let totalHoursIndex = 1;
      let totalWorkingAndBreakIndex = 1;
      let varianceIndex = 1;
      this.data.forEach((row, index) => {
        const rowData: any[] = Object.values(row);

        if ( index === 0 ) {
          payNoIndex  =  rowData.indexOf('PayNo');
          globalIdIndex  =  rowData.indexOf('Global ID');
          branchIndex  =  rowData.indexOf('Branch');
          nameIndex  =  rowData.indexOf('Name');
          departmentIndex  =  rowData.indexOf('Department');
          positionIndex  =  rowData.indexOf('Position');
          dateIndex  =  rowData.indexOf('Date');
          startIndex  =  rowData.indexOf('In');
          endIndex  =  rowData.indexOf('Out');
          netHoursIndex  =  rowData.indexOf('Net Hours');
          totalOutIndex   =  rowData.indexOf('Total out ');
          totalHoursIndex   =  rowData.indexOf('Total Hours');
          totalWorkingAndBreakIndex   =  rowData.indexOf('Total Working Hours(Net Hours+Break)');
          varianceIndex   =  rowData.indexOf('Variance');

          console.warn('skip', rowData, );


        } else {

          const payNo = rowData[payNoIndex];
          const globalId = rowData[globalIdIndex];
          const branch = rowData[branchIndex];
          const name = rowData[nameIndex];
          const department = rowData[departmentIndex];
          const position = rowData[positionIndex];
          const date = this.excelDateToJSDate(rowData[dateIndex]);
          const start = rowData[startIndex];
          const end = rowData[endIndex];
          const netHours = rowData[netHoursIndex];
          const totalOut = rowData[totalOutIndex ];
          const totalHours = rowData[totalHoursIndex ];
          const totalWorkingAndBreak = rowData[totalWorkingAndBreakIndex ];
          const variance = rowData[varianceIndex ];
          const userInfo = {
            name,
            globalId,
            department,
            position,
            branch,
            payNo,
            attendance: []
          };

          const attendance = {
            date,
            start,
            end,
            netHours,
            totalOut,
            totalHours,
            totalWorkingAndBreak,
            variance,
          };


          if ( !allUsersAttendance[globalId]) {
            allUsersAttendance[globalId] = userInfo ;
          }
          allUsersAttendance[globalId].attendance.push(attendance);
        }
      });

      console.log({allUsersAttendance});
      this.sharedData.attendance.next(allUsersAttendance);
      this.router.navigate(['/profile']);
      this.message = '';
    };
    this.fileName = this.file.name;
    this.message = 'wait reading the file...';
    reader.readAsBinaryString(this.file);
  }

}
