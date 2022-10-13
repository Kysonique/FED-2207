export class Crew {
    public name: string;
    public imagePath: string;
    public role: string;
    public bio: string;
    
    constructor(name: string, image: string, role: string, bio: string){
        this.name = name;
        this.imagePath = image;
        this.role = role;
        this.bio = bio;
    }
 
}