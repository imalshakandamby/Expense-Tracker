import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  model = new Expense('Day', 'Title', 'Amount', 'Image');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newExpense() {
    this.model = new Expense('', '', '','');
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
