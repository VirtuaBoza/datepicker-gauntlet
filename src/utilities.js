export const browserSupportsDateInput = () => {
  var test = document.createElement('input');
  try {
    test.type = 'date';
  } catch(error) {
    return false;
  }
  
  return test.type === 'date';
}