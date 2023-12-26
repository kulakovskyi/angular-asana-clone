import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Talks} from "../../../../shared/types/track.interface";
import {MatLegacyChipInputEvent} from "@angular/material/legacy-chips";
import {ColorPickerComponent} from "../../../color-picker/components/color-picker/color-picker.component";

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit{
  formGroup!: FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {talk: Talks, edit: boolean},
    private dialogRef: MatDialogRef<EditCardComponent>,
    public colorPickerDialog: MatDialog) {}

  ngOnInit() {
    this.initialForm()
  }

  onSubmit() {
    this.dialogRef.close(this.formGroup.value);
  }

  initialForm(){
    const talk = this.data && this.data.talk ? this.data.talk : null;
    this.formGroup = new FormGroup({
      text: new FormControl(talk && talk.text ? talk.text : '', [
        Validators.required
      ]),
      speaker: new FormControl(talk && talk.speaker ? talk.speaker : '', [
        Validators.required
      ]),
      //image: new FormControl(talk && talk.image ? talk.image : ''),
      //tags: new FormControl(talk && talk.tags ? talk.tags : []),
      //issueType: new FormControl(talk && talk.issueType ? talk.issueType : ''),
      //createdAt: new FormControl(talk && talk.createdAt ? talk.createdAt : new Date()),
      description: new FormControl(talk && talk.description ? talk.description : new Date())
    })
  }


  addTag(event: MatLegacyChipInputEvent) {
    const tagsControl = this.formGroup.get('tags');
    if (tagsControl?.value) {
      tagsControl.value.push({name: event.value, color: '#e0e0e0'});
    } else {
      tagsControl?.setValue([event.value]);
    }
    event.input.value = '';
  }

  removeTag(tag: string) {
    const tagsControl = this.formGroup.get('tags');
    tagsControl?.value.splice(tagsControl.value.indexOf(tag), 1);
  }

  openColorPickerDialog(tag: { color: string, name: string }) {
    const dialogRef = this.colorPickerDialog.open(ColorPickerComponent, {
      data: {},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        tag.color = result;
      }
    });
  }


}
