import factory from 'yargs/yargs';
import module2 from './module-2';

export default cli;

function cli(cwd) {
  const parser = factory(null, cwd);

  parser.alias('h', 'help');
  parser.alias('v', 'version');

  parser.usage(
    "$0",
    "TODO: description",
    yargs => {
      yargs.options({
        // TODO: options
      });
    },
    argv => module2(argv)
  );

  return parser;
}
