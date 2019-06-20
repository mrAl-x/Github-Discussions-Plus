document.addEventListener(
  'DOMContentLoaded',
  function() {
    document.querySelector('#next').addEventListener('click', onNext, false);

    function onNext() {
      chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        const div = document.createElement('div');

        document.body.appendChild(div);

        // document.querySelectorAll('.review-comment')[0].scrollIntoView();
      });
    }

    function addButton(res) {
      const div = document.createElement('div');
      div.textContent = `${res.count} mrAl-x`;

      document.body.appendChild(div);
    }
  },
  false
);
