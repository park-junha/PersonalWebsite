import React, {
  Component
, Suspense
, lazy
} from 'react';
import LoadingScreen from './LoadingScreen';

import { Api } from '../interfaces/Api';

interface Props {
  api: Api;
  component: string;
  changeComponent: (newComponent: string) => void;
}

const LandingPage = lazy( () => import('./LandingPage'));
const AboutMe = lazy( () => import('./Portfolio/AboutMe'));
const ProfessionalExperience = lazy( () => import('./Portfolio/Experience'));
const TechnicalSkills = lazy( () => import('./Portfolio/Skills'));
const Projects = lazy( () => import('./Portfolio/Projects'));

const VersionLog = lazy( () => import('./VersionLog'));
const NotFound = lazy( () => import('./404'));

export default class Main extends Component<Props> {
  renderComponent = (component: string): JSX.Element => {
    switch (component) {
      case 'LandingPage':
        return (
          <LandingPage
            changeComponent={this.props.changeComponent}
          />
        );
      case 'AboutMe':
        return (
          <AboutMe />
        );
      case 'Experience':
        return (
          <ProfessionalExperience
            {...this.props.api.ProfessionalExperience}
          />
        );
      case 'Skills':
        return (
          <TechnicalSkills
            technicalSkills={this.props.api.TechnicalSkills}
          />
        );
      case 'Projects':
        return (
          <Projects
            projects={this.props.api.Projects}
            languages={this.props.api.language_ids}
          />
        );
      case 'VersionLog':
        return (
          <VersionLog
            versionData={this.props.api.Versions}
          />
        );
      default:
        return (
          <NotFound />
        );
    }
  };

  render (): JSX.Element {
    return (
      <div className='Main'>
        <Suspense fallback={<LoadingScreen />}>
          { this.renderComponent(this.props.component) }
        </Suspense>
      </div>
    );
  };
}
