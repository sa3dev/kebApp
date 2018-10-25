import { CorerootingModule } from './corerooting.module';

describe('CorerootingModule', () => {
  let corerootingModule: CorerootingModule;

  beforeEach(() => {
    corerootingModule = new CorerootingModule();
  });

  it('should create an instance', () => {
    expect(corerootingModule).toBeTruthy();
  });
});
