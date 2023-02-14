import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { StudentService } from '../../shared/services/student.service';
import { Dashboard, BarChartDataList } from '../../shared/services/student.model';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ChartData} from '../../shared/services/profile.model';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})


export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public barchart: Array<any> = [];
      dashBoardData:Dashboard[];
      BarChartData:Array<any>=[];
     public BarChartData1: Array<any>=[];
      BarChartLabels:Array<any>=[];
      data1:BarChartDataList[];
         chartData1:ChartData[];
    // BarChartData: any[];
        public f=[];
        public g=[];
      public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };

    

    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;
      // test:any=0;

        public t=[];
      

   // subject: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
   // array$: Observable<any> =  this.subject.asObservable();

   // public barChartLabels:Array<any>=this.BarChartLabels;
    

    //  public barChartData:Array<any>= [
    //     { data:this.BarChartData,label:'Total course' }];
    public barChartData:Array<any>=[];
      public barChartLabels=[];


           



    constructor( public studentService:StudentService,private http:HttpClient) {

          this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );



        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {


        // this.http.get("http://localhost:52135/api/Dashboard?barchart=true").subscribe((res: ChartData[]) => {
        //     // this.chartData1 = res.filter(r => {
        //     //   return r.totalCourse>=0;
             
        //     // });
        //     this.chartData1=res;

        //     console.log(this.chartData1);
        //     this.chartData1.forEach(y => {
        //       this.BarChartData.push(y.totalCourse);
        //       this.barChartLabels.push(y.SemesterNYear);

              
        //     });


        //     console.log(this.BarChartData);
          
        //   });




          

      //get dashboard data
           this.studentService.getDashboardData();



            this.studentService.getChartData();

                    this.studentService.cast1.subscribe(p=>{this.BarChartLabels=(p)

                    
                        this.barChartLabels=this.BarChartLabels

                       
                       console.log('log4',this.barChartData);
                             }
                             
                         );

                  

             this.studentService.cast2.subscribe(u=>{this.BarChartLabels=u
          
                this.barChartLabels=this.BarChartLabels;
                           // debugger;
            console.log('log1',this.BarChartData[0]);
            console.log('log2',this.BarChartData);

                   

               
                      
                      let i=0;
                     let y=[1,3,2,1];
                         let s;
                          for(let u of this.BarChartData){                                  

                                    //     if(i==0)
                                    //     {
                                           
                                    //         this.g=u;
                                         
                                               
                                    //     }


                                    //     if(i==1)
                                    //      {
                                             

                                    //          console.log('i',i);

                                    //          this.f=u;
                                            
                                     
                                           
                                    //   }
                                      
                                       this.g=u;    
                                    i++;

                               } // end of for

                               
                         this.t=['a','b','c','d']; 
                       
                               console.log('ok');
                        
                        

                           console.log('ftest',this.g);


                           this.barChartData= [
                                     { data:y, label: 'Total Course' }
                    
                   
                             ];


                           
                             console.log('gtest',this.barChartLabels);
                             console.log('hh',this.barChartLabels);
                             console.log('hh',this.barChartData);

                     }
                     
                 );  //end of subscribe

    //              console.log('log',this.test);

               



    //     console.log('log5',this.barChartLabels);
    //       this.test=55;
      
    //     console.log('log',this.test);

  


      

   
  
    //   console.log(this.BarChartLabels);
    //   console.log(this.BarChartData);

    }





public chartData(){

    this.http
    .get('http://localhost:52135/api/Dashboard/get')
    .subscribe((result:Dashboard[]) => {

          this.dashBoardData = result.filter(r=>{
        
         return  r.TotalSections>=0;
    }); 
    

  //    this.dashBoardData.forEach(u=>{
  //          this.BarChartData.push(u.BarChartData.find(k=>k.totalCourse>=0).totalCourse)
  //    });

      for(let p of this.dashBoardData){
           
            for(let q of p.BarChartData){
                // this.BarChartData.push(q.totalCourse)
               //  this.BarChartLabels.push(q.SemesterNYear)
                
            }
            
        }

      // this.barChartLabels=this.BarChartLabels[0];
       
  });


}








    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

//chart

// Doughnut
public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales'
];
public doughnutChartData: number[] = [350, 450, 100];
public doughnutChartType: string = 'doughnut';

// Radar
public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
];
public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
];
public radarChartType: string = 'radar';

// Pie
public pieChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales'
];
public pieChartData: number[] = [300, 500, 100];
public pieChartType: string = 'pie';

// PolarArea
public polarAreaChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales'
];
public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
public polarAreaLegend: boolean = true;

public polarAreaChartType: string = 'polarArea';

// lineChart
public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
];
public lineChartLabels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
];
public lineChartOptions: any = {
    responsive: true
};
public lineChartColors: Array<any> = [
    {
        // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
        // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
        // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
];
public lineChartLegend: boolean = true;
public lineChartType: string = 'line';

// events
public chartClicked(e: any): void {
    // console.log(e);
}

public chartHovered(e: any): void {
    // console.log(e);
}

public randomize(): void {
    // Only Change 3 values
    const data = [
        Math.round(Math.random() * 100),
        59,
        80,
        Math.random() * 100,
        56,
        Math.random() * 100,
        40
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
}



}
