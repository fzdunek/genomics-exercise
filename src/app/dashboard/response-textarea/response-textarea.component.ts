import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild, Input } from '@angular/core';
import { Response } from "../../interface/response";

@Component({
  selector: 'app-response-textarea',
  templateUrl: './response-textarea.component.html',
  styleUrls: ['./response-textarea.component.scss']
})
export class ResponseTextareaComponent {

  constructor(private _ngZone: NgZone) {}

  @Input() responseData: Response;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

}
