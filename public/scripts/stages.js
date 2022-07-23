const setStageText = (stageData) => {
  document.getElementById('stage-title').innerText = stageData.title;
  document.getElementById('stage-body').innerText = stageData.body;
};

const setStageButtons = (stageData) => {
  if (stageData.next != -1) {
    let next = document.createElement('button');
    next.classList.add('btn', 'btn-primary');
    next.innerText = 'continue';
    document.getElementById('stage-button-container').append(next);
  } else {
    let restart = document.createElement('button');
    restart.classList.add('btn', 'btn-primary');
    restart.innerText = 'restart';
    document.getElementById('stage-button-container').append(restart);
  }

  if (stageData.back != -1) {
    let back = document.createElement('button');
    back.classList.add('btn', 'btn-danger', 'me-5');
    back.innerText = 'back';
    document.getElementById('stage-button-container').append(back);
  }
};

const setStage = (stageData) => {
  setStageText(stageData);
  setStageButtons(stageData);
};

const setStageButtonsWithIdx = (index) => {
  setStageButtons(stages[index]);
};

// todo: put this in a database somewhere
// contains the text for all stages
const stages = [
  {
    id: 0,
    title: 'A mystery door, how exciting',
    body: 'Maybe that button does something?',
    back: -1,
    next: 1,
  },
  {
    id: 1,
    title: 'The bugs are coming',
    body: 'SQUASH THE BUG! DO IT! DO IT!',
    back: 0,
    next: 2,
  },
  {
    id: 2,
    title: 'Is that a dragon',
    body: 'Take a breath, and this weird piece of gold',
    back: 1,
    next: 3,
  },
  {
    id: 3,
    title: 'That\'s definitely a dragon',
    body: 'Give him the coin or something!',
    back: 2,
    next: 4,
  },
  {
    id: 4,
    title: 'The door is locked',
    body: 'What\'s this in your pocket? I doubt it\'s useful',
    back: 3,
    next: 5,
  },
  {
    id: 5,
    title: 'You did it?',
    body: 'Get out while you can.',
    back: -1,
    next: -1,
  },
];
