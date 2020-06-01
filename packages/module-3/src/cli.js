import factory from 'yargs/yargs';
import module3 from './module-3';

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
    argv => module3(argv)
  );

  return parser;
}
