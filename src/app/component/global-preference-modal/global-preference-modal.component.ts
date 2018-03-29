import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap';
@Component({
  selector: 'app-global-preference-modal',
  templateUrl: './global-preference-modal.component.html',
  styleUrls: ['./global-preference-modal.component.css']
})
export class GlobalPreferenceModalComponent implements OnInit {
  public onClose: Subject<boolean>;
  constructor(private _bsModalRef: BsModalRef,private modalService: BsModalService) { }

  ngOnInit() {
    // this.onClose.next(true);
    // this._bsModalRef.hide();
  }
  close(){
    this._bsModalRef.hide();
  }
//   public onCancel(): void {
//     this.onClose.next(false);
//     this._bsModalRef.hide();
// }
}
