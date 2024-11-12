import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

// Initialize the terminal
const terminal = new Terminal({
  cols: 80,
  rows: 24,
  cursorBlink: true,
  theme: {
    background: '#000000',
    foreground: '#00FF00',
  },
});

terminal.open(document.getElementById('terminal') as HTMLElement);

// Command input handling
let command = '';
let history: string[] = [];
let historyIndex = -1;

function prompt() {
  terminal.write('\r\n$ ');
}

terminal.writeln('Welcome to My Portfolio Terminal!');
terminal.writeln('write \'help\' to see the available commands');
prompt();

terminal.onKey((e) => {
  const char = e.key;
  const event = e.domEvent;

  if (event.key === 'Enter') {
    // Enter key pressed
    terminal.write('\r\n');
    executeCommand(command.trim());
    history.push(command);
    historyIndex = history.length;
    command = '';
    prompt();
  } else if (event.key === 'Backspace') {
    // Backspace pressed
    if (command.length > 0) {
      command = command.slice(0, -1);
      terminal.write('\b \b');
    }
  } else if (event.key === 'ArrowUp') {
    // Up arrow for command history
    if (historyIndex > 0) {
      historyIndex--;
      command = history[historyIndex];
      terminal.write(`\r$ ${command}`);
    }
  } else if (event.key === 'ArrowDown') {
    // Down arrow for command history
    if (historyIndex < history.length - 1) {
      historyIndex++;
      command = history[historyIndex];
      terminal.write(`\r$ ${command}`);
    } else {
      historyIndex = history.length;
      command = '';
      terminal.write('\r$ ');
    }
  } else if (
    event.key.length === 1 &&
    !event.ctrlKey &&
    !event.altKey
  ) {
    // Regular characters
    command += char;
    terminal.write(char);
  }
});

// Simulate a simple file system
interface File {
  name: string;
  content: string;
}

interface Directory {
  name: string;
  files: File[];
  directories: Directory[];
}

let currentDirectory: Directory = {
  name: '/',
  files: [
    { name: 'about.txt', content: 'This is about me.' },
    { name: 'projects.txt', content: 'List of projects.' },
  ],
  directories: [],
};

// Command execution
function executeCommand(cmd: string) {
  const args = cmd.split(' ').filter(arg => arg);
  const commandName = args[0];
  const commandArgs = args.slice(1);

  switch (commandName) {
    case 'ls':
      listFiles();
      break;
    case 'cat':
      if (commandArgs.length > 0) {
        showFileContent(commandArgs[0]);
      } else {
        terminal.writeln('Usage: cat <filename>');
      }
      break;
    case 'echo':
      terminal.writeln(commandArgs.join(' '));
      break;
    case 'help':
      showHelp();
      break;
    case 'clear':
      terminal.clear();
      break;
    default:
      terminal.writeln(`Command not found: ${cmd}`);
  }
}

// Implementations of commands
function listFiles() {
  const fileNames = currentDirectory.files.map(file => file.name);
  terminal.writeln(fileNames.join('  '));
}

function showFileContent(fileName: string) {
  const file = currentDirectory.files.find(
    (f) => f.name === fileName
  );
  if (file) {
    terminal.writeln(file.content);
  } else {
    terminal.writeln(`File not found: ${fileName}`);
  }
}

function showHelp() {
  terminal.writeln('Available commands:');
  terminal.writeln('  ls          List files');
  terminal.writeln('  cat         Show file content');
  terminal.writeln('  echo        Echo text');
  terminal.writeln('  clear       Clear the terminal');
  terminal.writeln('  help        Show this help message');
}
