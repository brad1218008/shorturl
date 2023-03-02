import pino from 'pino';

const streams = [
  {stream: pino.destination({dest: `logs/all.log`, append: true, sync: false})}
]

export const logger = pino(
  {
    level: 'debug',
    formatters: {
      level: (label) => {
        return {
          level: label
        }
      }
    }
  },
  pino.multistream(streams)
)