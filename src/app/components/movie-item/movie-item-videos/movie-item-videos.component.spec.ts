import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemVideosComponent } from './movie-item-videos.component';

describe('MovieItemVideosComponent', () => {
  let component: MovieItemVideosComponent;
  let fixture: ComponentFixture<MovieItemVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieItemVideosComponent]
    });
    fixture = TestBed.createComponent(MovieItemVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
