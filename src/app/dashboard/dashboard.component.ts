import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { DataService } from '../service/data/data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Response } from '../interface/response';
import { SpinnerService } from '../service/spinner/spinner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  response: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  dataForm: FormGroup;
  showSpinner: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    public spinnerService: SpinnerService,
  ) { }

  ngOnInit(){
    this.dataForm = this.formBuilder.group({
      url: [null, Validators.required]
    });
  }

  submit(){
    if (!this.dataForm.valid) {
      return;
    }
    this.dataService.sendGetRequest(this.dataForm.value.url).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<Response[]>) => {
      console.log(res);
      this.response = res;
    })
  }

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
