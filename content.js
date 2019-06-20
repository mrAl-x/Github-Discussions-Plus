function scrollToNextTarget(targetElement) {
  targetElement[currentTargetIndex].scrollIntoView({ block: 'start' });
  window.scrollBy(0, -300);

  highlightTarget(targetElement[currentTargetIndex]);
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

function subtractTargetIndex(targetLimit) {
  const lastIndex = targetLimit - 1;

  if (currentTargetIndex === 0) {
    currentTargetIndex = lastIndex;
  } else {
    currentTargetIndex--;
  }
}

function handleClick(type) {
  /*
    Opted to get the elements in the event because Github still loads content
    after all the DOM is "officially" rendered
  */

  const targetElement = document.querySelectorAll('#files .inline-comments.js-inline-comments-container');
  const totalTargetsNumber = targetElement.length;

  if (type === 'next') {
    currentTargetIndex !== null ? incrementTargetIndex(totalTargetsNumber) : (currentTargetIndex = 0);
  } else {
    currentTargetIndex !== null
      ? subtractTargetIndex(totalTargetsNumber)
      : (currentTargetIndex = totalTargetsNumber - 1);
  }

  return scrollToNextTarget(targetElement);
}

function displayButtonContainer() {
  const containerStyle = `
    position: absolute;
    top: 50%;
    right: 180px;
    width: 80px;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  `;

  let wrapper = document.createElement('div');
  wrapper.style.cssText = containerStyle;

  return wrapper;
}

function displayButtons() {
  const prevIconUrl = chrome.extension.getURL('assets/prev_icon.png');
  const nextIconUrl = chrome.extension.getURL('assets/next_icon.png');

  const buttonStyle = `
    width: 28px;
    height: 28px;
    background-size: 100% 100%;
    border: 1px solid #D5D6D6;
    border-radius: 4px;
    cursor: pointer;
  `;

  const prevStyle = `
    background: url('${prevIconUrl}') #FFFFFF no-repeat center;
  `;

  const nextStyle = `
    background: url('${nextIconUrl}') #FFFFFF no-repeat center;
  `;

  return `
    <input type="button" id="github_extension_prevButton" style="${buttonStyle} ${prevStyle}" title="Previous discussion" />
    <input type="button" id="github_extension_nextButton" style="${buttonStyle} ${nextStyle}" title="Next discussion" />
  `;
}

let currentTargetIndex = null;
const wrapper = displayButtonContainer();

wrapper.classList.add('foobar');
wrapper.innerHTML = displayButtons();

document.querySelector('.pr-toolbar').append(wrapper);

document.querySelector('#github_extension_prevButton').addEventListener('click', () => handleClick('prev'));
document.querySelector('#github_extension_nextButton').addEventListener('click', () => handleClick('next'));
