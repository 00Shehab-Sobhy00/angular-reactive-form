import { Pipe, PipeTransform } from "@angular/core";
// import { SignUpComponent } from "./sign-up.component";

// is fixed 
//  [0] : contains keys , and [1] contains the values 
  const Cities_Map = ([
    ["Egypt",['Cairo', 'Alexandria', 'Luxor'] ],
    ['Portugal',['Lisbon', 'Porto', 'Coimbra']],
    ['Argentina',['Salta', 'Rosario ', 'Mar del Plata']],
  ])
  @Pipe({
    name: 'CitiesFilter'
  })
  
  export class CitiesFilter implements PipeTransform {
    
    Cities_Map!: Map<string,string[]>;
    
    transform(_cities: any[], country: string): any {
    let citiesArray : any ;

        for (let i = 0; i < Cities_Map.length; i++) {
          if (Cities_Map[i][0] === country) {
            citiesArray = Cities_Map[i][1];
            break;
          }
        }
        return citiesArray;
    

    }
     
}

  







//   return   Cities_Map.find(([coun]) => coun === country)?.[1] || [];