import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public dt:Date = new Date();
 
  public dtJQ:Date = new Date();
  public dateOptions:any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened:boolean = false;
  @ViewChild('datePicker') el:ElementRef;

  public constructor() {
    
  }
 
 
 
  public open():void {
    this.opened = !this.opened;
  }
 
  public clear():void {
    this.dt = void 0;
  }
 
 
  ngOnInit() {
  }

   public dateModel: Date;
   
    label: string;
    
   
    private showDatepicker: boolean = false;

   


 public myTime:Date = new Date();
  public options:any = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };
 
  
 
  public update():void {
    let d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    this.myTime = d;
  };

  public changed():void {
    
  };
 public  ngAfterViewInit() {
        $(this.el.nativeElement).siblings("#datePicker")
                       .on('click', (e, args) => {
                $(this.el.nativeElement).siblings("#datePicker").datepicker("show");
            });
            $(this.el.nativeElement).siblings("#datePicker").datepicker({
        dateFormat: 'DD,d MM, yy',
        maxDate: 0,
        changeYear: true      
    });
     $(this.el.nativeElement).siblings("#datePicker").on('change',(e,args)=>{
       this.dtJQ= $(this.el.nativeElement).siblings("#datePicker").val();
     })
   $(this.el.nativeElement).siblings("#datePicker").datepicker("setDate", this.dtJQ);
    }
  

}
