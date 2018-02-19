/**
 * Created by Reto Baumgartner (rfbaumgartner) on 16.02.18.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { SubjectTagChipsComponent } from '../../src/modules/subject-tag-chips/subject-tag-chips.component';

describe('TagChipsComponent', () => {
    let component: SubjectTagChipsComponent;
    let fixture: ComponentFixture<SubjectTagChipsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ MatChipsModule, RouterModule ],
            declarations: [ SubjectTagChipsComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SubjectTagChipsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
