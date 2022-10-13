export class Destinations {
   public name: string;
   public imagePath: string;
   public descripttion: string;
   public distance: string;
   public travel: string;

   constructor(name: string, image: string, desc: string, dist: string, travel: string){
    this.name = name;
    this.imagePath = image;
    this.descripttion = desc;
    this.distance = dist;
    this.travel = travel;

   }
}
