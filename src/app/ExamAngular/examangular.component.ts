import {Component} from "@angular/core";
import {IExam} from "../interfaces/exam.interface";

@Component({
    selector: 'app-examangular',
    templateUrl:'examangular.component.html'
})

export class ExamangularComponent{
    examArray: IExam[] = [
        {name:'Gemma Roberson',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
        {name:'Anna Itna',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
        {name:'Markus Muller',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
        {name:'Emilyt Linc',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
        {name:'Sirra Roberson',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
    ];
}