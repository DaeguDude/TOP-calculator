let textarea = document.getElementById('test-target'),
consoleLog = document.getElementById('console-log'),
btnClearConsole = document.getElementById('btn-clear-console');

function logMessage(message) {
  document.getElementById("console-log").innerHTML += message + "<br>";
}

textarea.addEventListener('keydown', (e) => {
  logMessage('keydown event');
  if (e.repeat === true) {
    logMessage(e.key);
  }
  else
  
    logMessage(e.key);
});

textarea.addEventListener('keyup', (e) => {
  if (!e.repeat)
    logMessage(e.key);
  else
    logMessage(e.key);
});

btnClearConsole.addEventListener('click', (e) => {
  let child = consoleLog.firstChild;
  while (child) {
   consoleLog.removeChild(child);
   child = consoleLog.firstChild;
  }
});