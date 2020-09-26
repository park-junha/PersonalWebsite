export const VERSION: string = '3.1.0';

export const RIPPLE_COLOR_RED: string = 'rgba(215, 80, 80, 0.15)';
export const FETCH_ALL_QUERY: string = '{ ' + 
  'experiences ' + 
  '{ ' + 
    'experience_id ' + 
    'label ' + 
    'company ' + 
    'title ' + 
    'start_date ' + 
    'end_date ' + 
    'description ' + 
  '} ' + 
  'personal_projects ' + 
  '{ ' + 
    'project_id ' + 
    'description ' + 
    'title ' + 
    'about ' + 
    'url ' + 
    'source_code_url ' + 
    'languages ' + 
    '{ ' + 
      'name ' + 
      'color ' + 
    '} ' + 
    'tools ' + 
    '{ ' + 
      'name ' + 
      'color ' + 
    '} ' + 
  '} ' +
  'professional_projects ' + 
  '{ ' + 
    'project_id ' + 
    'description ' + 
    'title ' + 
    'about ' + 
    'url ' + 
    'source_code_url ' + 
    'languages ' + 
    '{ ' + 
      'name ' + 
      'color ' + 
    '} ' + 
    'tools ' + 
    '{ ' + 
      'name ' + 
      'color ' + 
    '} ' + 
  '} ' +
  'open_source_projects ' + 
  '{ ' + 
    'project_id ' + 
    'description ' + 
    'title ' + 
    'about ' + 
    'url ' + 
    'source_code_url ' + 
    'languages ' + 
    '{ ' + 
      'name ' + 
      'color ' + 
    '} ' + 
    'tools ' + 
    '{ ' + 
      'name ' + 
      'color ' + 
    '} ' + 
  '} }';
