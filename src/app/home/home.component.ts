import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import { MatDatepicker } from '@angular/material/datepicker';
declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formModal: any;
  formModalOne: any;

  cols = '4'
  displayMap = new Map([
    [Breakpoints.XSmall, '1'],
    [Breakpoints.Small, '1'],
    [Breakpoints.Medium, '2'],
    [Breakpoints.Large, '3'],
    [Breakpoints.XLarge, '3']
  ])
  selectedTime: any;

  formControlItem: FormControl = new FormControl("");
  required: boolean = !1;
  @ViewChild("timepicker") timepicker: any;
  @ViewChild(MatDatepicker) picker: MatDatepicker<Date> | undefined;

  /**
   * Lets the user click on the icon in the input.
   */
  openFromIcon(timepicker: { open: () => void }) {
    if (!this.formControlItem.disabled) {
      timepicker.open();
    }
  }

  onValueChange($event: Event){
    console.log($event.target);
  }

  constructor(private breakpointsObserver: BreakpointObserver ) {
    breakpointsObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      console.log(result.breakpoints)
      for(const query of Object.keys(result.breakpoints)){
        if (result.breakpoints[query]){
          this.cols = this.displayMap.get(query) as string;
        }
      }
    })
  }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModalTwo')
    )
    this.formModalOne = new window.bootstrap.Modal(
      document.getElementById('exampleModalThree')
    )
    // if ()
    // this.openSearchModel()
  }

  onClear($event: Event) {
    this.formControlItem.setValue(null);
  }

  openModel() {
    this.formModal.show();
  }

  openSearchModel($event: any) {
    console.log("ingreso"+$event.target.value)
    if ($event.target.value == 4)
      this.formModalOne.show();
  }

  closeModal() {
    this.formModal.close();
  }
}
