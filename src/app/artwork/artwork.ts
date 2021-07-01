export class Artwork {
    title: string
    medium: string
    description: string
    image: string
  }
  
  export const artworks = [
    {
        title:"Desert Scene",
        medium:"Asperite",
        description:"After reading some Spaceman Spiff comic strips and exploring animations in Asperite I was inspired. A mysterious figure looks over a desert waste seeing his destination far in the distance with the setting star of the system.",
        image:"assets/artwork/gifs/Desert.gif"
    },
    {
        title:"Rocket Engine",
        medium:"Asperite",
        description:"Rocket engine inspired by SpaceX merlin engine start up",
        image:"assets/artwork/gifs/Small Rocket Engine.gif"
    },
    {
        title:"Pig Walk",
        medium:"Asperite",
        description:"Practice on animating a low resolution quadraped",
        image:"assets/artwork/gifs/Pig_Run.gif"
    },
    {
        title:"Walking Speed",
        medium:"Asperite",
        description:"Matching pixel speed to game world speed is difficult. This animation is used to insure the character moves at the same pixel rate in animation as in the game world",
        image:"assets/artwork/gifs/CharWalk.gif"
    }
  ];