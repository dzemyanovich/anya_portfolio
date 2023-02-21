import noScroll from './no-scroll';

describe('noScroll', () => {
  let classAddSpy;
  let classRemoveSpy;

  beforeEach(() => {
    classAddSpy = jest.spyOn(document.body.classList, 'add');
    classAddSpy.mockImplementation(() => {});

    classRemoveSpy = jest.spyOn(document.body.classList, 'remove');
    classRemoveSpy.mockImplementation(() => {});
  });

  it('start', () => {
    noScroll.start();
    expect(classAddSpy).toHaveBeenCalledWith('no-scroll');
    expect(classRemoveSpy).not.toHaveBeenCalled();
  });

  it('end', () => {
    noScroll.end();
    expect(classRemoveSpy).toHaveBeenCalledWith('no-scroll');
    expect(classAddSpy).not.toHaveBeenCalled();
  });
});
