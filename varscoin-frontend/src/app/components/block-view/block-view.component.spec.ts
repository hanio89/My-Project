import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockViewComponent } from './block-view.component';

describe('BlockViewComponent', () => {
  let component: BlockViewComponent;
  let fixture: ComponentFixture<BlockViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockViewComponent]
    });
    fixture = TestBed.createComponent(BlockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
