// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const banner = (): string => {
  return `
____    __    ____  _______  __        ______   ______   .___  ___.  _______ 
\\   \\  /  \\  /   / |   ____||  |      /      | /  __  \\  |   \\/   | |   ____|
 \\   \\/    \\/   /  |  |__   |  |     |  ,----'|  |  |  | |  \\  /  | |  |__   
  \\            /   |   __|  |  |     |  |     |  |  |  | |  |\\/|  | |   __|  
   \\    /\\    /    |  |____ |  \`----.|  \`----.|  \`--'  | |  |  |  | |  |____ 
    \\__/  \\__/     |_______||_______| \\______| \\______/  |__|  |__| |_______|

                         ⠰⢷⢿⠄
                    ⠀⠀⠀⠀⠀⣼⣷⣄
                    ⠀⠀⣤⣿⣇⣿⣿⣧⣿⡄
                    ⢴⠾⠋⠀⠀⠻⣿⣷⣿⣿⡀
                    🏀⠀⢀⣿⣿⡿⢿⠈⣿
                    ⠀⠀⠀⢠⣿⡿⠁⠀⡊⠀⠙
                    ⠀⠀⠀⢿⣿⠀⠀⠹⣿
                    ⠀⠀⠀⠀⠹⣷⡀⠀⣿⡄
                    ⠀⠀⠀⠀⣀⣼⣿⠀⢈⣧

        ╔══════════════════════════════════════════════╗
        ║      多读书，多看报，少吃零食多睡觉  ≧◠‿◠≦✌║
        ╚══════════════════════════════════════════════╝             
     +------------------------------------------+
       |                 <u><a href="https://116.205.124.62:42759/4f8c6eab" target="_blank" style="font-size: 22px;">控制面板</a></u>            |
       |                 <u><a href="http://116.205.124.62:5244" target="_blank" style="font-size: 22px;">我的仓库</a></u>            |
       |                 <u><a href="http://116.205.124.62:5700" target="_blank" style="font-size: 22px;">自动脚本</a></u>            |
       |                 <u><a href="https://notion.vvvae.fun" target="_blank" style="font-size: 22px;">阅读记录</a></u>            |
       |                 <u><a href="https://nnotion.vvvae.fun" target="_blank" style="font-size: 22px;">读书笔记</a></u>            |

     +------------------------------------------+
                  |                 |



  `;
};

