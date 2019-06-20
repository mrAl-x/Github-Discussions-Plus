function scrollToNextTarget(targetElement) {
  targetElement.scrollIntoView({ block: 'start' });
  window.scrollBy(0, -300);
}

function highlightTarget(targetElement) {
  targetElement.style = 'background: #FFF5C7';
  setTimeout(() => {
    targetElement.style = 'background: none; transition: background 2s;';
  }, 500);
}

function incrementTargetIndex(targetLimit) {
  const lastIndex = targetLimit - 1;

  if (currentTargetIndex === lastIndex) {
    currentTargetIndex = 0;
  } else {
    currentTargetIndex++;
  }
}

function onClick() {
  /*
    Opted to get the elements in the event because Github still loads content
    after all the DOM is "officially" rendered
  */
  const targetElement = document.querySelectorAll('#files .inline-comments.js-inline-comments-container');
  const totalTargets = targetElement.length;
  const currentTarget = targetElement[currentTargetIndex];

  scrollToNextTarget(currentTarget);
  highlightTarget(currentTarget);
  incrementTargetIndex(totalTargets);
}

const wrapper = document.createElement('section');
let currentTargetIndex = 0;

wrapper.innerHTML = '<button id="foobar" onclick="onClick()">Next -></button>';

document.querySelector('.pr-toolbar').append(wrapper);

document.querySelector('#foobar').addEventListener('click', () => onClick());
