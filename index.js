'use strict';

module.exports = {
  // Pins on the left side.
  p1: {
    group: 'ephy',
    gpio: 43
  },
  p8: {
    group: 'uart2',
    gpio: 20,
    pwm: 2,
    uart: {
      type: 'tx',
      index: 2
    }
  },
  p9: {
    group: 'uart2',
    gpio: 21,
    pwm: 3,
    uart: {
      type: 'rx',
      index: 2
    }
  },
  p10: {
    group: 'i2s',
    gpio: 2,
    i2s: 'ws'
  },
  p11: {
    group: 'i2s',
    gpio: 3,
    i2s: 'clk'
  },
  p12: {
    group: 'i2s',
    gpio: 0,
    i2s: 'sdi'
  },
  p13: {
    group: 'i2s',
    gpio: 1,
    i2s: 'sdo'
  },
  // Pins on the right side.
  p14: {
    group: 'refclk',
    gpio: 37
  },
  p15: {
    group: 'wled',
    gpio: 44
  },
  p16: {
    group: 'uart1',
    gpio: 46,
    uart: {
      type: 'rx',
      index: 1
    }
  },
  p17: {
    group: 'uart1',
    gpio: 45,
    uart: {
      type: 'tx',
      index: 1
    }
  },
  p18: {
    group: 'uart0',
    gpio: 13,
    uart: {
      type: 'rx',
      index: 0
    }
  },
  p19: {
    group: 'uart0',
    gpio: 12,
    uart: {
      type: 'tx',
      index: 0
    }
  },
  p20: {
    group: 'i2c',
    gpio: 5,
    i2c: 'sd'
  },
  p21: {
    group: 'i2c',
    gpio: 4,
    i2c: 'sclk'
  },
  p25: {
    group: 'spi_cs1',
    gpio: 6
  },
  p26: {
    group: 'pwm0',
    gpio: 18,
    pwm: 0
  },
  p27: {
    group: 'pwm1',
    gpio: 19,
    pwm: 1
  },
  p28: {
    group: 'spi_s',
    gpio: 17
  },
  p29: {
    group: 'spi_s',
    gpio: 16
  },
  p30: {
    group: 'spi_s',
    gpio: 15
  },
  p31: {
    group: 'spi_s',
    gpio: 14
  }
};
