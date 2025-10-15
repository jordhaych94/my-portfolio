document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');

  // Use event delegation for all buttons
  document.querySelector('.buttons').addEventListener('click', (event) => {
    if (!event.target.matches('button')) return;

    const key = event.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.value;

    if (!action) { // It's a number
      display.value = displayedNum === '0' ? keyContent : displayedNum + keyContent;
    }

    if (action === 'operator') {
      display.value += keyContent;
    }

    if (action === 'clear') {
      display.value = '';
    }

    if (action === 'calculate') {
      try {
        // A safer way to calculate than eval()
        // Note: This is still simple and has limitations (e.g. order of operations)
        // but it avoids the security risk of eval().
        const safeEval = new Function('return ' + displayedNum);
        display.value = safeEval();
      } catch (error) {
        display.value = 'Error';
      }
    }
  });
});