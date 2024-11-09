import { Skill } from "../interfaces/skill";
import { v4 as uuidv4 } from 'uuid';

export const skills: Skill[] = [
  { id: uuidv4(), name: "Angular", icon: "fa-angular" },
  { id: uuidv4(), name: "CSS", icon: "fa-css3" },
  { id: uuidv4(), name: "HTML", icon: "fa-html5" },
  { id: uuidv4(), name: "Python", icon: "fa-python" }
]
