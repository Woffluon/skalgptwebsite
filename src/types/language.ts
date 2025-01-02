export type Language = 'tr' | 'en';

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    getStarted: string;
    learnMore: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  nav: {
    school: string;
  };
}