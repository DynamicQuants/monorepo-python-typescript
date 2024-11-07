import type { PlopTypes } from '@turbo/gen';
import fs from 'node:fs';
import path from 'node:path';

export default async function generator(plop: PlopTypes.NodePlopAPI): Promise<void> {
  try {
    plop.setGenerator('main', {
      description: 'Generate a new Next.js application',
      prompts: [
        // Type of project.
        {
          type: 'list',
          name: 'type',
          message: 'What type of project should be created?',
          choices: ['app', 'lib'],
        },

        // Type of template.
        {
          type: 'list',
          name: 'template',
          message: 'What template should be created?',
          choices: (answers) =>
            fs
              .readdirSync(path.resolve('turbo/generators/templates'))
              .filter((file) =>
                fs.statSync(path.join('turbo/generators/templates', file)).isDirectory(),
              )
              .filter((file) => file.includes(answers.type)),
        },

        // Name for the app/library.
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your app/library?',
          validate: (input: string): string | true => {
            if (input.includes('.')) {
              return 'App name cannot include an extension';
            }
            if (input.includes(' ')) {
              return 'App name cannot include spaces';
            }
            if (!input) {
              return 'A name for your app/library is required';
            }
            return true;
          },
        },
      ],
      actions: [
        {
          type: 'addMany',
          templateFiles: 'templates/{{template}}/**/*',
          destination: '{{ turbo.paths.root }}/apps/{{name}}',
          base: 'templates/{{template}}',
          globOptions: {
            ignore: [
              '**/node_modules/**',
              '**/dist/**',
              '**/build/**',
              '**/coverage/**',
              '**/.next/**',
              '**/.DS_Store',
              '**/__snapshots__/**',
              '**/__results__/**',
            ],
            dot: true,
          },
          verbose: true,
          abortOnFail: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
}
