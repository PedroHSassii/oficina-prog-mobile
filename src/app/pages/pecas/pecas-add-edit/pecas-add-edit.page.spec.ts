import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PecasAddEditPage } from './pecas-add-edit.page';

describe('PecasAddEditPage', () => {
  let component: PecasAddEditPage;
  let fixture: ComponentFixture<PecasAddEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PecasAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
