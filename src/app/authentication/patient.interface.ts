export interface Patient {
    id: string;
    name: string;
    mobile:string;
    email:string;
    drugs: Drug[];
    age:string;
    status:string;
  }
  
  interface Drug {
    name: string;
    description: string;
  }
