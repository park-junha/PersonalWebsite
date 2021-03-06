import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProjectComponent } from './project.component';
import dummyData from '../../../test.data';

describe('ProjectComponent', () => {
  const testModel = dummyData.personal_projects[1];

  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent ],
      imports: [
        MatButtonModule,
        MatDialogModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: testModel
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function elementOf(selector) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }

  function textOf(selector) {
    return fixture.debugElement.nativeElement.querySelector(selector)
      .innerHTML;
  }

  function hrefOf(selector) {
    return fixture.debugElement.nativeElement.querySelector(selector).href;
  }

  function bgColorOf(selector) {
    //  Get color in rgb(x,y,z) format
    let rgbStr = fixture.debugElement.nativeElement.querySelector(selector)
      .style.backgroundColor;

    //  Then convert it into an array of 3, then to a hex string
    let rgb = rgbStr.substr(4).split(')')[0].split(', ');
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
    if (r.length == 1) { r = '0' + r; }
    if (g.length == 1) { g = '0' + g; }
    if (b.length == 1) { b = '0' + b; }

    return '#' + r + g + b;
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind data.title to app-project-title', () => {
    expect(textOf('#app-project-title')).toEqual(testModel.title);
  });

  it('should bind aboutLabel to app-project-about-title', () => {
    expect(textOf('#app-project-about-title'))
      .toEqual(component.aboutLabel);
  });

  it('should render app-project-about', () => {
    expect(elementOf('#app-project-about')).not.toBeNull();
  });

  it('should not render app-project-no-about', () => {
    expect(elementOf('#app-project-no-about')).toBeNull();
  });

  it('should bind data.about to app-project-about', () => {
    expect(textOf('#app-project-about')).toEqual(testModel.about);
  });

  it('should render app-project-demo', () => {
    expect(elementOf('#app-project-demo')).not.toBeNull();
  });

  it('should not render app-project-no-demo', () => {
    expect(elementOf('#app-project-no-demo')).toBeNull();
  });

  it('should display correct data in app-project-demo', () => {
    expect(textOf('#app-project-demo i')).toEqual(testModel.title);

    //  Use contain to include trailing slashes
    expect(hrefOf('#app-project-demo a')).toContain(testModel.url);
  });

  it('should render app-project-source-code', () => {
    expect(elementOf('#app-project-source-code')).not.toBeNull();
  });

  it('should display correct data in app-project-source-code', () => {
    expect(textOf('#app-project-source-code a'))
      .toEqual(component.sourceUrlLabel);

    //  Use contain to include trailing slashes
    expect(hrefOf('#app-project-source-code a'))
      .toContain(testModel.source_code_url);
  });

  it('should not render app-project-no-source-code', () => {
    expect(elementOf('#app-project-no-source-code')).toBeNull();
  });

  it('should render app-project-languages-title', () => {
    expect(elementOf('#app-project-languages-title')).not.toBeNull();
  });

  it('should display languages data correctly', () => {
    expect(textOf('#app-project-languages-title'))
      .toEqual(component.languagesLabel);
    testModel.languages.forEach((language, index) => {
      expect(bgColorOf(`#app-project-languages \
        div:nth-child(${index + 1}) span:nth-child(1)`))
        .toEqual(language.color);
      expect(textOf(`#app-project-languages \
        div:nth-child(${index + 1}) span:nth-child(2)`))
        .toEqual(language.name);
    });
  });

  it('should render app-project-other-tools-title', () => {
    expect(elementOf('#app-project-other-tools-title')).not.toBeNull();
  });

  it('should display other tools data correctly', () => {
    expect(textOf('#app-project-other-tools-title'))
      .toEqual(component.otherToolsLabel);
    testModel.tools.forEach((tool, index) => {
      expect(bgColorOf(`#app-project-other-tools \
        div:nth-child(${index + 1}) span:nth-child(1)`))
        .toEqual(tool.color);
      expect(textOf(`#app-project-other-tools \
        div:nth-child(${index + 1}) span:nth-child(2)`))
        .toEqual(tool.name);
    });
  });

});
