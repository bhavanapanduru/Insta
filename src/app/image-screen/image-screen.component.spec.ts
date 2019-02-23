import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageScreenComponent } from './image-screen.component';

describe('ImageScreenComponent', () => {
  let component: ImageScreenComponent;
  let fixture: ComponentFixture<ImageScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render add image text for the button', () => {
    const fixture = TestBed.createComponent(ImageScreenComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Add Image');
  });

});
