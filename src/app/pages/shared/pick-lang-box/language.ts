
export interface Language {
  name: string;
  code: string;
  disabled: boolean;
}


export const langMock : Language[] = [
  { name: 'English', code: 'en', disabled: false },
  { name: 'Spanish', code: 'es', disabled: false },
  { name: 'Portuguese', code: 'pt', disabled: false },
 /*  { name: 'Chinese', code: 'zh', disabled: true }, */
  { name: 'French', code: 'fr', disabled: false },
  { name: 'German', code: 'de', disabled: false },
  { name: 'Italian', code: 'it', disabled: false },
  { name: 'Japanese', code: 'ja', disabled: false },
  { name: 'Korean', code: 'ko', disabled: false },
  { name: 'Russian', code: 'ru', disabled: false },
  { name: 'Arabic', code: 'ar', disabled: false },
  { name: 'Bangali', code: 'bn', disabled: false },

]
