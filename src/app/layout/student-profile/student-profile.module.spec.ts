import { StudentProfileModule } from './student-profile.module';

describe('StudentProfileModule', () => {
  let studentProfileModule: StudentProfileModule;

  beforeEach(() => {
    studentProfileModule = new StudentProfileModule();
  });

  it('should create an instance', () => {
    expect(studentProfileModule).toBeTruthy();
  });
});
