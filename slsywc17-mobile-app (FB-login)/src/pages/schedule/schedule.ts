import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Session} from "../../app/model/session";

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  public segment: string;

  public schedule1: any;
  public schedule2: any;
  public schedule3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.schedule1 = [];
    this.schedule1.push(new Session('Registration and Lunch', '12:30 PM', '02:30 PM', 'Main canteen', 'food'));
    this.schedule1.push(new Session('Introduction', '02:30 PM', '02:45 PM', 'Management auditorium', 'event'));
    this.schedule1.push(new Session('Speech by Workout.lk', '02:45 PM', '03:15 PM', 'Management audi. corridor', 'speech'));
    this.schedule1.push(new Session('Tea', '03:15 PM', '03:45 PM', 'Management auditorium', 'food'));
    this.schedule1.push(new Session('Speech by Mr. Thilina Premasiri', '03:45 PM', '04:45 PM', 'Management auditorium', 'speech'));
    this.schedule1.push(new Session('Preparation time', '04:45 PM', '06:15 PM', '', 'misc'));
    this.schedule1.push(new Session('Opening ceremony', '06:15 PM', '06:30 PM', 'Management auditorium', 'event'));
    this.schedule1.push(new Session('Speech by Prof. Saman', '06:30 PM', '07:30 PM', 'Management auditorium', 'speech'));
    this.schedule1.push(new Session('Award night', '07:30 PM', '09:00 PM', 'Management auditorium', 'event'));
    this.schedule1.push(new Session('Dinner', '09:00 PM', '09:45 PM', 'Main canteen', 'food'));
    this.schedule1.push(new Session('DJ party', '09:45 PM', '10:30 PM', 'Main canteen', 'entertainment'));

    this.schedule2 = [];
    this.schedule2.push(new Session('Breakfast', '06:30 AM', '08:00 AM', 'Main canteen', 'food'));
    this.schedule2.push(new Session('Speech by Mr. Sepala Karunasena', '08:00 AM', '09:00 AM', 'Management auditorium', 'speech'));
    this.schedule2.push(new Session('Discussion on the "Vision of IEEE SL"', '09:00 AM', '09:45 AM', 'Management auditorium', 'event'));
    this.schedule2.push(new Session('Tea', '09:45 AM', '10:00 AM', 'Management audi. corridor', 'food'));
    this.schedule2.push(new Session('Speech by Dr.Madurapperuma', '10:00 AM', '11:00 AM', 'Management auditorium', 'speech'));
    this.schedule2.push(new Session('Speech by gudppl', '11:00 AM', '12:00 PM', 'Management auditorium', 'speech'));
    this.schedule2.push(new Session('Speech by dialog', '12:00 PM', '12:30 PM', 'Management auditorium', 'speech'));
    this.schedule2.push(new Session('Lunch', '12:30 PM', '01:45 PM', 'Main canteen', 'food'));
    this.schedule2.push(new Session('Student Track', '01:45 PM', '04:15 PM', 'Management auditorium', 'event'));
    this.schedule2.push(new Session('WIE Track', '01:45 PM', '04:15 PM', 'Applied Mini Auditorium', 'event'));
    this.schedule2.push(new Session('YP Track', '01:45 PM', '04:15 PM', '104 LT', 'event'));
    this.schedule2.push(new Session('Tea', '04:15 PM', '04:30 PM', 'Management audi. corridor', 'food'));
    this.schedule2.push(new Session('Outbound Session', '04:30 PM', '06:30 PM', 'University premises', 'entertainment'));
    this.schedule2.push(new Session('Preparation time', '06:30 PM', '07:30 PM', '', 'misc'));
    this.schedule2.push(new Session('Dinner', '07:30 PM', '08:15 PM', 'Hostel Canteens. (Sinharaja / Walawa)', 'food'));
    this.schedule2.push(new Session('IEEE හැන්දෑව', '08:15 PM', '10:30 PM', 'LT 307 - Management ', 'entertainment'));

    this.schedule3 = [];
    this.schedule3.push(new Session('Breakfast', '06:30 AM', '08:00 AM', 'Main canteen', 'food'));
    this.schedule3.push(new Session('Video contest', '08:00 AM', '09:00 AM', 'Management auditorium', 'event'));
    this.schedule3.push(new Session('Speech by Dr. Buddhima Subasinghe', '09:00 AM', '10:00 AM', 'Management auditorium', 'speech'));
    this.schedule3.push(new Session('Speech by  Mr. Nadeeka Guruge', '10:00 AM', '11:00 AM', 'Management auditorium', 'speech'));
    this.schedule3.push(new Session('Tea and group photo', '11:00 AM', '11:30 AM', 'Management auditorium corridor', 'food'));
    this.schedule3.push(new Session('Closing Ceremony', '11:30 AM', '12:00 AM', 'Management auditorium', 'event'));

    this.segment = "day1";
  }

  ionViewDidLoad() {
  }

  public updateSchedule(){

  }
}
