import { SectionDetailsModule } from './section-details.module';

describe('SectionDetailsModule', () => {
  let sectionDetailsModule: SectionDetailsModule;

  beforeEach(() => {
    sectionDetailsModule = new SectionDetailsModule();
  });

  it('should create an instance', () => {
    expect(sectionDetailsModule).toBeTruthy();
  });
});
