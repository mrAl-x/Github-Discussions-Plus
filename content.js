function scrollToNextTarget(targetElement) {
  targetEl

function highlightTarget(targetElement) {
  targetElement.style = 'background: #FFF5C7';
  setTimeout(() => {
    targetElement.style = 'background: none; transition: background 2s;';
  }, 500);
}ex = targetLimit - 1;

  if (currentTargetIndex === lastIndex) {
    currentTargetIndex = 0;
  } else {
    currentTargetIndex++;
  }
}

function onClick() {
  /*
    Opted to g

wrapper.innerHTML = '<button id="foobar" onclick="onClick()">Next -></button>';

document.querySelector('.pr-toolbar').append(wrapper);

document.querySelector('#foobar').addEventListener('click', () => onClick());
